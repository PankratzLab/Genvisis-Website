import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function SidebarItem({ keys, values }) {
  const { id } = useParams();
  return (
    <Link
      className={
        `item` + (values.replaceAll("/", "--").slice(0, -3) === id ? " item-active" : "")
      }
      to={`/documentation/${values?.slice(0, -3).replaceAll("/", "--")}`}
    >
      <div>{keys}</div>
    </Link>
  );
}
