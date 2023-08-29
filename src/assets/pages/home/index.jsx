import React from "react";
import Footer from "../../../assets/components/Footer";
import {Section1, Section2, Section3} from "./MainContent";
import Header from "./Header";

export default function index() {
  return (
    <>
      <Header />
      <main className="home">
        <Section1 />
        <Section2 />
        <div className="home-custom-shape-divider home-dividers">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"></path>
          </svg>
        </div>
        <Section3 />
      </main>
      <Footer />
    </>
  );
}
