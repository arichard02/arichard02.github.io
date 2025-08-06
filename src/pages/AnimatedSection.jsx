// App.jsx or Section.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import AnimatedSection from "../pages/Section";

gsap.registerPlugin(ScrollTrigger);

const AnimatedSection = ({ title, flipped }) => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const pathLength = path.getTotalLength();

    // Set up the initial strokeDash styles
    gsap.set(path, {
      strokeDasharray: pathLength,
      strokeDashoffset: pathLength,
    });

    // Animate the path as it scrolls into view
    gsap.to(path, {
      strokeDashoffset: 0,
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
      },
      duration: 2,
      ease: "none",
    });
  }, []);

  return (
    <div className="section-wrapper">
      <svg
        className={`custom-svg ${flipped ? "flipped" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 2800 1100"
      >
        <path
          ref={pathRef}
          className="line"
          d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80"
          fill="none"
          stroke="black"
          strokeWidth="4"
        />
      </svg>

      <section className={`panel ${flipped ? "panel-2" : ""}`}>
        <h1>{title}</h1>
      </section>
    </div>
  );
};

export default AnimatedSection;
