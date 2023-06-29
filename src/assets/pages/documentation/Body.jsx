import React, { useContext, useEffect, useState } from "react";
import { PageChange } from ".";
import { motion } from "framer-motion";
import Image from "./Image";
import parse from "html-react-parser";

export default function Body({ initialPage }) {
  const [page, setPage] = useContext(PageChange);
  const [HTML, setHTML] = useState();

  useEffect(() => {
    (async () => {
      setHTML(null);
      let p = page;
      if (initialPage === undefined) return
      if (page === "home") {
        p = initialPage.slice(0, -3)
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
    replace: ({ name, attribs, children }) => {
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
    }
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
