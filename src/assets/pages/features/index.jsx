import React, { useEffect, useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";
import Footer from "../../../assets/components/Footer";

export default function index() {
  const [HTML, setHTML] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await fetch("/Features/toc.json");
      const res = await data.json();
      const parsedRes = res.map((e) => e.toLowerCase().replaceAll(" ", "-") + ".html");
      const fetchAll = await Promise.all(parsedRes.map((e) => fetch(`/Features/${e}`)));
      const resAll = await Promise.all(fetchAll.map((e) => e.text()));
      setHTML(resAll);
    })();
  }, []);

  return (
    <>
      <header className="features container">
        <h1>Features</h1>
        <div className="sub-header">Click on any image below to explore examples of the biological or technical artifacts that a Genvisis module is designed to visualize and address.</div>
        <div className="gradient"></div>
        <img src="/images/grid.png" alt="grid graphic" className="grid"/>
      </header>
      <div className="custom-shape-divider-bottom-1686808296">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
            fill="rgb(255, 255, 255)"
          ></path>
        </svg>
      </div>
      <main className="features">
        <div className="body">
          {HTML.map((e, i) => {
            return (
              <motion.section key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <Section data={e} />
              </motion.section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
