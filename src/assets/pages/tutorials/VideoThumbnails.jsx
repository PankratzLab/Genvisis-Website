import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function VideoThumbnails() {
  const { id } = useParams();
  const [allContent, setAllContent] = useState([]);
  const [currentContent, setCurrentContent] = useState([]);

  const fetchAll = async () => {
    const data = await fetch("/Tutorials/toc.json");
    const res = await data.json();
    res.map((e) => {
      //add category to items
      Object.values(e)[0].map((r) => {
        r.category = Object.keys(e)[0];
      });

      const parsedData = (prev) => {
        return [...prev, ...Object.values(e)[0]];
      };
      setAllContent(parsedData);
    });
  };

  useEffect(() => {
    if (allContent.length === 0) {
      fetchAll();
      return;
    }
    if (id === "All") {
      setCurrentContent(allContent);
      return;
    }
    setCurrentContent(allContent.filter((e) => e.category === id));
  }, [id, allContent]);

  return currentContent?.map((e, i) => {
    return (
      <motion.div
        key={i}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{
          y: 50,
          opacity: 0,
          transition: { ease: "easeIn" },
        }}
        transition={{ delay: i * 0.05, y: { ease: [0.01, 0.83, 0, 0.99] } }}
        className="thumbnail-container"
      >
        <Link to={`/tutorials/${e.category}/${e.title}`}>
          <div
            className="thumbnail"
            style={{
              backgroundImage: `url(/Tutorials/videos/${e.src.slice(0, -4) + ".jpg"})`,
              backgroundSize: "cover",
            }}
          ></div>
          <div className="title">{e.title}</div>
        </Link>
      </motion.div>
    );
  });
}
