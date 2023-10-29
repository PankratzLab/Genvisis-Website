import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Documentation() {
  return (
    <main className="documentation">
      <div className="documentation-container">
        <Sidebar />
        <Outlet />
      </div>
    </main>
  );
}
