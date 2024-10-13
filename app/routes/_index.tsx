import type { MetaFunction } from "@remix-run/node";
import Experience from "~/components/experience";
import HeroSection from "~/components/heroSection";
import Navbar from "~/components/navbar";
import Project from "~/components/project";
import Technologies from "~/components/technologies";

export const meta: MetaFunction = () => {
  return [
    { title: "Beni Saprulah's Portfolio" },
    { name: "description", content: "Welcome to Beni's portfolio page" },
  ];
};

export default function Index() {
  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div>
        <div className="max-w-7xl mx-auto p-5">
          <Navbar />
          <HeroSection />
          <Technologies />
          <Experience />
          <Project />
        </div>
      </div>
    </div>
  );
}

