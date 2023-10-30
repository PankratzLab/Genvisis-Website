import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function Sidebar({ contentHeight }) {
  const controls = useAnimation();
  const [collapsed, setCollapsed] = useState(false);
  const mediaQuery = useMediaQuery("md");
  const { id } = useParams();

  useEffect(() => {
    controls.start({ x: mediaQuery ? 0 : "-232px" });
    setCollapsed(mediaQuery);
  }, [mediaQuery]);

  const handleSidebar = () => {
    setCollapsed(!collapsed);
    controls.start({ x: collapsed ? "-232px" : 0 });
  };

  const [sidebarItems, setSidebarItems] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("/Tutorials/toc.json");
      const res = await data.json();
      setSidebarItems(res);
    })();
  }, []);

  return (
    <div className="sidebar" style={{ height: contentHeight }}>
      <motion.div
        animate={controls}
        transition={{ ease: [0.35, 0.17, 0.3, 0.86] }}
        className="sticky"
      >
        <Link to={`/tutorials/All`} className={id === "All" ? "active" : ""}>
          All
        </Link>
        {sidebarItems.map((e, i) => {
          return (
            <Link
              to={`/tutorials/${Object.keys(e)[0]}`}
              key={i}
              onClick={() => setCategory(e)}
              className={id === Object.keys(e)[0] ? "active" : ""}
            >
              {Object.keys(e)[0]}
            </Link>
          );
        })}
        {!mediaQuery && (
          <div className="expand-button" onClick={() => handleSidebar()}>
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 64 64"
              style={{
                transform: collapsed ? "rotate(180deg)" : "rotate(0)",
                transition: "0.4s",
              }}
            >
              <path
                d="m19.53,53.08l23.7-20.07c.64-.54.64-1.48,0-2.02L19.53,10.92"
                fill="#fff"
                stroke="#000"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="7"
              />
            </svg>
          </div>
        )}
      </motion.div>
    </div>
  );
}
