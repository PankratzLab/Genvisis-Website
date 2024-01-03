import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export default function SidebarItem({ keys, values, isCollapsed, setIsCollapsed }) {
  const { id } = useParams();

  const isActive = values?.replaceAll("/", "--").slice(0, -3) === id;
  useEffect(() => {
    if (isCollapsed === undefined) return
    if (!isCollapsed || !isActive) return
    setIsCollapsed(!isActive);
  }, []);

  return (
    <Link
      className={`item ` + (isActive ? "item-active" : "")}
      to={`/documentation/${values?.slice(0, -3).replaceAll("/", "--")}`}
    >
      <div>{keys}</div>
    </Link>
  );
}
