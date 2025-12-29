"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Automation & Digital Twin Engineer",
    company: "Dymation",
    companyUrl: "https://www.dymation.com/",
    location: "Milan, Italy",
    period: "May 2023 - Present",
    description: "Built 35+ Emulate3D digital twins for automated warehouse systems, reducing simulation development time from 3 months to 1 week (75% improvement) through reusable C# and Python frameworks and modular architecture patterns",
    skills: ["Emulate3D", "C#", "Python", "Digital Twin", "Warehouse Automation"]
  },
  {
    id: 2,
    title: "Master's Thesis Intern",
    company: "Dymation",
    companyUrl: "https://www.dymation.com/",
    location: "Milan, Italy",
    period: "Oct 2022 - May 2023",
    description: "Developed AMR traffic management algorithms in C# that increased warehouse throughput from 140 to 150 pallets/hour (7% improvement), with 8 production deployments optimizing fleet sizing from 18 to 15 vehicles while maintaining performance",
    skills: ["C#", "AMR", "Traffic Management", "Algorithm Design", "Performance Optimization"]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="pb-20 w-full pt-8 relative">
      {/* Section Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      </div>
      {/* Spotlight from top right to bottom middle */}
      <div>
        <Spotlight
          className="top-0 right-0 md:right-10 h-[70vh] w-[40vw]"
          fill="white"
        />
        <Spotlight
          className="h-[60vh] w-[45vw] bottom-20 left-1/2 transform -translate-x-1/2"
          fill="purple"
        />
      </div>

      <h1 className="heading mb-20">
        My <span className="text-purple">Work Experience</span>
      </h1>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Vertical Timeline Line - Hidden on mobile, visible on md+ */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400/30 dark:bg-gray-600/40"></div>

        {/* Mobile Timeline Line - Visible only on mobile */}
        <div className="md:hidden absolute left-8 w-1 h-full bg-gray-400/30 dark:bg-gray-600/40"></div>

        {/* Timeline Items */}
        <div className="space-y-12 md:space-y-16">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-4 md:gap-8`}
            >
              {/* Mobile Layout - Icon and Date at top */}
              <div className="flex md:hidden items-center gap-4 mb-2">
                {/* Timeline Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg shrink-0"
                >
                  <FaBriefcase className="text-white text-xl" />
                </motion.div>
                {/* Date */}
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {item.period}
                </p>
              </div>

              {/* Card */}
              <div className={`w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0`}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-600 dark:text-purple-400 font-semibold mb-1 text-center hover:underline block"
                  >
                    {item.company}
                  </a>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 text-center">
                    {item.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed text-center">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {item.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop Timeline Icon - Hidden on mobile */}
              <div className="hidden md:flex relative z-10 items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg"
                >
                  <FaBriefcase className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Desktop Date - Hidden on mobile */}
              <div className={`hidden md:flex md:w-[calc(50%-2rem)] ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                  {item.period}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
