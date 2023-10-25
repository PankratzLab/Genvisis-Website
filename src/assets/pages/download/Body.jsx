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
          <div className="starter-project">
            <a
              href={content["Starter Project Illumina"].link}
              target="_blank"
              className="button"
            >
              {content["Starter Project Illumina"].title}
            </a>
            <p>{parse(content["Starter Project Illumina"].description)}</p>
          </div>
          <div className="starter-project">
            <a
              href={content["Starter Project Affymetrix"].link}
              target="_blank"
              className="button"
            >
              {content["Starter Project Affymetrix"].title}
            </a>
            <p>{parse(content["Starter Project Affymetrix"].description)}</p>
          </div>
          <div className="sample-project">
            <p></p>
            <a
              href={content["Sample Project Illumina"].link}
              target="_blank"
              className="button"
            >
              {content["Sample Project Illumina"].title}
            </a>
            <p>{parse(content["Sample Project Illumina"].description)}</p>
          </div>
           <div className="sample-project">
            <a
              href={content["Sample Project Affymetrix"].link}
              target="_blank"
              className="button"
            >
              {content["Sample Project Affymetrix"].title}
            </a>
            <p>{parse(content["Sample Project Affymetrix"].description)}</p>
          </div>
        </div>
      </div>
    </main>
  );
}
