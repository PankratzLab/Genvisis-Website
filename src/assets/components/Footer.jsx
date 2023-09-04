import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useMediaQuery } from "../hooks/useMediaQuery";

export default function Footer() {
  const mediaQuery = useMediaQuery("md");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <div className="footer-container">
        <div className="left">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/download">Download</Link>
            </li>
            <li>
              <Link to="/features">Features</Link>
            </li>
            <li>
              <Link to="/tutorials/All">Tutorials</Link>
            </li>
            <li>
              <Link to="/documentation/home">Documentation</Link>
            </li>
          </ul>
        </div>
        {handleMediaQuery(<div className="vertical-line"></div>, null)}
        <div className="right">
          <ul>
            <li>
              <strong>Nathan Pankratz, PhD</strong>
            </li>
            <li>Professor of Laboratory Medicine & Pathology</li>
            <li>University of Minnesota</li>
            <li>515 Delaware Street SE Minneapolis <br /> MN 55455</li>
          </ul>
          <ul>
            <li>612-624-2456</li>
            <li>pankr018@umn.edu</li>
            <li>
              <Link>YouTube</Link>
            </li>
            <li>
              <Link>LinkedIn</Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.footer>
  );
}
