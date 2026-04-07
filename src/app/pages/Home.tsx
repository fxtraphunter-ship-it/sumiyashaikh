import { lazy, Suspense } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import BackgroundGradient from "../components/BackgroundGradient";
import PageLoader from "../components/PageLoader";

// Lazy load components below the fold for better performance
const About = lazy(() => import("../components/About"));
const Skills = lazy(() => import("../components/Skills"));
const FeaturedWork = lazy(() => import("../components/FeaturedWork"));
const Services = lazy(() => import("../components/Services"));
const Contact = lazy(() => import("../components/Contact"));
const Footer = lazy(() => import("../components/Footer"));
const BackToTop = lazy(() => import("../components/BackToTop"));

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <BackgroundGradient />
      <Navbar />
      <Hero />
      
      {/* Lazy loaded components with fallback */}
      <Suspense fallback={<div className="min-h-[200px]" />}>
        <About />
        <Skills />
        <FeaturedWork />
        <Services />
        <Contact />
        <Footer />
        <BackToTop />
      </Suspense>
    </div>
  );
}