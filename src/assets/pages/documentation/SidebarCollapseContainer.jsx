import React, { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
import SidebarItem from "./SidebarItem";

export default function SidebarCollapseContainer({ keys, values, setParentCollapse }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (!!setParentCollapse) setParentCollapse(isCollapsed)
    animate(scope.current, isCollapsed ? { height: 0 } : { height: "auto" });
  }, [isCollapsed]);

  return (
    <div className="collapse-container">
      <div
        className={`item-header`}
        onClick={() => {
          setIsCollapsed(!isCollapsed);
        }}
      >
        <svg
          id="a"
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          style={isCollapsed ? null : { transform: "rotate(90deg)" }}
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
        <div>{keys}</div>
      </div>
      <div ref={scope} className="nested-group">
        {values.map((e, index) => {
          if (typeof Object.values(e)[0] === "object") {
            return (
              <SidebarCollapseContainer
                key={index}
                keys={Object.keys(e)[0]}
                values={Object.values(e)[0]}
                setParentCollapse={setIsCollapsed}
              />
            );
          } else {
            return (
              <SidebarItem
                key={index}
                keys={Object.keys(e)[0]}
                values={Object.values(e)[0]}
                isCollapsed={isCollapsed}
                setIsCollapsed={setIsCollapsed}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
