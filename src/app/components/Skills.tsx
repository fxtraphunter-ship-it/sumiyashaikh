import { motion } from "motion/react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Design",
      gradient: "from-purple-500 to-blue-500",
      skills: [
        { name: "UI/UX Design", level: 95 },
        { name: "Graphic Design", level: 90 },
      ],
    },
    {
      title: "Growth",
      gradient: "from-blue-500 to-cyan-500",
      skills: [
        { name: "YouTube Automation", level: 85 },
        { name: "YouTube Mastery", level: 88 },
        { name: "Social Media Strategy", level: 82 },
      ],
    },
    {
      title: "Content",
      gradient: "from-purple-500 to-pink-500",
      skills: [
        { name: "Content Writing", level: 87 },
        { name: "Video Editing", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
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
              Skills & Expertise
            </span>
          </h2>
          <p
            className="text-white/70 text-lg max-w-2xl mx-auto"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            A diverse skill set covering design, growth, and content creation
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3
                  className={`text-3xl mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                  style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
                >
                  {category.title}
                </h3>
                <div className={`h-1 w-20 rounded-full bg-gradient-to-r ${category.gradient}`}></div>
              </div>

              {/* Skills List */}
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span
                        className="text-white"
                        style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 500 }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="text-white/60"
                        style={{ fontFamily: 'Poppins, sans-serif' }}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8"
        >
          <h4
            className="text-2xl mb-6 text-center"
            style={{ fontFamily: 'Urbanist, sans-serif', fontWeight: 700 }}
          >
            Tools & Technologies
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Figma",
              "Adobe XD",
              "Photoshop",
              "Illustrator",
              "Canva",
              "Premiere Pro",
              "After Effects",
              "YouTube Studio",
              "Social Media Marketing",
            ].map((tool, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full backdrop-blur-md bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/20 text-white/80"
                style={{ fontFamily: 'Poppins, sans-serif' }}
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
