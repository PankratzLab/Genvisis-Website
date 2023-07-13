import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Video() {
  const location = useLocation();
  const paths = location.pathname.replaceAll("%20", " ").slice(11).split("/");
  const [content, setContent] = useState({});
  const [videoList, setVideoList] = useState();
  const videoRef = useRef();

  async function fetchData() {
    const data = await fetch("/Tutorials/toc.json");
    const res = await data.json();
    const sanitizedEntries = res.filter((e) => Object.keys(e)[0] === paths[0])[0];
    setContent(Object.values(sanitizedEntries)[0].filter((e) => e.title === paths[1])[0]);
    setVideoList(Object.values(sanitizedEntries)[0]);
    videoRef.current.load();
  }

  useEffect(() => {
    fetchData();
  }, [location]);

  return (
    <main className="tutorial-video">
      <aside className="sidebar">
        <Link to={"/tutorials/All"} className="back">
          <svg
            id="a"
            xmlns="http://www.w3.org/2000/svg"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            style={{ rotate: "180deg" }}
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
          Back
        </Link>
        <div className="dividing-line"></div>
        <div className="video-list">
          {videoList?.map((e, i) => {
            return (
              <Link
                className={paths[1] === e.title ? "active" : ""}
                key={i}
                to={`/tutorials/${paths[0]}/${e.title}`}
              >
                {e.title}
              </Link>
            );
          })}
        </div>
      </aside>
      <motion.div
        key={content.src}
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ y: { ease: [0.01, 0.83, 0, 0.99] }, duration: 0.5 }}
        className="content"
      >
        <h1>{content.title} <span className="category">{paths[0]}</span></h1>
        <video controls ref={videoRef}>
          <source src={`/Tutorials/videos/${content.src}`} type="video/mp4" />
        </video>
        <p>{content.summary}</p>
      </motion.div>
    </main>
  );
}
