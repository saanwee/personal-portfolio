const skillCategories = [
  {
    title: "Languages",
    className: "skill-languages",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "SQL", "Rust", "Verilog"],
  },
  {
    title: "Frameworks & Libraries",
    className: "skill-frameworks",
    skills: ["React", "Next.js", "TensorFlow", "Scikit-Learn", "XGBoost", "FastAPI", "Flask", "LangChain", "pandas", "OpenCV"],
  },
  {
    title: "Databases",
    className: "skill-databases",
    skills: ["PostgreSQL", "MySQL", "Redis", "Pinecone", "MongoDB"],
  },
  {
    title: "Tools",
    className: "skill-tools",
    skills: ["Docker", "Git", "Vercel", "Z3 Solver", "NetworkX", "Blender"],
  },
];

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-[hsl(var(--accent-blue-light))]">
            About Me
          </h1>
        </div>

        {/* Bio */}
        <div className="glass-card p-6 sm:p-8 mb-12 animate-fade-in-up delay-100">
          <div className="max-w-prose mx-auto space-y-4">
            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Hi! I’m a senior at UNC Chapel Hill, double majoring in Computer Science and Mathematics with a minor in Data Science. I’m currently seeking full-time roles where I can work at the intersection of software development, data engineering, and security.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              I have experience working across the stack, with strong foundations in Python, Java, C/C++, and low-level systems, alongside hands-on exposure to cybersecurity, machine learning, and symbolic analysis. Through internships and research, I’ve learned how to translate complex data into actionable insights.
            </p>

            <p className="text-base sm:text-lg leading-relaxed text-foreground/90">
              Beyond engineering, I’m deeply interested in how technology interacts with law, policy, and social good. I pursue this through leadership, volunteering, and research focused on making complex systems more accessible and equitable.
            </p>
          </div>
        </div>

        {/* Skills */}
        <div className="animate-fade-in-up delay-200">
          <h2 className="text-xl sm:text-2xl font-semibold mb-8 text-center text-[hsl(var(--accent))]">
            Skills & Technologies
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="glass-card p-6 animate-fade-in-up"
                style={{ animationDelay: `${(index + 3) * 100}ms` }}
              >
                <h3 className="font-semibold text-base sm:text-lg mb-4">
                  {category.title}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`skill-badge ${category.className}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
