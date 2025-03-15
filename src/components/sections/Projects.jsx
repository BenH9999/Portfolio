export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl md:text-8xl font-bold mb-4 md:mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a href="https://github.com/BenH9999/CampusConnect">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold py-2">
                Mobile App - Campus Connect
              </h3>
              <p className="text-gray-400 mb-2">
                Social media app created for a University project, with the theme
                of creating a place for people within a University setting
                to collaborate and plan events, all in one place.
                Boasts features such as live updating feed of posts, customisable profiles
                with images, and following/messaging friends.
              </p>
              <div>
                {["React Native", "TypeScript", "Golang", "Postgres"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>

          <a href="https://github.com/Cieran0/quckathon-25">
            <div className="p-6 rounded-xl border border-white hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
              <h3 className="text-xl font-bold py-2">
                CMS Tool for Quckathon 2025 - Blackrock
              </h3>
              <p className="text-gray-400 mb-2">
                Full stack solution to a problem presented by Aladdin Blackrock at
                Quackathon 2025, a hackathon hosted by Dundee Uni.
                Application includes features such as project creation and management,
                file uploads and downloads, along with a sophisticated version control
                method for working with different files.
              </p>
              <div>
                {["PHP", "Golang", "Javascript", "Postgres"].map((tech, key) => (
                  <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        </div>
      </div>
    </section >
  )
}
