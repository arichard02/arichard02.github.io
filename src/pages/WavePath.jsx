// 
// src/components/WavePath.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WavePath.css";

gsap.registerPlugin(ScrollTrigger);

const WavePath = () => {
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up the stroke styles for animation
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Animate when it enters the viewport
    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="container" viewBox="0 0 800 800">
      <path
        ref={pathRef}
        className="line"
        d="M 0 100
           S 50 0, 100 100
           S 150 100, 200 100
           S 250 0, 300 100
           S 350 150, 400 100
           S 450 0, 500 100"
      />
    </svg>
  );
};

export default WavePath;
