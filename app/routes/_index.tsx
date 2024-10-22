import type { MetaFunction } from "@remix-run/node";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Experience from "~/components/experience";
import HeroSection from "~/components/heroSection";
import Navbar from "~/components/navbar";
import Project from "~/components/project";
import Technologies from "~/components/technologies";
import WelcomeAnimation from "~/components/welcomeAnimation";

export const meta: MetaFunction = () => {
  return [
    { title: "Beni Saprulah's Portfolio" },
    { name: "description", content: "Welcome to Beni's portfolio page" },
  ];
};

export default function Index() {
  const [showMainContent, setShowMainContent] = useState(false);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <AnimatePresence>
        {!showMainContent && (
          <WelcomeAnimation onComplete={() => setShowMainContent(true)} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {showMainContent && (
          <div className="max-w-7xl mx-auto p-5">
            <Navbar />
            <HeroSection />
            <Technologies />
            <Experience />
            <Project />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

