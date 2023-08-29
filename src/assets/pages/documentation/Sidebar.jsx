import React, { useState, useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarCollapseContainer from "./SidebarCollapseContainer";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { motion, useAnimation } from "framer-motion";

export default function Sidebar({ mdData }) {
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

  const mediaQuery = useMediaQuery("lg");
  const handleMediaQuery = (big, small) => {
    let sizeSelect = mediaQuery;
    if (sizeSelect) {
      return big;
    } else {
      return small;
    }
  };

  const controls = useAnimation();
  const [matches, setMatches] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    setCollapsed(matches)
    const query = `(min-width: 1024px)`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches]);

  useEffect(() => {
    controls.start({x: collapsed ? 0 : "-315px"})
  }, [collapsed])

  return (
    <aside className="sidebar">
      <motion.div animate={controls} transition={{ease:[.35,.17,.3,.86]}} className="sidebar-sticky">
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items">
          {mdData?.map((e, index) => {
            return handleSidebarItems(e, index);
          })}
        </div>
        {handleMediaQuery(
          null,
          <div className="expand-button" onClick={() => setCollapsed(!collapsed)}>
            <svg
              id="a"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 64 64"
              style={{transform: collapsed ? "rotate(180deg)" : "rotate(0)", transition: "0.4s"}}
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
