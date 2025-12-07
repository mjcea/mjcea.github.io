import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce solution with payment integration, inventory management, and real-time analytics.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration features, and intuitive UI.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop',
      tags: ['TypeScript', 'React', 'Firebase', 'Tailwind'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'Beautiful weather application with location-based forecasts, interactive maps, and detailed analytics.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop',
      tags: ['Next.js', 'API Integration', 'Chart.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 4,
      title: 'Portfolio CMS',
      description:
        'Content management system for portfolios with drag-and-drop builder and customizable themes.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      tags: ['React', 'Express', 'PostgreSQL', 'AWS'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description:
        'Analytics dashboard for social media metrics with data visualization and automated reporting.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      tags: ['Vue.js', 'Python', 'D3.js', 'Docker'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
    {
      id: 6,
      title: 'Fitness Tracker',
      description:
        'Mobile-first fitness tracking app with workout plans, progress tracking, and social features.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop',
      tags: ['React Native', 'Redux', 'Node.js'],
      github: 'https://github.com',
      demo: 'https://example.com',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A selection of projects I&apos;ve worked on recently
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
            >
              <div className="relative overflow-hidden h-48">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
