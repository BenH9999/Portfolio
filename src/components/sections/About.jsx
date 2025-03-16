

export const About = () => {

  const frontendSkills = ["React", "React Native", "JavaScript", "TypeScript", "TailwindCSS"];
  const backendSkills = ["Golang", "C++", "Java", "Python", "AWS", "Postgres", "MySQL"];
  const tools = ["npm", "CMake", "Visual Studio", "Linux", "Neovim"];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center">
      <div className="max-w-3xl max-h-3xl md:max-h-5xl md:max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-8xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-4 md:p-8 border-white/10 border hover:-translate-y-0.5 transition-all">
          <p className="text-gray-300 mb-3 md:mb-6 sm:text-lg lg:text-2xl max-w-3xl mx-auto">
            Passionate software developer with expertise in building
            scalable full stack solutions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-xl p-0 md:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Frontend
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {frontendSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-0 md:p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Backend
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {backendSkills.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-xl p-0 md:p-6  hover:-translate-y-1 transition-all">
              <h3 className="text-xl md:text-3xl font-bold mb-4">
                Tools
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {tools.map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
