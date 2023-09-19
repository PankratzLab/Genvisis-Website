import React from "react";
import Changelog from "./Changelog";
import content from "./content";
import parse from "html-react-parser";

export default function Body() {
  return (
    <main className="release-content-container">
      <div className="release-content">
        <div className="previous-versions">
          <h2 className="changelog">{content["Previous Versions"]}</h2>
          <Changelog />
        </div>
        <div className="example-projects">
          <h2>{content["Example Projects"]}</h2>
          <div className="raw-project">
            <a
              href={content["Raw Project"].link}
              target="_blank"
              className="button"
            >
              {content["Raw Project"].title}
            </a>
            <p>{parse(content["Raw Project"].description)}</p>
          </div>
          <div className="completed-project">
            <a
              href={content["Completed Project"].link}
              target="_blank"
              className="button"
            >
              {content["Completed Project"].title}
            </a>
            <p>{parse(content["Completed Project"].description)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
