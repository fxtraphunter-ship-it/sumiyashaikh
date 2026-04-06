import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ValueStrip from "../components/ValueStrip";
import FeaturedWork from "../components/FeaturedWork";
import Services from "../components/Services";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ScrollIndicator from "../components/ScrollIndicator";
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
      <ScrollIndicator />
      <ValueStrip />
      <FeaturedWork />
      <Services />
      <About />
      <Skills />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}