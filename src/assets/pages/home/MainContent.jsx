import React from "react";
import content from "./content";
import parse from "html-react-parser";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../../hooks/useMediaQuery";

function Section1() {
  return (
    <section className="section1">
      <div className="section-image-container">
        <div className="image-backdrop">
          <img
            src="/images/homepage/home-page-image2.png"
            alt="Screenshot of the Genvisis Software"
          />
        </div>
      </div>
      <div className="content">
        <h2>{content["section 1"].title}</h2>
        <p>{parse(content["section 1"].paragraph)}</p>
      </div>
    </section>
  );
}

function Section2() {
  const mediaQuery = useMediaQuery("xl");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };
  return (
    <section className="section2">
      <div className="content">
        <h2>{content["section 2"].title}</h2>
        <p>{parse(content["section 2"].paragraph)}</p>
        <Link to="/features">View Features</Link>
      </div>
      {handleMediaQuery(
        <img src="/images/homepage/Features-Graphic.svg" alt="Genvisis Graphic" />,
        null
      )}
    </section>
  );
}

function Section3() {
  const mediaQuery = useMediaQuery("xl");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };
  return (
    <section className="section3">
      <div className="content">
        <h2>{content["section 3"].title}</h2>
        <p>{parse(content["section 3"].paragraph)}</p>
      </div>
      {handleMediaQuery(
        <div className="graphic-container">
          <img src="/images/homepage/Genvisis-Graphic.png" alt="Genvisis Graphic" />
        </div>,
        null
      )}

      <div className="download-link">
        <Link to="/download">Download Genvisis</Link>
      </div>
    </section>
  );
}

export { Section1, Section2, Section3 };
