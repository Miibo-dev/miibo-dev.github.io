import { FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";
import { Spotlight } from "./ui/Spotlight";
import Guitar3D from "./ui/Guitar3D";
import Image from "next/image";

const Hero = () => {
  return (
    <div id="home" className="pt-32 relative min-h-screen">
      {/* Background image with reduced opacity */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-bg.jpg"
          alt="Background"
          fill
          className="object-cover opacity-20"
          priority
          quality={75}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black-100 via-black-100/95 to-black-100/80" />
      </div>

      {/* Spotlight effects */}
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

      {/* Grid background */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      {/* Two-column layout */}
      <div className="relative z-10 min-h-screen flex justify-start pt-0 md:pt-0">
        <div className="max-w-7xl mx-auto w-full px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Text Content */}
            <div className="space-y-6 mt-[-4rem]">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">
                Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient">smarter automation systems</span>
                {" "}through <span className="text-blue-400">simulation</span>, <span className="text-violet-400">integration</span>, and <span className="text-pink-400">innovation</span>.
              </h1>

              <div className="flex items-center gap-4">
                <img
                  src="/profile.png"
                  alt="Mohammad Bahrami (Miibo)"
                  className="w-16 h-16 rounded-full object-cover border-2 border-purple-500/50"
                />
                <div>
                  <p className="text-lg md:text-xl font-sans text-white/90">
                    Hello, I&apos;m <span className="font-semibold">Miibo</span>
                  </p>
                  <p className="text-purple-400 font-semibold font-sans">
                    Automation & Digital Twin Engineer
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Guitar */}
            <div className="h-[400px] lg:h-[600px] relative pt-10">
              <Guitar3D />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
