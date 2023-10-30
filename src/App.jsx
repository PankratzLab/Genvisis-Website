import React, { useState } from "react";
import Documentation from "./assets/pages/documentation";
import Home from "./assets/pages/home";
import Navbar from "./assets/components/Navbar";
import Download from "./assets/pages/download";
import Features from "./assets/pages/features";
import Tutorials from "./assets/pages/tutorials";
import Video from "./assets/pages/tutorials/Video";
import "./assets/styles/index.scss";
import { Route, Routes } from "react-router-dom";
import Body from "./assets/pages/documentation/Body";
import VideoThumbnails from "./assets/pages/tutorials/VideoThumbnails";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/download" element={<Download />} />
        <Route path="/features" element={<Features />} />
        <Route path="/tutorials" element={<Tutorials />}>
          <Route path=":id" element={<VideoThumbnails />} />
        </Route>
        <Route path="/tutorials/:id">
          <Route path=":id" element={<Video />} />
        </Route>
        <Route path="/documentation" element={<Documentation />}>
          <Route path=":id" element={<Body />} />
        </Route>
      </Routes>
    </>
  );
}
