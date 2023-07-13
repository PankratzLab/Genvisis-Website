import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Versions({ content, header, delay }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: delay * 0.05, y: { ease: [0.01, 0.83, 0, 0.99] } }}
      className="version-container"
    >
      <div className="header" onClick={() => setIsExpanded(!isExpanded)}>
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          style={isExpanded ? { transform: "rotate(90deg)" } : null}
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
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        className="body"
      >
        {content}
      </motion.div>
    </motion.div>
  );
}
