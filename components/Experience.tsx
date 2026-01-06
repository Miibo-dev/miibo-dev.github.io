"use client";
import React from "react";
import { FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { Spotlight } from "./ui/Spotlight";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div id="experience" className="pb-20 w-full pt-16 relative">
      {/* Section Divider */}
      <div className="flex justify-center mb-16">
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>

      {/* Spotlight effects */}
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

      <div className="relative max-w-5xl mx-auto px-8">
        {/* Vertical Timeline Line with gradient (Luther style) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-purple-500/30 via-gold/50 to-purple-500/30 hidden md:block"></div>

        {/* Timeline Items */}
        <div className="space-y-12">
          {workExperience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-[calc(50%-2rem)]">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-black-100 border border-white/10 hover:border-gold/50 p-6 md:p-8 rounded-2xl shadow-xl transition-all duration-300"
                >
                  {/* Icon */}
                  <div className="flex items-start gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 md:w-20 md:h-20"
                    />
                    <div className="flex-1">
                      <h3 className="font-serif text-xl md:text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gold font-semibold mb-1 font-sans">
                        {item.company}
                      </p>
                      <p className="text-sm text-white/60 mb-1 font-sans">
                        {item.location}
                      </p>
                      <p className="text-sm text-white/60 uppercase tracking-wider mb-3 font-sans">
                        {item.period}
                      </p>
                      <p className="font-sans text-white/80 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Timeline Icon - Luther style with golden glow (only visible on desktop) */}
              <div className="relative z-10 hidden md:flex items-center justify-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                  className="w-16 h-16 rounded-full bg-gradient-to-br from-gold to-purple-600 flex items-center justify-center shadow-lg border-4 border-black-100"
                  style={{ boxShadow: '0 0 20px rgba(234, 190, 124, 0.5)' }}
                >
                  <FaBriefcase className="text-white text-xl" />
                </motion.div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
