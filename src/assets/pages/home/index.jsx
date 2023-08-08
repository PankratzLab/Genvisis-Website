import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../../assets/components/Footer";
import { motion } from "framer-motion";

export default function index() {
  return (
    <>
      <header className="home-header">
        <div className="header">
          <h1>
            Automated best practices for processing and visualizing <br /> genomic data
          </h1>
          <div className="buttons">
            <Link className="download" to="/download">
              Download Genvisis
            </Link>
            <Link className="documentation" to="/documentation/home">
              Documentation
            </Link>
          </div>
          <img
            src="src/assets/pages/home/images/Genvisis-Graphic1.png"
            alt="background graphic"
            className="header-background-graphic"
          />
          <img
            src="src/assets/pages/home/images/computer-screen.png"
            alt="computer screen"
            className="computer-screen"
          />
          <img
            src="src/assets/pages/home/images/home-page-image.png"
            alt="Screenshot of the Genvisis Software"
            className="computer-screen-image"
          />
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{duration: 0.6, x:{duration: 1, ease: [0, 0.89, 0.08, 1]}}}
            src="src/assets/pages/home/images/home-page-image1.png"
            alt="Screenshot of the Genvisis Software"
            className="floating-window-image"
          />
        </div>
        <div className="home-custom-shape-divider home-dividers">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              fill="rgb(255, 255, 255)"
            ></path>
          </svg>
        </div>
      </header>
      <main className="home">
        <section className="section1">
          <div className="section-image-container">
            <div className="image-backdrop">
              <img
                src="src/assets/pages/home/images/home-page-image2.png"
                alt="Screenshot of the Genvisis Software"
              />
            </div>
          </div>
          <div className="content">
            <h2>Dynamic visualization</h2>
            <p>
              Genvisis is a robust software package that takes advantage of unique
              compressed data structures to efficiently process, assess quality of,
              analyze, and visualize the intensity data from GWAS arrays.
            </p>
            <p>
              Specialized algorithms are used to call CNVs, and each algorithm uses its
              own approach. Genvisis allows a CNV to be inspected by visualizing
              boundaries overlaid with probe intensities.
            </p>
          </div>
        </section>
        <section className="section2">
          <div className="content">
            <h2>Powerful features for experts and novices</h2>
            <p>
              Genvisis is an open-source, end-to-end solution for processing raw array
              data and deep resequencing data into variant calls, especially copy number
              variant calls. It also introduces novel methodology to optimize accuracy by
              directly addressing the effects of DNA quality, DNA quantity, and
              batch/plate/flow cell in the data normalization.
            </p>
            <Link to="/features">View Features</Link>
          </div>
          <img
            src="src/assets/pages/home/images/Features-Graphic.svg"
            alt="Genvisis Graphic"
          />
        </section>
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
        <section className="section3">
          <div className="content">
            <h2>Simplifying complex analyses</h2>
            <p>
              Developed in the Pankratz Lab at the University of Minnesota, Genvisis
              introduces novel methodologies and streamlines genomic workflows.
            </p>
          </div>
          <div className="graphic-container">
            <img
              src="src/assets/pages/home/images/Genvisis-Graphic.png"
              alt="Genvisis Graphic"
            />
          </div>
          <div className="download-link">
            <Link to="/download">Download Genvisis</Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
