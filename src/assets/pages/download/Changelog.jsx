import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import Versions from "./Versions";

export default function Changelog() {
  const [changelogs, setChangelogs] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("Downloads/fileNames.json");
      const res = await data.json();

      const arrayPromise = await Promise.all(res.map(u => fetch(`Downloads/${u}`)))
      const arrayPromiseRes = await Promise.all(arrayPromise.map(res => res.text()))
      setChangelogs(arrayPromiseRes)
    })();
  }, []);

  const optionsContent = {
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
        return <></>
      }
    },
  };

  const optionsHeader = {
    replace: ({ name, attribs, children }) => {
      if (name === "h2") {
        return <h2>{children[0].data}</h2>;
      } else {
        return <></>
      }
    },
  };

  return (
    <div className="release-boxes-container">
      {changelogs?.reverse().map((e, index) => {
        return <Versions key={index} content={parse(e, optionsContent)} header={parse(e, optionsHeader)}/>
      })}
    </div>
  );
}
