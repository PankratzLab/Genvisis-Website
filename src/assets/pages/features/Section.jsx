import React, { useEffect, useState } from "react";
import parse from "html-react-parser";
import { motion, AnimatePresence } from "framer-motion";
import useMeasure from "react-use-measure";

export default function Section({ data }) {
  const [carousel, setCarousel] = useState([]);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setContent(parse(data, parseText));
  }, []);

  const parseText = {
    replace: ({ name, children }) => {
      if (name === "p" && children[0].name === "img") {
        const arr = children
          .filter((e) => e.name !== "img")
          .filter((e) => e?.data !== "\n");

        setCarousel((prev) => {
          return [...prev, arr];
        });

        setImages((prev) => {
          return [...prev, children.filter((e) => e.name === "img")[0].attribs];
        });

        return <></>;
      }
    },
  };

  const captionParse = (data) => {
    if (data.type === "text") {
      return data.data;
    }

    if (data.name === "a") {
      return (
        <a href={data.attribs.href} target="_blank">
          {data.children[0].data}
        </a>
      );
    }
  };

  const [isMissingImage, setIsMissingImage] = useState(false)
  const [direction, setDirection] = useState("100%");
  const handleSlide = (add) => {
    setIsMissingImage(false)
    setCurrent((prev) => (prev + add) % carousel.length);
    add === 1 ? setDirection("100%") : setDirection("-100%");
  };

  let [ref, { height }] = useMeasure();

  return (
    <>
      <div className="feature-summary">{content}</div>
      <div className="carousel-container">
        {carousel?.length > 1 && (
          <div className="buttons">
            <div className="left" onClick={() => handleSlide(carousel.length - 1)}>
              <svg
                id="a"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
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
            <div className="right" onClick={() => handleSlide(1)}>
              <svg
                id="a"
                xmlns="http://www.w3.org/2000/svg"
                width="64"
                height="64"
                viewBox="0 0 64 64"
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
          </div>
        )}
        <div className="carousel">
          <AnimatePresence>
            <div className="image-container">
              {isMissingImage && <div>Image missing</div>}
              <motion.img
                onError={() => setIsMissingImage(true)}
                className="featured-image"
                src={`/Features${images[current]?.src}`}
                alt={images[current]?.alt}
                key={current}
                initial={{ x: direction, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ ease: [0, 0.89, 0.08, 1], opacity: { duration: 0.3 } }}
              />
            </div>
            <motion.div animate={{ height }}>
              <div ref={ref}>
                {carousel[0] &&
                  carousel[current]?.map((e, i) => {
                    return (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {captionParse(e)}
                      </motion.span>
                    );
                  })}
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="dots">
            {carousel[0] &&
              carousel?.map((e, i) => {
                return <div key={i} className={current === i ? "active" : ""}></div>;
              })}
          </div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
}
