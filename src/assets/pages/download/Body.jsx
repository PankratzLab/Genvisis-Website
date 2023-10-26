import React from "react";
import Changelog from "./Changelog";
import content from "./content";
import parse from "html-react-parser";

export default function Body() {
  return (
    <main className="release-content-container">
      <div className="release-content">
        <div className="previous-versions" id="previous-versions">
          <h2 className="changelog">{content["Previous Versions"]}</h2>
          <Changelog />
        </div>
        <div className="example-projects">
          <h2>{content["Example Projects"]}</h2>
          <div className="starter-project">
            <h3>{content["Starter Project"].title}</h3>
            <p>{parse(content["Starter Project"].description)}</p>
            <a
              href={content["Starter Project"].Illumina}
              target="_blank"
              className="button fill"
            >
              Illumina
            </a>
            <a
              href={content["Starter Project"].Affymetrix}
              target="_blank"
              className="button border"
            >
              Affymetrix
            </a>
          </div>
          <div className="sample-project">
            <h3>{content["Sample Project"].title}</h3>
            <p>{parse(content["Sample Project"].description)}</p>
            <a
              href={content["Sample Project"].Illumina}
              target="_blank"
              className="button fill"
            >
              Illumina
            </a>
            <a
              href={content["Sample Project"].Illumina}
              target="_blank"
              className="button border"
            >
              Affymetrix
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
