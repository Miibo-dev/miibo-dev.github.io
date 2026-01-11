'use client';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFileDownload, FaGuitar, FaPlane, FaLightbulb } from 'react-icons/fa';

interface InterestCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  iconColor: string;
}

function InterestCard({ icon, title, description, iconColor }: InterestCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-black-100 border border-white/10 rounded-xl p-4 text-center group hover:border-purple-500/50 transition-all duration-300"
    >
      <div className={`text-3xl mb-2 group-hover:scale-110 transition-transform ${iconColor}`}>
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
        <div className="w-3/4 h-[2px] bg-gradient-to-r from-transparent via-purple-400 to-transparent shadow-[0_0_8px_rgba(168,85,247,0.4)]" />
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
                  iconColor="text-blue-400"
                />
                <InterestCard
                  icon={<FaGuitar />}
                  title="Music"
                  description="Playing guitar"
                  iconColor="text-pink-400"
                />
                <InterestCard
                  icon={<FaLightbulb />}
                  title="Learning"
                  description="New technologies"
                  iconColor="text-purple-400"
                />
              </div>
            </div>

            {/* Right: Expertise & CTAs */}
            <div className="space-y-6">
              {/* Skills/Expertise */}
              <div className="bg-black-100 border border-white/10 rounded-2xl p-8">
                <h4 className="font-serif text-2xl mb-6">Expertise</h4>
                <div className="flex flex-wrap gap-3">
                  {['Digital Twin', 'Warehouse Automation', 'Virtual Commissioning', 'AMR/AGV Systems', 'PLC Integration', 'ROS2 Integration'].map(skill => (
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
                  className="relative inline-flex h-14 w-full overflow-hidden rounded-lg p-[1px] focus:outline-none"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-6 text-sm font-medium text-white backdrop-blur-3xl gap-3 font-sans">
                    <FaFileDownload className="text-xl" />
                    <span className="font-semibold">Download CV</span>
                  </span>
                </a>

                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://www.linkedin.com/in/mohammad-bahrami"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 font-sans">
                      <FaLinkedin className="text-blue-400" />
                      <span>LinkedIn</span>
                    </span>
                  </a>

                  <a
                    href="https://github.com/miibo-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none"
                  >
                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-4 text-sm font-medium text-white backdrop-blur-3xl gap-2 font-sans">
                      <FaGithub className="text-purple-400" />
                      <span>GitHub</span>
                    </span>
                  </a>
                </div>
              </div>

              {/* Currently Seeking */}
              <div className="bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 rounded-2xl p-6">
                <p className="text-white/90 font-sans leading-relaxed">
                  <span className="font-semibold text-purple-300">Currently seeking opportunities</span> in automation, robotics, and digital twin projects.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
