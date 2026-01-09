"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  color: string;
  animationSpeed: number;
  colors?: number[][];
  category: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Warehouse Automation Digital Twins",
    description: "Portfolio of digital twin and automation 3D simulation projects for intralogistics systems",
    image: "/Simulation_Ratio.gif",
    github: "https://github.com/Miibo-dev/warehouse-automation-digital-twin",
    color: "bg-emerald-900",
    animationSpeed: 5.1,
    category: "Digital Twin",
  },
  {
    id: 2,
    title: "Fleetwise Simulator",
    description: "AMR fleet simulation and optimization platform",
    image: "/PreLASim.gif",
    github: "https://github.com/Miibo-dev/fleetwise-simulator",
    color: "bg-pink-900",
    animationSpeed: 3,
    colors: [
      [255, 166, 158],
      [221, 255, 247],
    ],
    category: "Digital Twin",
  },
  {
    id: 3,
    title: "Path Planning Comparison",
    description: "Comparative analysis of path planning algorithms for AMR navigation in warehouse environments using ROS2 and Nav2.",
    image: "/Astar_Ratio.gif",
    github: "https://github.com/Miibo-dev/ros2-path-planning-comparison",
    color: "bg-sky-600",
    animationSpeed: 3,
    colors: [[125, 211, 252]],
    category: "Digital Twin",
  },
];

const categories = ["All", "Digital Twin"];

const RecentProjects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="w-full pb-20 pt-6 relative">
      {/* Section Divider */}
      <div className="flex justify-center mb-20 pt-20 relative z-10">
        <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]"></div>
      </div>

      {/* Spotlight */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
      </div>

      <h1 className="heading mb-8">
        Featured <span className="text-purple">Projects</span>
      </h1>

      {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-12">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-6 py-3 rounded-full font-sans transition-all duration-300 ${
              activeFilter === category
                ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/5 text-white/60 hover:bg-white/10 border border-white/10'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid with Animation */}
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
       dark:border-white/[0.2] max-w-sm w-full mx-auto relative h-[28rem] rounded-3xl overflow-hidden"
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
          className="w-full h-full object-cover opacity-40 group-hover/canvas-card:opacity-20 transition-opacity duration-300 scale-110"
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
    </motion.div>
  );
};

export default RecentProjects;
