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
    description: "Leading automation and digital twin development for warehouse robotics systems across Europe. Key achievements include:\n\n• Built 35+ Emulate3D digital twins for automated warehouses, reducing simulation development time from 3 months to 1 week (92% improvement) through reusable C# frameworks and modular architecture\n\n• Developed AMR traffic management algorithms increasing warehouse throughput by 5-10%, deployed across 8 production facilities while optimizing fleet sizing\n\n• Integrated Siemens TIA Portal and Beckhoff TwinCAT PLCs with Emulate3D simulations, reducing on-site commissioning time by 10%\n\n• Created immersive VR demonstrations in NVIDIA Omniverse for pre-sales presentations, enabling customers to visualize automation solutions\n\n• Leading ROS2 integration for Emulate3D platform, enabling real-world AMR navigation algorithm testing in virtual environments",
    skills: ["Emulate3D", "C#", "Python", "ROS2", "Digital Twin", "AMR/AGV", "Warehouse Automation", "Virtual Commissioning", "PLC Integration", "NVIDIA Omniverse", "FMEA", "Six Sigma"]
  },
  {
    id: 2,
    title: "Master's Thesis Intern",
    company: "Dymation",
    companyUrl: "https://www.dymation.com/",
    location: "Milan, Italy",
    period: "Oct 2022 - May 2023",
    description: "Master's thesis focused on virtual commissioning for automatic systems in the intralogistics field. Research contributions:\n\n• Developed custom OPC UA server implementation in C# mimicking WMS behavior for bi-directional data exchange between Emulate3D simulation and control systems\n\n• Designed TCP-based peer-to-peer messaging protocol for direct AMR-to-AMR communication enabling real-time traffic coordination, deadlock prevention, and dynamic path re-routing\n\n• Optimized job management logic and material flow algorithms improving simulated warehouse throughput by 7%, with recommendations successfully implemented in actual production facility\n\n• Implemented and tested multiple industrial protocols (HTTP, MQTT, TCP/IP, OPC UA) for middleware connectivity",
    skills: ["C#", "OPC UA", "MQTT", "TCP/IP", "HTTP", "Virtual Commissioning", "Emulate3D", "PLC Integration", "AMR Communication Protocols", "Industrial Middleware", "Warehouse Optimization"]
  }
];

const Experience = () => {
  return (
    <div id="experience" className="pb-20 w-full pt-8 relative">
      {/* Section Divider */}
      <div className="flex justify-center mb-20 pt-20 relative z-10">
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.4)]"></div>
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
              className={`relative flex flex-col md:flex-row md:items-center ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-4 md:gap-8`}
            >
              {/* Mobile Layout - Icon positioned absolutely to align with timeline */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.2 + 0.2 }}
                className="md:hidden absolute top-0 left-8 -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center shadow-lg z-10"
              >
                <FaBriefcase className="text-white text-xl" />
              </motion.div>

              {/* Mobile Date */}
              <div className="md:hidden pl-20 mb-2">
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
                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed text-left whitespace-pre-line">
                    {item.description}
                  </p>
                  {/* Separator line */}
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-300 dark:via-purple-700 to-transparent mb-4"></div>
                  {/* Skills tags */}
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
