export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-light mb-12 text-center">
          <span className="text-white">About</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-zinc-300 leading-relaxed">
              I'm a passionate software engineer focused on building robust, scalable applications 
              that solve real-world problems. With a keen eye for clean code and user experience, 
              I enjoy turning complex challenges into elegant solutions.
            </p>
            
            <p className="text-lg text-zinc-300 leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-zinc-400">Full-stack development</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-zinc-400">Clean architecture</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-zinc-400">Performance optimization</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span className="text-zinc-400">Open source contributor</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
