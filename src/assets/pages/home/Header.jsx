import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import content from "./content";
import parse from "html-react-parser";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Header() {
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
    <header className="home-header">
        <div className="header-background-graphic">
          <img
            src="/images/homepage/Genvisis-Graphic1.png"
            alt="background graphic"
            // className="header-background-graphic"
          />
        </div>
      <div className="header">
        <h1>{parse(content.title)}</h1>
        <div className="buttons">
          <Link className="download" to="/download">
            Download Genvisis
          </Link>
          <Link className="documentation" to="/documentation/introduction">
            Documentation
          </Link>
        </div>
        {handleMediaQuery(
          <>
            <img
              src="/images/homepage/computer-screen.png"
              alt="computer screen"
              className="computer-screen"
            />
            <img
              src={content["laptop image"]}
              alt="Screenshot of the Genvisis Software"
              className="computer-screen-image"
            />
            <motion.img
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, x: { duration: 1, ease: [0, 0.89, 0.08, 1] } }}
              src={content["floating window image"]}
              alt="Screenshot of the Genvisis Software"
              className="floating-window-image"
            />
          </>,
          null
        )}
      </div>
      <div className="home-custom-shape-divider home-dividers">
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
    </header>
  );
}
