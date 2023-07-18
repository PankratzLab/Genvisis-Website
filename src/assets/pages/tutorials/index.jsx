import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function index() {
  const [sidebar, setSidebar] = useState([]);
  const [data, setData] = useState([]);
  const [content, setContent] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    (async () => {
      const data = await fetch("/Tutorials/toc.json");
      const res = await data.json();
      setSidebar(res);

      res.map((e) => {
        Object.values(e)[0].map((r) => {
          r.category = Object.keys(e)[0];
        });
        const parsedData = (prev) => {
          return [...prev, ...Object.values(e)[0]];
        };
        setData(parsedData);
        setContent(parsedData);
      });
      console.log(res);
    })();
  }, []);

  useEffect(() => {
    if (category === "All") {
      setContent(data);
      return;
    } else {
      setContent(Object.values(category)[0]);
    }
  }, [category]);

  return (
    <>
      <header className="tutorials">
        <h1>Browse Tutorials</h1>
        <div className="dividing-line"></div>
      </header>
      <main className="tutorials">
        <div className="sidebar">
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
        </div>
        <div className="content">
          <AnimatePresence>
            {content.map((e, i) => {
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
                        backgroundImage: `url(/Tutorials/videos/${
                          e.src.slice(0, -4) + ".jpg"
                        })`,
                        backgroundSize: 'cover'
                      }}
                    ></div>
                    <div className="title">{e.title}</div>
                  </Link>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </main>
    </>
  );
}
