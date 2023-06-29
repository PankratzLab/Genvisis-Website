import React, { useEffect } from "react";
import SidebarItem from "./SidebarItem";
import SidebarCollapseContainer from "./SidebarCollapseContainer";

export default function Sidebar({ mdData }) {

  //loop through TOC
  const handleSidebarItems = (data, index) => {

    //create nested container if value is array
    const keys = Object.keys(data)[0]
    const values = Object.values(data)[0]
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

  return (
    <aside className="sidebar">
      <div className="sidebar-sticky">
        <h2 className="header">Genvisis Step-By-Step Instructions</h2>
        <div className="sidebar-items">
          {mdData?.map((e, index) => {
            return handleSidebarItems(e, index);
          })}
        </div>
      </div>
    </aside>
  );
}
