export const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-40 px-4">
        <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent leading-right">
          Hi, I'm Ben
        </h1>

        <p className="text-gray-300 sm:text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
          I'm a Computing Science student at Dundee University that wants to
          build software solutions that will provide an exceptional user experience
        </p>

        <div className="flex justify-center space-x-4 text-sm md:text-2xl">
          <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
            View Projects
          </a>
          <a href="#contact" className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10">
            Contact Me
          </a>
          <a href="../public/Benjamin_Houghton_CV.pdf" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-400 to-purple-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(128,90,213,0.4)]">
            View CV
          </a>
        </div>
      </div>
    </section>
  )
}
