import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Versions({ content, header }) {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div layout className="version-container">
      <div className="header" onClick={() => setIsCollapsed(!isCollapsed)}>
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          style={isCollapsed ? null : { transform: "rotate(90deg)" }}
        >
          <path
            d="m19.53,53.08l23.7-20.07c.64-.54.64-1.48,0-2.02L19.53,10.92"
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="9"
          />
        </svg>
        {header}
      </div>
      <motion.div
        animate={{ height: isCollapsed ? 0 : "auto", opacity: isCollapsed ? 0 : 1 }}
        className="body"
      >
        {content}
      </motion.div>
    </div>
  );
}
