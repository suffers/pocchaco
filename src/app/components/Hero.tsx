export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-900/5 to-transparent" />
      
      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
          <span className="text-white">suffers</span>
        </h1>
        
        <div className="text-xl md:text-2xl text-zinc-400 mb-8 font-light">
          Software Engineer
        </div>
        
        <p className="text-lg text-zinc-500 max-w-2xl mx-auto leading-relaxed">
          Crafting digital solutions with clean code and thoughtful design.
        </p>
        
        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-6 h-10 border-2 border-zinc-600 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-zinc-600 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
