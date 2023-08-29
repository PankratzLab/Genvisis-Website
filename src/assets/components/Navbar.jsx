import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "../hooks/useMediaQuery";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const mediaQuery = useMediaQuery("md");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  const [isOpened, setIsOpened] = useState(false);

  
  useEffect(() => {
    const handleDropDownState = (e) => {
      // console.log(e.target)
      if (isOpened && !e.target.closest(".collapse-button")) {
        setIsOpened(false);
      }
    };
    window.addEventListener("click", handleDropDownState);
    return () => window.removeEventListener("click", handleDropDownState);
  }, []);

  return (
    <nav>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="/images/Genvisis_Logo_Full.png" />
          </Link>
        </div>
        {handleMediaQuery(
          <NavbarItems />,
          <NavbarDropDown isOpened={isOpened} setIsOpened={setIsOpened} />
        )}
      </div>
    </nav>
  );
}

function NavbarDropDown({ isOpened, setIsOpened }) {
  return (
    <div className="collapse-button" onClick={() => setIsOpened(!isOpened)}>
      <svg id="a" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 100.05">
        <rect y="0" width="128" height="17.05" rx="8.52" ry="8.52" fill="#dbdbdb" />
        <rect y="41.5" width="128" height="17.05" rx="8.52" ry="8.52" fill="#dbdbdb" />
        <rect y="83" width="128" height="17.05" rx="8.52" ry="8.52" fill="#dbdbdb" />
      </svg>
      <AnimatePresence>
        {isOpened && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="dropdown"
          >
            <NavbarItems />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function NavbarItems() {
  return (
    <ul>
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
  );
}
