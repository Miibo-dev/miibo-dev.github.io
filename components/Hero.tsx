import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";

const Hero = () => {
  return (
    <div id="home" className="pb-12 pt-52">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-12 z-10">
        <div className="max-w-[89vw] md:max-w-5xl lg:max-w-7xl flex flex-col items-center justify-center">
          <h1 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif mb-8 animate-fade-in leading-tight md:leading-snug">
            Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">smarter automation systems </span>
            through <span className="text-blue-400">simulation</span>, <span className="text-violet-400">integration</span>, and <span className="text-pink-400">innovation</span>.
          </h1>

          <div className="flex items-center gap-4 mb-12 animate-slide-up">
            <img
              src="/profile.png"
              alt="Mohammad Bahrami (Miibo)"
              className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50"
            />
            <p className="text-lg md:text-xl text-white/90">
              Hello, I&apos;m <span className="font-semibold">Miibo</span>, an{" "}
              <span className="text-purple-400 font-semibold">Automation & Digital Twin Engineer</span>
            </p>
          </div>

          <div className="flex gap-6 items-center animate-slide-up">
            <a
              href="https://www.linkedin.com/in/mohammad-bahrami"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
            >
              <FaLinkedin className="text-xl text-blue-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 group-hover:text-white">LinkedIn</span>
            </a>

            <a
              href="#"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
            >
              <FaFileDownload className="text-xl text-green-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 group-hover:text-white">Download CV</span>
            </a>

            <a
              href="https://github.com/miibo-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 group"
            >
              <FaGithub className="text-xl text-purple-400 group-hover:scale-110 transition-transform" />
              <span className="text-white/80 group-hover:text-white">GitHub</span>
            </a>
          </div>

          <div className="mt-8 text-center animate-slide-up">
            <a
              href="mailto:bahrami98mohammad@gmail.com"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-white/60"></span>
              <span>bahrami98mohammad@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
