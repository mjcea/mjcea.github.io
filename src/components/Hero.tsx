import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 relative"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="mb-4">
            Hi, I&apos;m <span className="text-blue-600">Your Name</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Full Stack Developer | UI/UX Enthusiast | Problem Solver
          </p>
        </div>

        <p className="text-gray-700 max-w-3xl mx-auto mb-8">
          I create beautiful, functional, and user-friendly digital experiences.
          Passionate about clean code, innovative solutions, and continuous learning.
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:hello@example.com"
            className="p-3 bg-white rounded-full shadow-md hover:shadow-lg hover:bg-blue-600 hover:text-white transition-all"
          >
            <Mail size={24} />
          </a>
        </div>

        <button
          onClick={scrollToAbout}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
        >
          Learn More
          <ChevronDown size={20} />
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  );
}
