import React, { useEffect, useState } from "react";
import parse from "html-react-parser";

export default function Changelog() {
  const [changelogs, setChangelogs] = useState([]);
  async function setHTML(HTML) {
    const data = await fetch(`other-content/Downloads/${HTML}`);
    const res = await data.text();
    setChangelogs((prev) => [...prev, res]);
  }

  useEffect(() => {
    (async () => {
      const data = await fetch("other-content/Downloads/fileNames.json");
      const res = await data.json();
      for (const HTML of res) {
        await setHTML(HTML);
      }
    })();
  }, []);

  const options = {
    replace: ({ name, attribs, children }) => {
      //make all non-anchor links open in new tab
      if (name === "a" && attribs.href[0] !== "#") {
        return (
          <a rel="external" href={`http://${attribs.href}`} target="_blank">
            {children[0].data}
          </a>
        );
      }

      if (name === "h2" || name === "h3") {
        return <div>{children[0].data}</div>;
      }
    },
  };

  return (
    <div className="release-boxes-container">
      {changelogs?.reverse().map((e, index) => {
        return <div key={index}>{parse(e, options)}</div>;
      })}
    </div>
  );
}
