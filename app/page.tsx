"use client";

import Image from "next/image";

import { navItems } from "@/data";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const Home = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto">
      <div className="max-w-7xl w-full sm:px-10 px-5">
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Experience />
        <RecentProjects />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
