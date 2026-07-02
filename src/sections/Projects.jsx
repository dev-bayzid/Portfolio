"use client";
import Image from "next/image";
import AnimatedButton from "@/ui/AnimatedButton";
import FadeIn from "@/ui/FadeIn";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

const projects = [
  {
    title: "Keen Keeper",
    description:
      "KeenKeeper is a responsive friendship tracker that helps users stay connected by managing friends, tracking interactions, and viewing communication analytics.",
    image: "/projects/projects03.png",
    tags: ["Next", "Javascript", "Tailwind"],
    link: "#",
    github: "https://github.com/dev-bayzid/Keen-keeper",
  },
  {
    title: "E-Commerce Platform",
    description:
      "A responsive e-commerce application featuring product listings, a dynamic shopping cart, toast notifications, and a seamless checkout experience.",
    image: "/projects/projects02.png",
    tags: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    link: "#",
    github: "https://github.com/dev-bayzid/Digitools-platform",
  },
  {
    title: "AI Writing Assistant",
    description:
      "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    image: "/projects/projects01.png",
    tags: ["React", "OpenAI", "Python", "FastAPI"],
    link: "#",
    github: "https://github.com/dev-bayzid/book-vibe",
  },
  {
    title: "Project Management Tool",
    description:
      "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    image: "/projects/projects04.png",
    tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    link: "#",
    github: "https://github.com/dev-bayzid/English-Janala",
  },
];

// Image with skeleton loading state
const ProjectImage = ({ src, alt }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Skeleton shown until the image finishes loading */}
      {!loaded && <div className="absolute inset-0 bg-surface animate-pulse" />}

      <Image
        src={src}
        alt={alt}
        fill
        onLoadingComplete={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-32 overflow-hidden relative">
      {/* Bg Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="group glass rounded-2xl overflow-hidden md:row-span-1">
                {/* Image */}
                <div className="relative overflow-hidden aspect-video">
                  <ProjectImage src={project.image} alt={project.title} />
                  <div
                    className="absolute inset-0 
                bg-linear-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <AnimatedButton>
            View All Projects
            <ArrowUpRight className="w-5 h-5"></ArrowUpRight>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
