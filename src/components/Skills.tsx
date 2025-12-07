import { Code2, Palette, Database, Smartphone, Globe, Zap } from 'lucide-react';

export function Skills() {
  const skills = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js, Tailwind CSS',
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Backend Development',
      description: 'Node.js, Express, PostgreSQL, MongoDB',
      color: 'green',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Figma, Adobe XD, Responsive Design',
      color: 'purple',
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'React Native, Progressive Web Apps',
      color: 'pink',
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      description: 'HTML5, CSS3, JavaScript, RESTful APIs',
      color: 'indigo',
    },
    {
      icon: Zap,
      title: 'Tools & Others',
      description: 'Git, Docker, CI/CD, Agile Methodologies',
      color: 'yellow',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-600',
    green: 'bg-green-100 text-green-600',
    purple: 'bg-purple-100 text-purple-600',
    pink: 'bg-pink-100 text-pink-600',
    indigo: 'bg-indigo-100 text-indigo-600',
    yellow: 'bg-yellow-100 text-yellow-600',
  };

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-center mb-4">Skills & Expertise</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Here are some of the technologies and tools I work with regularly
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
              >
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    colorClasses[skill.color as keyof typeof colorClasses]
                  }`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="mb-2">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
