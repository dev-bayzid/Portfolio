"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const Hero = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    setDots(
      Array.from({ length: 30 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        duration: 15 + Math.random() * 20,
        delay: Math.random() * 5,
      })),
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Bg */}
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt="Hero Image"
          fill
          priority
          className="w-full h-full object-cover opacity-40"
        />

        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              animation: `slow-drift ${dot.duration}s ease-in-out infinite`,
              animationDelay: `${dot.delay}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
