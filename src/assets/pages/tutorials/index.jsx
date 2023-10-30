import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Footer from "../../../assets/components/Footer";
import Sidebar from "./Sidebar";
import useMeasure from "react-use-measure";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function index() {
  const [sidebarItems, setSidebarItems] = useState([]);
  const [data, setData] = useState([]);
  const [category, setCategory] = useState("All");

  useEffect(() => {
    (async () => {
      const data = await fetch("/Tutorials/toc.json");
      const res = await data.json();
      setSidebarItems(res);

      res.map((e) => {
        const parsedData = (prev) => {
          return [...prev, ...Object.values(e)[0]];
        };
        setData(parsedData);
      });
    })();
  }, []);

  let [ref, { height }] = useMeasure();

  const mediaQuery = useMediaQuery("md");
  const header = (
    <header className={`tutorials ${mediaQuery ? "" : "mobile-header"}`}>
      <h1>Browse Tutorials</h1>
      <div className="dividing-line"></div>
    </header>
  );

  return (
    <>
      {mediaQuery && header}
      <main className="tutorials">
        <Sidebar
          sidebarItems={sidebarItems}
          category={category}
          setCategory={setCategory}
          height={height}
        />
        {!mediaQuery && header}
        <div className="content" ref={ref}>
          <AnimatePresence>
            <Outlet />
          </AnimatePresence>
        </div>
      </main>
      <Footer />
    </>
  );
}
