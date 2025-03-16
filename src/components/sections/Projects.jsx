export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 md:gap-6">
          <a href="https://github.com/BenH9999/CampusConnect">
            <div className="p-6 rounded-xl border border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:border-white transition-all">
              <h3 className="text-sm md:text-xl font-bold py-2">
                Mobile App - Campus Connect
              </h3>
              <p className="text-gray-400 mb-2 text-xs md:text-base">
                Social media app created for a University project, with the theme
                of creating a place for people within a University setting
                to collaborate and plan events, all in one place.
                Boasts features such as live updating feed of posts, customisable profiles
                with images, and following/messaging friends.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React Native", "TypeScript", "Golang", "Postgres"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>

          <a href="https://github.com/Cieran0/quckathon-25">
            <div className="p-6 rounded-xl border border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:border-white transition-all">
              <h3 className="text-sm md:text-xl font-bold py-2">
                CMS Tool for Quckathon 2025 - Blackrock
              </h3>
              <p className="text-gray-400 mb-2 text-xs md:text-base">
                Full stack solution to a problem presented by Aladdin Blackrock at
                Quackathon 2025, a hackathon hosted by Dundee Uni.
                Application includes features such as project creation and management,
                file uploads and downloads, along with a sophisticated version control
                method for working with different files.
              </p>
              <div className="flex flex-wrap gap-2">
                {["PHP", "Golang", "Javascript", "Postgres"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>

          <a href="https://github.com/Cieran0/agile-assignment">
            <div className="p-6 rounded-xl border border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:border-white transition-all">
              <h3 className="text-sm md:text-xl font-bold py-2">
                ATM Machine - NCR Uni Assignment
              </h3>
              <p className="text-gray-400 mb-2 text-xs md:text-base">
                A group project for university in an Agile Development class provided by NCR Atleos.
                We were tasked to create a full ATM system including a user interface, transaction switch,
                and a network simulator, which is where I worked on mainly.
              </p>
              <div className="flex flex-wrap gap-2">
                {["C++", "MySQL", "Raylib", "Makefiles"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>

          <a href="https://github.com/BenH9999/QR-Code-Gen">
            <div className="p-6 rounded-xl border border-blue-500/30 shadow-[0_2px_8px_rgba(59,130,246,0.2)] hover:-translate-y-1 hover:border-white transition-all">
              <h3 className="text-sm md:text-xl font-bold py-2">
                QR Code Generator
              </h3>
              <p className="text-gray-400 mb-2 text-xs md:text-base">
                Private project where I am trying to create a QR code generator from scratch.
                Generating everything from alignment patterns, to calculating appropriate error correction
                and size for the input given to be stored.
              </p>
              <div className="flex flex-wrap gap-2">
                {["C++", "SDL2", "CMake"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs md:text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
