import { ExternalLink, Github, Building, Home, Blocks, Compass } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    {
      title: "Sustainable Urban Complex",
      description: "Eco-friendly residential development featuring green architecture, solar integration, and smart building systems.",
      tags: ["Architecture", "Sustainability", "BIM", "AutoCAD"],
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Building
    },
    {
      title: "Modern Bridge Design",
      description: "Innovative cable-stayed bridge design with advanced structural analysis and earthquake-resistant features.",
      tags: ["Structural", "CAD", "Analysis", "Engineering"],
      image: "https://images.pexels.com/photos/161764/puerto-madero-buenos-aires-argentina-bridge-161764.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Compass
    },
    {
      title: "Smart City Infrastructure",
      description: "Integrated urban planning system with IoT sensors, traffic management, and environmental monitoring.",
      tags: ["Urban Planning", "IoT", "GIS", "Tech"],
      image: "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Blocks
    },
    {
      title: "Luxury Villa Complex",
      description: "Contemporary residential architecture blending minimalist design with natural landscape integration.",
      tags: ["Residential", "3D Modeling", "Interior", "Design"],
      image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Home
    },
    {
      title: "Commercial Tower",
      description: "High-rise office building with innovative curtain wall system and energy-efficient climate control.",
      tags: ["Commercial", "HVAC", "MEP", "Structural"],
      image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Building
    },
    {
      title: "Public Park Development",
      description: "Community space design featuring sustainable landscaping, pedestrian pathways, and recreational facilities.",
      tags: ["Landscape", "Public", "Sustainability", "CAD"],
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=800",
      link: "#",
      github: "#",
      icon: Compass
    }
  ];

  return (
    <section id="projects" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Featured <span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            A collection of architectural and engineering projects showcasing innovation and creativity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group perspective-1000"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative bg-white/5 backdrop-blur-md rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 transform-3d ${
                  hoveredIndex === index ? 'scale-105 rotate-y-2 shadow-2xl shadow-rose-500/20' : ''
                }`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                      <Icon className="text-rose-400" size={24} />
                    </div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
                  </div>

                  <div className="relative p-6">
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 mb-4 text-sm leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-rose-500/20 to-purple-500/20 backdrop-blur-sm text-rose-300 rounded-full text-xs font-medium border border-rose-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-rose-400 hover:text-rose-300 font-medium text-sm transition-all group/link"
                      >
                        <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                        View Project
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-purple-300 hover:text-purple-200 font-medium text-sm transition-all group/link"
                      >
                        <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                        Details
                      </a>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-rose-400/0 group-hover:border-rose-400/30 transition-all duration-500 pointer-events-none"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
