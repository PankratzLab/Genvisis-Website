import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "./Image";
import parse, { domToReact } from "html-react-parser";
import { useNavigate, useParams } from "react-router-dom";
import { firstItem } from "./Sidebar";

export default function Body() {
  const [HTML, setHTML] = useState();
  const { id } = useParams();
  const navigate = useNavigate()

  useEffect(() => {
    (async () => {
      setHTML(null);
      if (id === "home") {
        navigate(`/documentation/${firstItem}`)
        return
      }
      const data = await fetch(`/docs/${id.replace("--", "/")}.html`);
      if (data.status === 404) {
        setHTML(`${id}.md does not exist in the github repository`);
        return;
      }
      const res = await data.text();
      setHTML(res);
    })();
  }, [id]);

  const options = {
    replace: ({ name, attribs, children, data, type }) => {
      //convert all images to clickable images
      if (name === "img") {
        return <Image attribs={attribs} />;
      }
      //make all non-anchor links open in new tab
      if (name === "a" && attribs.href[0] !== "#") {
        return (
          <a href={attribs.href} target="_blank">
            {children[0].data}
          </a>
        );
      }

      //content blocks
      function handleContentBlock(data) {
        const type = ["Note", "See Also", "Warning"];
        for (let i = 0; i < type.length; i++) {
          if (data?.slice(0, type[i].length + 1) === `${type[i].toUpperCase()}:`) {
            return type[i];
          }
        }
        return false;
      }

      if ((name === "p" || name === "li") && children[0].data !== undefined) {
        const type = handleContentBlock(children[0].data);
        if (!type) return;
        const typeNoSpace = type.replace(" ", "");
        const block = (
          <div className="block">
            <div className={`header ${typeNoSpace}Header`}>
              <img src={`/images/${typeNoSpace}Icon.svg`} className="icon" />
              {type}
            </div>
            <p>{domToReact(children, options)}</p>
          </div>
        );
        return name === "li" ? <li>{block}</li> : block;
      }

      //delete block identifier
      if (type === "text" && handleContentBlock(data)) {
        const type = handleContentBlock(data);
        return <>{data.slice(type.length + 1)}</>;
      }
    },
  };

  if (!HTML) {
    return (
      <div className="load-container">
        <div className="loader">Loading...</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="body"
    >
      {parse(HTML, options)}
    </motion.div>
  );
}
