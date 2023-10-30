import React, { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarCollapseContainer from "./SidebarCollapseContainer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

export let firstItem;

export default function Sidebar() {
  //loop through TOC
  const handleSidebarItems = (data, index) => {
    //create nested container if value is array
    const keys = Object.keys(data)[0];
    const values = Object.values(data)[0];
    if (Array.isArray(values)) {
      return (
        <SidebarCollapseContainer
          key={index}
          handleSidebarItems={handleSidebarItems}
          keys={keys}
          values={values}
        />
      );
    }
    return <SidebarItem key={index} keys={keys} values={values} />;
  };

  const [items, setItems] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    (async function fetchData() {
      const data = await fetch(`/docs/toc.json`);
      const res = await data.json();
      const itemArr = res.map((e, i) => {
        return handleSidebarItems(e, i);
      });
      //navigate to first item
      firstItem = itemArr[0].props.values.slice(0, -3)
      navigate(firstItem);
      setItems(itemArr);
    })();
  }, []);

  //sidebar collapse controls
  const mediaQuery = useMediaQuery("lg");
  const controls = useAnimation();
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    controls.start({ x: mediaQuery ? 0 : "-315px"});
    setCollapsed(mediaQuery)
  }, [mediaQuery]);

  const handleExpand = () => {
    setCollapsed(!collapsed)
    controls.start({ x: collapsed ? "-315px" : 0});
  }

  return (
    <aside className="sidebar">
      <motion.div
        animate={controls}
        transition={{ ease: [0.35, 0.17, 0.3, 0.86] }}
        className="sidebar-sticky"
      >
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items">
          {items?.map((e) => {
            return e;
          })}
        </div>
        {!mediaQuery && (
          <div className="expand-button" onClick={() => handleExpand()}>
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
    </aside>
  );
}
