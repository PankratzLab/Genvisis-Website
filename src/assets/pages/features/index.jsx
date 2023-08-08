import React, { useEffect, useState } from "react";
import Section from "./Section";
import { motion } from "framer-motion";

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
  );
}
