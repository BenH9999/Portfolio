import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";

export const Contact = () => {
    return (
        <section id="contact" className="min-h-screen flex items-center justify-center relative">
            <div className="text-center z-40">
                <h2 className="text-5xl md:text-8xl font-bold mb-4 md:mb-8 leading-tight bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    Contact Me
                </h2>
                <p className="text-gray-300 sm:text-lg md:text-2xl mb-8 text-center max-w-3xl mx-auto">
                    I'm always open to new opportunities and collaborations.
                    Feel free to reach out!
                </p>

                <div className="flex justify-center space-x-4 text-sm md:text-2xl">
                    <a
                        href="https://github.com/BenH9999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 bg-blue-500 text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        <AiFillGithub className="text-xl md:text-2xl" />
                        <span className="text-sm md:text-2xl">GitHub</span>
                    </a>
                    <a
                        href="https://www.linkedin.com/in/ben-houghton-4a7652317/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center border space-x-2 border-blue-500/50 text-blue-500 py-2 px-4 md:py-3 md:px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
                    >
                        <AiFillLinkedin className="text-xl md:text-2xl" />
                        <span className="text-sm md:text-2xl">LinkedIn</span>
                    </a>
                    <a
                        href="mailto:ben.houghton7070@outlook.com"
                        className="flex items-center bg-gradient-to-r space-x-2 from-blue-400 to-purple-500 text-white py-2 px-4 md:py-3 md:px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(128,90,213,0.4)]"
                    >
                        <HiOutlineMail className="text-xl md:text-2xl" />
                        <span className="text-sm md:text-2xl">Email</span>
                    </a>
                </div>
            </div>  
        </section>
    );
}