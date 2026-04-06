import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BackgroundGradient from "../components/BackgroundGradient";
import PageLoader from "../components/PageLoader";
import BackToTop from "../components/BackToTop";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <BackgroundGradient />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <FeaturedWork />
      <Services />
      <Experience />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}