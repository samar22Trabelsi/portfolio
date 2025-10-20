import { User, Briefcase, GraduationCap, Target, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            About <span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-rose-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl border border-rose-400/30 flex-shrink-0">
                <User className="text-rose-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">Who I Am</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  Final-year civil engineering student and freelance Revit modeler with proven skills in structural
                   design and BIM. Experienced in delivering quality projects through a full-time work-study
                    at a leading French industrial flooring company. Motivated, skilled, and ready to excel in a final-year internship.

                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-purple-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 flex-shrink-0">
                <GraduationCap className="text-purple-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">My Education</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  I am a third-year Civil Engineering student, building on a strong foundation
                   from my Higher Technician diploma in Building, and progressively developing
                    advanced skills in structural design, project modeling, and hands-on construction methodologies.
                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-pink-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-rose-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-400/30 flex-shrink-0">
                <Briefcase className="text-pink-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-pink-400 transition-colors">Professional Work</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  Worked as a Revit Project Designer and Quantity Surveyor during my work-study program,
                   then as a freelance BIM Modeler on industrial flooring projects. Skilled in structural
                    modeling, project documentation, and client collaboration, delivering precise and efficient solutions.

                </p>
              </div>
            </div>
          </div>

          <div className="group relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-rose-400/30 transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl border border-rose-400/30 flex-shrink-0">
                <Target className="text-rose-400" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-rose-400 transition-colors">My Vision</h3>
                <p className="text-slate-300 leading-relaxed font-light">
                  I drive the digitalization and automation of civil engineering,
                   delivering end-to-end solutions from structural analysis and design to BIM modeling, 
                   calculation notes, cost estimation, and project planning—combining technical precision, autonomy, and sustainable innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-br from-rose-500/10 to-purple-500/10 backdrop-blur-md rounded-3xl p-12 text-center border border-white/10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Sparkles className="text-rose-400" size={24} />
              <h3 className="text-3xl font-semibold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                Why Work With Me?
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed max-w-3xl mx-auto font-light text-lg">
              I bring a strong foundation in civil engineering and hands-on experience in BIM modeling
               and structural design. My adaptability, dedication to digitalization and automation, 
               and passion for delivering precise, efficient, and sustainable solutions ensure I contribute real value to every project from day one.


            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
