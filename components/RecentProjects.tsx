"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { Spotlight } from "./ui/Spotlight";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  color: string;
  animationSpeed: number;
  colors?: number[][];
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include product management, cart functionality, and secure payment processing.",
    image: "/p1.svg",
    github: "https://github.com/miibo-dev/ecommerce",
    color: "bg-emerald-900",
    animationSpeed: 5.1,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates using React, Node.js, and Socket.io. Includes team features, deadlines, and progress tracking.",
    image: "/p2.svg",
    github: "https://github.com/miibo-dev/task-manager",
    color: "bg-pink-900",
    animationSpeed: 3,
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
  },
  {
    id: 3,
    title: "AI Chatbot",
    description: "An intelligent chatbot powered by OpenAI API with custom training data. Built with React and Python backend, featuring natural language processing and context awareness.",
    image: "/p3.svg",
    github: "https://github.com/miibo-dev/ai-chatbot",
    color: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
  },
];

const RecentProjects = () => {
  return (
    <section id="projects" className="w-full pb-20 pt-6 relative">
      {/* Section Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      {/* Spotlight from left only */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>

      <h1 className="heading">
        Featured <span className="text-purple">Projects</span>
      </h1>

      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto relative lg:h-[35rem] rounded-3xl overflow-hidden"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Background Image - Always Visible */}
      <div className="absolute inset-0 z-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover opacity-40 group-hover/canvas-card:opacity-20 transition-opacity duration-300"
        />
      </div>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0 z-10"
          >
            <CanvasRevealEffect
              animationSpeed={project.animationSpeed}
              containerClassName={`${project.color} rounded-3xl overflow-hidden opacity-80`}
              colors={project.colors}
              dotSize={2}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 py-8 flex flex-col justify-center h-full">
        {/* Project Title - Always Visible */}
        <div className="text-center mb-4">
          <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg">
            {project.title}
          </h3>
        </div>

        {/* Project Details - shown on hover */}
        <div className="opacity-0 group-hover/canvas-card:opacity-100 transition duration-300">
          <p
            className="text-base relative z-10 mt-4 text-center text-white drop-shadow-md leading-relaxed"
          >
            {project.description}
          </p>

          <div className="flex justify-center mt-8">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 hover:bg-white/30 border border-white/40 transition-all duration-300 group/btn backdrop-blur-sm"
            >
              <FaGithub className="text-xl text-white group-hover/btn:scale-110 transition-transform" />
              <span className="text-white font-semibold">View on GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentProjects;
