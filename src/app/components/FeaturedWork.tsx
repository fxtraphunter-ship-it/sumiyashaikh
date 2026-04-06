import { motion } from "motion/react";
import { ExternalLink, Target, Lightbulb, TrendingUp } from "lucide-react";

export default function FeaturedWork() {
  const projects = [
    {
      title: "E-Commerce App Redesign",
      role: "UI/UX Designer",
      problem: "Low conversion rates and poor user navigation causing cart abandonment.",
      solution: "Redesigned checkout flow, improved product discovery, and streamlined user journey.",
      result: "35% increase in conversion rate and 50% reduction in cart abandonment.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    },
    {
      title: "Brand Identity System",
      role: "Graphic Designer",
      problem: "Inconsistent brand presence across digital and print media.",
      solution: "Created comprehensive brand guidelines with logo, color palette, and typography system.",
      result: "Unified brand presence increasing brand recognition by 60%.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    },
    {
      title: "YouTube Channel Growth",
      role: "YouTube Specialist",
      problem: "Stagnant subscriber growth and low engagement rates.",
      solution: "Implemented content strategy, thumbnail optimization, and SEO-focused titles.",
      result: "300% subscriber growth in 6 months with 2x engagement improvement.",
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
    },
    {
      title: "SaaS Dashboard Interface",
      role: "UI/UX Designer",
      problem: "Complex data visualization overwhelming users and reducing platform usage.",
      solution: "Simplified interface with progressive disclosure and customizable widgets.",
      result: "40% increase in daily active users and improved user satisfaction scores.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    },
    {
      title: "Social Media Campaign",
      role: "Content Creator & Designer",
      problem: "Low social media engagement and brand awareness.",
      solution: "Developed cohesive visual content strategy with engaging copy and graphics.",
      result: "200% increase in engagement and 150% follower growth in 3 months.",
      image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=80",
    },
    {
      title: "Mobile App Onboarding",
      role: "UI/UX Designer",
      problem: "High drop-off rate during app onboarding process.",
      solution: "Redesigned onboarding with interactive tutorials and progressive onboarding.",
      result: "70% reduction in drop-off rate and 45% increase in feature adoption.",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=800&q=80",
    },
  ];

  return (
    <section id="work" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-5xl lg:text-6xl mb-6"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 800 }}
          >
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p
            className="text-white/60 text-xl max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Case studies showcasing problem-solving through design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              {/* Project Card */}
              <div className="h-full backdrop-blur-sm bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:border-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-purple-500/10">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-purple-900/20 to-blue-900/20">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F] via-transparent to-transparent opacity-80"></div>
                  
                  {/* Role Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2">
                      <span className="text-white text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                        {project.role}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Title */}
                  <h3
                    className="text-2xl text-white group-hover:text-purple-400 transition-colors"
                    style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                  >
                    {project.title}
                  </h3>

                  {/* Problem */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-red-400" />
                      <span className="text-red-400 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Problem
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-400 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Solution
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.solution}
                    </p>
                  </div>

                  {/* Result */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-green-400 text-sm font-semibold" style={{ fontFamily: 'Inter, sans-serif' }}>
                        Result
                      </span>
                    </div>
                    <p className="text-white/60 text-sm leading-relaxed font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {project.result}
                    </p>
                  </div>

                  {/* View Project Link */}
                  <div className="pt-4">
                    <button
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors text-sm font-semibold group/btn"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      View Case Study
                      <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}