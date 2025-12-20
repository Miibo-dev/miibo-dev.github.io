"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  skills: string[];
}

const experienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    period: "2023 - Present",
    description: "Led development of scalable web applications using React and Node.js. Implemented microservices architecture and improved system performance by 40%.",
    skills: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    id: 2,
    title: "Full Stack Engineer",
    company: "Innovation Labs",
    location: "New York, NY",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client projects. Collaborated with cross-functional teams to deliver high-quality software solutions.",
    skills: ["JavaScript", "Python", "PostgreSQL", "Redis"]
  },
  {
    id: 3,
    title: "Frontend Developer",
    company: "Digital Agency",
    location: "Remote",
    period: "2020 - 2021",
    description: "Created responsive web interfaces and improved user experience. Worked closely with designers to implement pixel-perfect designs.",
    skills: ["React", "Vue.js", "SASS", "Figma"]
  },
  {
    id: 4,
    title: "Junior Developer",
    company: "StartUp Inc",
    location: "Austin, TX",
    period: "2019 - 2020",
    description: "Contributed to front-end development and learned modern web technologies. Participated in code reviews and agile development processes.",
    skills: ["HTML", "CSS", "JavaScript", "Git"]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="pb-20 w-full pt-16 relative">
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

      <div className="relative max-w-6xl mx-auto">
        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-400/30 dark:bg-gray-600/40"></div>

        {/* Timeline Items */}
        <div className="space-y-16">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`flex items-center ${
                index % 2 === 0 ? "flex-row" : "flex-row-reverse"
              } gap-8`}
            >
              {/* Card */}
              <div className={`w-[calc(50%-2rem)]`}>
                <motion.div
                  whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)" }}
                  className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                    {item.title}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-semibold mb-1 text-center">
                    {item.company}
                  </p>
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

              {/* Timeline Icon */}
              <div className="relative z-10 flex items-center justify-center">
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

              {/* Date */}
              <div className={`w-[calc(50%-2rem)] flex ${index % 2 === 0 ? "justify-start" : "justify-end"}`}>
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
