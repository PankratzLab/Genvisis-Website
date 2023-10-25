import React from "react";
import Footer from "../../../assets/components/Footer"
import Body from "./Body";

export default function index() {
  return (
    <>
      <header className="download container">
        <h1>Download Genvisis</h1>
        <div className="buttons">
          <a>
            <div className="primary button"><a href="http://genvisis.umn.edu/jar/genvisis.jar" target="_blank">Latest Version</a></div>
          </a>
          <a>
            <div className="secondary button">Previous Versions</div>
          </a>
        </div>
        <div>Must have Java 11 or newer installed</div>
        <div className="gradient"></div>
        <img src="/images/grid.png" alt="grid graphic" className="grid"/>
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
      <Body />
      <Footer />
    </>
  );
}
