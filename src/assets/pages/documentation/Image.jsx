import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Image({ attribs }) {
  const [isImgPopup, setIsImgPopup] = useState(false);
  return (
    <>
      <img
        src={`/docs/${attribs.src}`}
        className="docs-image"
        alt={attribs.alt}
        onClick={() => setIsImgPopup(true)}
      />
      <AnimatePresence>
        {isImgPopup && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={attribs.src}
            className="popup"
            onClick={() => setIsImgPopup(false)}
          >
            <motion.img
              initial={{ transform: "scale(0.8)" }}
              animate={{ transform: "scale(1)" }}
              exit={{ transform: "scale(0.8)" }}
              src={`/docs/${attribs.src}`}
            />
            <motion.span
              initial={{ y: 30 }}
              animate={{ y: 0 }}
              exit={{ y: 30 }}
              transition={{duration: 0.3}}
              className="caption"
            >
              {attribs.alt}
            </motion.span>
          </motion.span>
        )}
      </AnimatePresence>
    </>
  );
}
