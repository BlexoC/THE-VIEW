import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SelectedWork from "./components/SelectedWork";
import Expertise from "./components/Expertise";
import MetricsBanner from "./components/MetricsBanner";
import Process from "./components/Process";
import Education from "./components/Education";
import About from "./components/About";
import Articles from "./components/Articles";
import ContactFooter from "./components/ContactFooter";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-600 selection:text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Expertise />
        <MetricsBanner />
        <Process />
        <Education />
        <About />
        <Articles />
        <ContactFooter />
      </main>
    </div>
  );
}
