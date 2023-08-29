import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

export default function Sidebar({ sidebar, setCategory, category, height }) {
  const controls = useAnimation();
  const [matches, setMatches] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setCollapsed(matches);
    const query = `(min-width: 768px)`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);

  useEffect(() => {
    controls.start({ x: collapsed ? 0 : "-232px" });
  }, [collapsed]);


  return (
    <div className="sidebar" style={{height: collapsed ? "auto" : height}}>
      <motion.div
        animate={controls}
        transition={{ ease: [0.35, 0.17, 0.3, 0.86] }}
        className="sticky"
      >
        <Link
          to={`/tutorials/All`}
          onClick={() => setCategory("All")}
          className={category === "All" ? "active" : ""}
        >
          All
        </Link>
        {sidebar.map((e, i) => {
          return (
            <Link
              to={`/tutorials/${Object.keys(e)[0]}`}
              key={i}
              onClick={() => setCategory(e)}
              className={category === e ? "active" : ""}
            >
              {Object.keys(e)[0]}
            </Link>
          );
        })}
        {!matches && (
          <div className="expand-button" onClick={() => setCollapsed(!collapsed)}>
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
