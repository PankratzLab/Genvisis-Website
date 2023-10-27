import React, { useContext, useEffect, useState } from "react";
import { PageChange } from ".";
import { motion } from "framer-motion";
import Image from "./Image";
import parse, { domToReact } from "html-react-parser";

export default function Body({ initialPage }) {
  const [page, setPage] = useContext(PageChange);
  const [HTML, setHTML] = useState();

  useEffect(() => {
    (async () => {
      setHTML(null);
      let p = page;
      if (initialPage === undefined) return;
      if (page === "home") {
        p = initialPage.slice(0, -3);
      }
      const data = await fetch(`/docs/${p}.html`);
      if (data.status === 404) {
        setHTML(`${page}.md does not exist in the github repository`);
        return;
      }
      const res = await data.text();
      setHTML(res);
    })();
  }, [page, initialPage]);

  const options = {
    replace: ({ name, attribs, children, data }) => {
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
        return (
          <div className="block">
            <div className={`header ${typeNoSpace}Header`}>
              <img src={`/images/${typeNoSpace}Icon.svg`} className="icon" />
              {type}
            </div>
            <p>{domToReact(children, options)}</p>
          </div>
        );
      }
    },
  };

  const handleLoader = () => {
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
  };

  return handleLoader();
}
