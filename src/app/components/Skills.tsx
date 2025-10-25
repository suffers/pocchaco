export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      skills: ['JavaScript', 'TypeScript', 'Python', 'Go', 'Rust', 'Java']
    },
    {
      title: 'Frameworks',
      skills: ['React', 'Next.js', 'Node.js', 'Express', 'FastAPI', 'Django']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Git', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB', 'Redis']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light mb-12 text-center">
          <span className="text-white">Skills</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-xl font-medium text-white mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full group-hover:bg-purple-400 transition-colors" />
                    <span className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
