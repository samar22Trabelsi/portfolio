import { Ruler, Pen, Building2, Calculator, HardHat, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Building2 size={32} />,
      title: "Architectural Design",
      skills: ["AutoCAD", "Revit", "SketchUp", "3D Modeling", "BIM", "ArchiCAD"],
      percentage: 95,
      color: "rose"
    },
    {
      icon: <Calculator size={32} />,
      title: "Structural Engineering",
      skills: ["SAP2000", "ETABS", "Load Analysis", "Seismic Design", "Foundation Design"],
      percentage: 88,
      color: "purple"
    },
    {
      icon: <Pen size={32} />,
      title: "Design & Visualization",
      skills: ["Lumion", "V-Ray", "Photoshop", "3ds Max", "Rendering", "Animation"],
      percentage: 92,
      color: "pink"
    },
    {
      icon: <Ruler size={32} />,
      title: "Project Management",
      skills: ["Planning", "Cost Estimation", "Scheduling", "Quality Control", "MS Project"],
      percentage: 85,
      color: "violet"
    },
    {
      icon: <HardHat size={32} />,
      title: "Construction Tech",
      skills: ["Site Supervision", "MEP Coordination", "Safety Standards", "Material Science"],
      percentage: 80,
      color: "fuchsia"
    },
    {
      icon: <Lightbulb size={32} />,
      title: "Sustainable Design",
      skills: ["Green Building", "LEED", "Energy Efficiency", "Solar Integration", "Eco Materials"],
      percentage: 90,
      color: "rose"
    }
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Skills & <span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Technical competencies in architectural design and civil engineering
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-rose-400/30 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-3 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl border border-rose-400/30 text-rose-400 group-hover:scale-110 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                      {category.percentage}%
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-rose-400 transition-colors">
                  {category.title}
                </h3>

                <div className="mb-4 h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-rose-500 to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse-glow"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 bg-white/5 backdrop-blur-sm rounded-lg text-xs font-medium text-slate-300 border border-white/10 hover:border-rose-400/30 hover:text-rose-300 transition-all"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative bg-gradient-to-br from-rose-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-12 text-white text-center border border-white/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-rose-500/5 to-purple-500/5 animate-pulse-glow"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-semibold mb-4 bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
              Continuous Growth
            </h3>
            <p className="leading-relaxed max-w-3xl mx-auto text-slate-300 font-light text-lg">
              Committed to staying at the forefront of architectural innovation and engineering excellence.
              Currently expanding expertise in parametric design, sustainable building technologies, and
              smart city infrastructure solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
