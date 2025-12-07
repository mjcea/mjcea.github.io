import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-12">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop"
              alt="Profile"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          
          <div>
            <h3 className="mb-4">Hello! I&apos;m a passionate developer.</h3>
            <p className="text-gray-700 mb-4">
              I specialize in building exceptional digital experiences. Currently, I&apos;m focused on
              creating accessible, human-centered products with modern technologies.
            </p>
            <p className="text-gray-700 mb-4">
              With a background in both design and development, I bridge the gap between aesthetics
              and functionality. I believe in writing clean, maintainable code and creating
              intuitive user interfaces.
            </p>
            <p className="text-gray-700 mb-6">
              When I&apos;m not coding, you can find me exploring new technologies, contributing to
              open source, or sharing knowledge with the developer community.
            </p>
            
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                Problem Solver
              </span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full">
                Team Player
              </span>
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full">
                Quick Learner
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
