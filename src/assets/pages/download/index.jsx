import React, { useEffect } from "react";
import Changelog from "./Changelog";

export default function index() {
  return (
    <>
      <header className="download-container">
        <h1>Download Genvisis</h1>
        <div className="download-buttons">
          <a>
            <div className="latest-version dl-button">Latest Version</div>
          </a>
          <a>
            <div className="previous-version dl-button">Previous Versions</div>
          </a>
        </div>
        <div className="version-notice">Must have Java 11 or newer installed</div>
      </header>
      <div className="custom-shape-divider-bottom-1686808296">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="rgb(255, 255, 255)"
          ></path>
        </svg>
      </div>
      <main className="release-content-container">
        <div className="release-content">
          <h2 className="changelog">Previous Versions</h2>
          <Changelog />
        </div>
      </main>
    </>
  );
}
