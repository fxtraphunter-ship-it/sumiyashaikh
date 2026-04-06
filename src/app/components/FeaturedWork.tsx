import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

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

  return (
    <section id="work" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl lg:text-6xl mb-4"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
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
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full backdrop-blur-md border transition-all ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-blue-500 border-transparent text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:text-white"
              }`}
              style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
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
                    className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl mb-2"
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ fontFamily: 'Poppins, sans-serif' }}
                >
                  {project.description}
                </p>
              </div>

              {/* Gradient Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 to-blue-500/50 blur-xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}