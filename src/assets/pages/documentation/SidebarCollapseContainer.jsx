import React, { useState, useEffect } from "react";
import {useAnimate} from 'framer-motion'

export default function SidebarCollapseContainer({ handleSidebarItems, keys, values }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate(scope.current, isCollapsed ? {height: 0} : {height: 'auto'})
  }, [isCollapsed])

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
          return handleSidebarItems(e, index);
        })}
      </div>
    </div>
  );
}
