import { motion, AnimatePresence } from "motion/react";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import the provided images
import thumbnail1 from "figma:asset/3334aae812a2a652935dd68346cc30c6da8eb0bb.png";
import poster1 from "figma:asset/c680a2fa0fc1c04e221105fe484736932a18118e.png";
import birthday1 from "figma:asset/fb978142b7437b23dd3f659d65691ad904ace40a.png";
import productGrid from "figma:asset/1e08eb64eb24a6ffdf6c2cae7b33e479315c09a9.png";
import bootcamp from "figma:asset/4e72dccbdabf3494e94c7eb440ad6509d94f8994.png";
import coffee from "figma:asset/78a4286c8a6ae8821ce40d3e1fd19e5fa1890ddc.png";
import birthday2 from "figma:asset/3a8df25426af07f84f0541e55083a0e97c54323f.png";
import wine from "figma:asset/b4301d8494537fe882a3156191c494c604315b5f.png";
import marketing from "figma:asset/91b00e3302a5b2473d7b32875338c477bc2cabb2.png";

export default function FeaturedWork() {
  const [activeFilter, setActiveFilter] = useState("all");
  const sliderRef = useRef<any>(null);

  const projects = [
    {
      id: 1,
      title: "Mobile App UI Design",
      category: "uiux",
      image: "https://images.unsplash.com/photo-1717323454555-f053c31ff4b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2UlMjBkZXNpZ258ZW58MXx8fHwxNzc1MzcxNTk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Modern mobile app interface",
      isExternal: true,
    },
    {
      id: 2,
      title: "Dashboard UI Design",
      category: "uiux",
      image: "https://images.unsplash.com/photo-1771922748624-b205cf5d002d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZGFzaGJvYXJkJTIwdWklMjBkZXNpZ258ZW58MXx8fHwxNzc1Mjg4ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Clean dashboard interface",
      isExternal: true,
    },
    {
      id: 3,
      title: "Web Application Design",
      category: "uiux",
      image: "https://images.unsplash.com/photo-1648134859182-98df6e93ef58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMHdlYiUyMGFwcGxpY2F0aW9uJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc3NTM3ODI4MHww&ixlib=rb-4.1.0&q=80&w=1080",
      description: "Intuitive web app design",
      isExternal: true,
    },
    {
      id: 4,
      title: "Custom Thumbnail Design",
      category: "youtube",
      image: thumbnail1,
      description: "High-converting YouTube thumbnail",
    },
    {
      id: 5,
      title: "Creative Flyer Design",
      category: "graphic",
      image: poster1,
      description: "Modern promotional poster",
    },
    {
      id: 6,
      title: "Birthday Greeting Design",
      category: "graphic",
      image: birthday1,
      description: "Corporate birthday card",
    },
    {
      id: 7,
      title: "Product Social Media Grid",
      category: "graphic",
      image: productGrid,
      description: "Beauty product showcase",
    },
    {
      id: 8,
      title: "Event Marketing Poster",
      category: "graphic",
      image: bootcamp,
      description: "Bootcamp promotional design",
    },
    {
      id: 9,
      title: "Coffee Chat Event Design",
      category: "graphic",
      image: coffee,
      description: "Corporate event banner",
    },
    {
      id: 10,
      title: "Birthday Celebration Design",
      category: "graphic",
      image: birthday2,
      description: "Professional birthday greeting",
    },
    {
      id: 11,
      title: "Wine & Cheese Event",
      category: "graphic",
      image: wine,
      description: "Elegant event invitation",
    },
    {
      id: 12,
      title: "Marketing Agency Social Post",
      category: "graphic",
      image: marketing,
      description: "Agency promotional design",
    },
  ];

  const filters = [
    { id: "all", label: "All Work" },
    { id: "uiux", label: "UI/UX Projects" },
    { id: "graphic", label: "Graphic Design" },
    { id: "youtube", label: "YouTube Work" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    arrows: false,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <section id="work" className="py-12 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2
            className="text-4xl md:text-5xl lg:text-6xl mb-3 md:mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p
            className="text-white/70 text-base md:text-lg max-w-2xl mx-auto px-4"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A curated collection of my best design work across multiple disciplines
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12 px-2"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setActiveFilter(filter.id);
                sliderRef.current?.slickGoTo(0);
              }}
              className={`px-4 md:px-6 py-2 md:py-3 text-sm md:text-base rounded-full backdrop-blur-xl border transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 border-transparent text-white shadow-lg"
                  : "bg-white/10 border-white/20 text-white/70 hover:text-white hover:border-white/30"
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Carousel Slider */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative px-2 md:px-4"
          >
            {/* Custom Arrow Buttons */}
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="absolute left-0 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="absolute right-0 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full backdrop-blur-xl bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all shadow-xl"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
            </button>

            <Slider ref={sliderRef} {...sliderSettings}>
              {filteredProjects.map((project) => (
                <div key={project.id} className="px-2 md:px-4">
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="group relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl md:rounded-2xl overflow-hidden shadow-2xl mx-auto"
                    style={{ maxWidth: "750px" }}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden aspect-[4/3]">
                      {project.isExternal ? (
                        <ImageWithFallback
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          initial={{ scale: 0 }}
                          whileHover={{ scale: 1 }}
                          className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                        >
                          <ExternalLink className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-4 md:p-6 relative z-10 bg-[#0B0B0F]/80 backdrop-blur-sm group-hover:bg-[#0B0B0F]/95 transition-all duration-300">
                      <h3
                        className="text-lg md:text-xl mb-1 md:mb-2 text-white"
                        style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                      >
                        {project.title}
                      </h3>
                      <p
                        className="text-white/70 group-hover:text-white/90 text-xs md:text-sm transition-colors duration-300"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Gradient Border Effect */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10">
                      <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-xl"></div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </Slider>

            {/* Custom Dots Indicator */}
            <div className="flex justify-center gap-1.5 md:gap-2 mt-6 md:mt-8">
              {filteredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => sliderRef.current?.slickGoTo(index)}
                  className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30 hover:bg-white/60 transition-all"
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <style>{`
        .slick-slide {
          transition: all 0.3s ease;
          opacity: 0.5;
          transform: scale(0.85);
        }
        .slick-slide.slick-center {
          opacity: 1;
          transform: scale(1);
        }
        .slick-track {
          display: flex;
          align-items: center;
        }
        @media (max-width: 768px) {
          .slick-slide {
            transform: scale(0.92);
          }
          .slick-slide.slick-center {
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
}