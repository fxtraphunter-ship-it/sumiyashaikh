import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import graphicImg1 from "figma:asset/3334aae812a2a652935dd68346cc30c6da8eb0bb.png";
import graphicImg2 from "figma:asset/c680a2fa0fc1c04e221105fe484736932a18118e.png";
import graphicImg3 from "figma:asset/fb978142b7437b23dd3f659d65691ad904ace40a.png";
import graphicImg4 from "figma:asset/1e08eb64eb24a6ffdf6c2cae7b33e479315c09a9.png";
import graphicImg5 from "figma:asset/78a4286c8a6ae8821ce40d3e1fd19e5fa1890ddc.png";
import graphicImg6 from "figma:asset/3a8df25426af07f84f0541e55083a0e97c54323f.png";
import graphicImg7 from "figma:asset/0a32b01b09588606010c0219b5cd55348b661fc6.png";

export default function FeaturedWork() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      client: "Retail Company",
      year: "2024",
      problem: "Users were abandoning carts due to confusing checkout flow and poor mobile experience.",
      solution: "Redesigned user journey with streamlined checkout and mobile-first approach.",
      result: "35% increase in conversions, 50% reduction in cart abandonment.",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80",
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      ],
      tags: ["UI/UX", "Mobile Design"],
    },
    {
      title: "Brand Identity System",
      client: "Tech Startup",
      year: "2024",
      problem: "Brand lacked cohesive identity causing confusion and weak recognition.",
      solution: "Created comprehensive brand guidelines with logo system and visual language.",
      result: "60% increase in brand recognition and unified presence.",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&q=80",
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80",
        "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80"
      ],
      tags: ["Branding", "Visual Identity"],
    },
    {
      title: "YouTube Channel Growth",
      client: "Content Creator",
      year: "2024",
      problem: "Channel plateaued at 10K subscribers with declining engagement.",
      solution: "Implemented data-driven strategy with optimized thumbnails and SEO.",
      result: "300% subscriber growth reaching 40K in 6 months.",
      images: [
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=1200&q=80",
        "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=1200&q=80",
        "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=1200&q=80",
        "https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&q=80"
      ],
      tags: ["YouTube", "Growth Marketing"],
    },
    {
      title: "SaaS Dashboard Interface",
      client: "B2B Software Company",
      year: "2024",
      problem: "Complex data visualization overwhelming users and low adoption.",
      solution: "Simplified interface with progressive disclosure and intuitive navigation.",
      result: "40% increase in active users, 65% reduction in support tickets.",
      images: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80",
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=80",
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80"
      ],
      tags: ["UI/UX", "SaaS"],
    },
    {
      title: "Graphic Design Portfolio",
      client: "Multiple Clients",
      year: "2024",
      problem: "Clients needed eye-catching designs for social media, events, and marketing campaigns.",
      solution: "Crafted vibrant, on-brand visual content including thumbnails, flyers, social posts, and product designs.",
      result: "Increased engagement across all platforms with memorable, conversion-focused designs.",
      images: [
        graphicImg1,
        graphicImg2,
        graphicImg3,
        graphicImg4,
        graphicImg5,
        graphicImg6,
        graphicImg7
      ],
      tags: ["Graphic Design", "Social Media", "Branding"],
    },
    {
      title: "Mobile App Onboarding",
      client: "Fintech Startup",
      year: "2023",
      problem: "70% of users dropping off during onboarding process.",
      solution: "Redesigned onboarding with interactive tutorials and clear value communication.",
      result: "70% reduction in drop-off, 45% increase in feature adoption.",
      images: [
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=1200&q=80",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&q=80",
        "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&q=80",
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1200&q=80"
      ],
      tags: ["Mobile UX", "Product Design"],
    },
  ];

  const openModal = (index: number) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => 
        prev === projects[selectedProject].images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject !== null) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? projects[selectedProject].images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="work" className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - PORTFOLIO is 2nd most important */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="mb-5">
            <span className="text-purple-400/60 text-[11px] tracking-[0.25em] uppercase" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
              Case Studies
            </span>
          </div>
          <h2
            className="text-5xl sm:text-6xl lg:text-7xl leading-[1.1] tracking-[-0.02em]"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
          >
            <span className="text-white">Featured Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid - FEATURED CARDS (largest) with enhanced depth */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, transition: { duration: 0.4 } }}
              className="group cursor-pointer"
              onClick={() => openModal(index)}
            >
              {/* FEATURED Card - Maximum impact with premium shadows */}
              <div className="h-full bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:bg-white/[0.04] hover:border-white/20 transition-all duration-500 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_70px_-15px_rgba(168,85,247,0.25)]">
                
                {/* Project Image - Large focal point */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-[#0B0B0F]/40 to-transparent"></div>
                  
                  {/* Year & Client Badge with glow */}
                  <div className="absolute top-6 left-6 flex items-center gap-2.5">
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                      <span className="text-white text-xs tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                        {project.year}
                      </span>
                    </div>
                    <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                      <span className="text-white/90 text-xs" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                        {project.client}
                      </span>
                    </div>
                  </div>

                  {/* Image count indicator */}
                  <div className="absolute top-6 right-6 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl px-4 py-2 shadow-[0_8px_16px_rgba(0,0,0,0.3)]">
                    <span className="text-white text-xs tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
                      {project.images.length} images
                    </span>
                  </div>
                </div>

                {/* Content - Refined typography */}
                <div className="p-8 space-y-5">
                  {/* Title + Tags */}
                  <div className="space-y-4">
                    <h3
                      className="text-2xl text-white leading-tight tracking-[-0.01em]"
                      style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 600 }}
                    >
                      {project.title}
                    </h3>
                    
                    {/* Tags with better spacing */}
                    <div className="flex flex-wrap gap-2.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs tracking-wide shadow-inner"
                          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Impact - Better readability */}
                  <p className="text-white/50 text-sm leading-relaxed tracking-wide" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                    {project.result}
                  </p>

                  {/* View Link with subtle animation */}
                  <div className="pt-3">
                    <button
                      className="group/btn flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm tracking-wide"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}
                    >
                      <span>View Case Study</span>
                      <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal with Image Carousel */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-6xl max-h-[90vh] bg-[#0B0B0F] border border-white/10 rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
                {/* Image Carousel - Left/Top */}
                <div className="relative flex-1 bg-black/50">
                  <div className="relative h-full min-h-[400px] lg:min-h-[600px]">
                    <img
                      src={projects[selectedProject].images[currentImageIndex]}
                      alt={`${projects[selectedProject].title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain"
                    />

                    {/* Navigation Arrows */}
                    {projects[selectedProject].images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-colors"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-colors"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
                      <span className="text-white text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {currentImageIndex + 1} / {projects[selectedProject].images.length}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Project Details - Right/Bottom */}
                <div className="w-full lg:w-96 p-6 lg:p-8 overflow-y-auto bg-white/[0.02]">
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {projects[selectedProject].year}
                        </span>
                        <span className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/60 text-xs" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {projects[selectedProject].client}
                        </span>
                      </div>
                      
                      <h3
                        className="text-2xl lg:text-3xl text-white leading-tight"
                        style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                      >
                        {projects[selectedProject].title}
                      </h3>

                      <div className="flex flex-wrap gap-2">
                        {projects[selectedProject].tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium"
                            style={{ fontFamily: 'Inter, sans-serif' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Case Study Details */}
                    <div className="space-y-5">
                      {/* Challenge */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                          <span className="text-red-400 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Challenge
                          </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {projects[selectedProject].problem}
                        </p>
                      </div>

                      {/* Approach */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                          <span className="text-blue-400 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Approach
                          </span>
                        </div>
                        <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {projects[selectedProject].solution}
                        </p>
                      </div>

                      {/* Impact */}
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                          <span className="text-green-400 text-xs font-bold uppercase tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
                            Impact
                          </span>
                        </div>
                        <p className="text-white text-sm leading-relaxed font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                          {projects[selectedProject].result}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}