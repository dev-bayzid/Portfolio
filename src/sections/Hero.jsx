"use client";

import { useState, useEffect } from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Button from "@/ui/Button";
import { ArrowRight, Download } from "lucide-react";
import AnimatedButton from "@/ui/AnimatedButton";

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

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Engineer • React Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200 animate-fade-in animation-delay-200">
                Hi, I'm Bayzid Hasan — a passionate web developer and
                cybersecurity enthusiast focused on building modern, responsive,
                and performant web applications. I'm constantly learning,
                experimenting, and growing as a developer.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5"></ArrowRight>
              </Button>
              <AnimatedButton>
                <Download className="w-5 h-5"></Download> Download CV
              </AnimatedButton>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me:</span>
              {[
                { icon: FiGithub, href: "https://github.com/dev-bayzid" },
                {
                  icon: FaLinkedin,
                  href: "www.linkedin.com/in/bayzid-hasan-dev"
                },
                {
                  icon: FaInstagram,
                  href: "https://www.instagram.com/dev_bayzid/",
                },
              ].map((social, ind) => (
                <a key={ind} href={social.href} className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300">
                  {<social.icon size={28}/>}
                </a>
              ))}
            </div>
          </div>
          {/* Right Column - Profile Image */}
          <div className="relative animate-fade-in animation-delay-300 ">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/30 via-transparent to-primary/10 blur-2xl animate-pulse"/>
                <div className="relative glass rounded-3xl p-2 glow-border">
                    <img src="/profile.jpg" alt="Bayzid Hasan" className="w-full aspect-[4/5] object-cover rounded-2xl" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
