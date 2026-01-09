'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload, FaGuitar, FaPlane, FaLightbulb } from 'react-icons/fa';

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function InterestCard({ icon, title, description }: InterestCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black-100 border border-white/10 rounded-xl p-4 text-center group hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform text-purple-400">
        {icon}
      </div>
      <h5 className="font-semibold text-sm mb-1 font-sans">{title}</h5>
      <p className="text-xs text-white/60 font-sans">{description}</p>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-20">
      {/* Section Divider */}
      <div className="flex justify-center mb-20 relative z-10">
        <div className="w-3/4 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent shadow-[0_0_15px_rgba(168,85,247,0.8)]" />
      </div>

      <div className="max-w-6xl mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading mb-12">
            About <span className="text-purple">Me</span>
          </h2>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Profile & Bio */}
            <div className="space-y-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl" />
                <div className="relative bg-black-100 border border-white/10 rounded-2xl p-8">
                  <h3 className="font-serif text-3xl mb-4 text-white">
                    Mohammad Bahrami
                  </h3>
                  <p className="text-xl text-purple-400 mb-6 font-sans font-semibold">
                    Automation & Digital Twin Engineer
                  </p>
                  <p className="text-white/80 leading-relaxed font-sans mb-4">
                    I&apos;m an Automation & Digital Twin Engineer specializing in warehouse robotics and intralogistics systems. Based in Milan, Italy, I&apos;ve worked on projects across Europe, from small-scale warehouse upgrades to large multi-site deployments.
                  </p>
                  <p className="text-white/80 leading-relaxed font-sans">
                    My work bridges the gap between simulation and reality—helping companies test, optimize, and deploy automated solutions faster and more reliably.
                  </p>
                </div>
              </div>

              {/* Interests Grid */}
              <div className="grid grid-cols-3 gap-4">
                <InterestCard
                  icon={<FaPlane />}
                  title="Travel"
                  description="Exploring Milan & Italy"
                />
                <InterestCard
                  icon={<FaGuitar />}
                  title="Music"
                  description="Playing guitar"
                />
                <InterestCard
                  icon={<FaLightbulb />}
                  title="Learning"
                  description="New technologies"
                />
              </div>
            </div>

            {/* Right: Expertise & CTAs */}
            <div className="space-y-6">
              {/* Skills/Expertise */}
              <div className="bg-black-100 border border-white/10 rounded-2xl p-8">
                <h4 className="font-serif text-2xl mb-6">Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {['Digital Twin', 'Industrial Automation', 'PLC Programming', 'SCADA Systems', 'IoT Integration', 'System Simulation'].map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300 font-sans"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTAs */}
              <div className="space-y-4">
                <a
                  href="/cv.pdf"
                  download
                  className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-xl transition-all duration-300 group"
                >
                  <FaFileDownload className="text-xl group-hover:scale-110 transition-transform" />
                  <span className="font-semibold font-sans">Download CV</span>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-bahrami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 font-sans"
                  >
                    <FaLinkedin className="text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/miibo-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 font-sans"
                  >
                    <FaGithub className="text-purple-400" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

              {/* Currently Seeking */}
              <div className="bg-gradient-to-br from-gold/20 to-purple-500/20 border border-gold/30 rounded-2xl p-6">
                <p className="text-white/90 font-sans leading-relaxed">
                  <span className="font-semibold text-gold">Currently seeking opportunities</span> in automation, robotics, and digital twin projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
