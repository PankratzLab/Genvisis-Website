import React, { useEffect, useState } from "react";
import Versions from "./Versions";

export default function Changelog1() {
  const [versions, setVersions] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("/Downloads/downloads.json");
      const res = await data.json();
      setVersions(res);
    })();
  }, []);

  return (
    <div className="release-boxes-container">
      {versions.map((e, i) => {
        return (
          <Versions
            key={i}
            changelog={e.changelog}
            version={e.version}
            date={e.date}
            download={e["download link"]}
          />
        );
      })}
    </div>
  );
}
