import { ArrowDown, Download, Building2, Ruler, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute w-96 h-96 border border-rose-300/20 rounded-lg animate-float"
          style={{
            top: '10%',
            left: '5%',
            transform: `rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`
          }}
        ></div>
        <div
          className="absolute w-64 h-64 border border-purple-300/20 rounded-full animate-float-delayed"
          style={{
            top: '60%',
            right: '10%',
            transform: `rotateX(${mousePosition.y * 0.02}deg) rotateY(${mousePosition.x * 0.02}deg)`
          }}
        ></div>
        <Building2
          className="absolute text-rose-400/10 animate-float"
          size={120}
          style={{ top: '20%', right: '15%' }}
        />
        <Ruler
          className="absolute text-purple-400/10 animate-float-delayed"
          size={100}
          style={{ bottom: '30%', left: '10%' }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 text-center relative z-10">
        <div className="mb-8 perspective-1000">
          <div className="relative inline-block group">
            {/* Gradient glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-50 animate-pulse-glow"></div>
            
            {/* Animated border gradient */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 p-[3px] animate-gradient-rotate">
              <div className="h-full w-full rounded-3xl bg-slate-900"></div>
            </div>
            
{/* Photo container – version améliorée */}
<div className="relative mx-auto mb-10 w-52 h-52 md:w-60 md:h-60 group">
  {/* Outer soft glow */}
  <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 opacity-30 blur-xl group-hover:opacity-60 transition-all duration-700"></div>

  {/* Gradient animated border */}
  <div className="absolute inset-0 p-[2px] rounded-[2rem] bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 animate-gradient-rotate">
    <div className="relative w-full h-full rounded-[2rem] bg-slate-900 overflow-hidden">
      {/* Image */}
      <img
        src="src/album/samar.jpg" // ✅ déplace ton image dans le dossier public/album
        alt="Samar TRABELSI - Civil Engineer"
        className="absolute inset-0 w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-1"
      />

      {/* Subtle overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-all duration-700"></div>

      {/* Light reflection accent */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-white/20 to-transparent opacity-40 group-hover:opacity-60 transition-all duration-700"></div>
    </div>
  </div>
</div>

            {/* Floating particles effect */}
            <div className="absolute top-0 left-0 w-2 h-2 bg-rose-400 rounded-full animate-float opacity-60"></div>
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-purple-400 rounded-full animate-float-delayed opacity-60"></div>
            <div className="absolute top-1/4 right-0 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>

        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
          <Sparkles className="text-rose-400" size={16} />
          <span className="text-sm text-rose-300 font-light">Civil Engineering & Architecture</span>
        </div>

        <h1 className="text-6xl md:text-7xl font-light text-white mb-4 tracking-tight">
          Samar <span className="font-bold bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">TRABELSI</span>
        </h1>
        <p className="text-2xl md:text-3xl text-purple-200 mb-6 font-light">
          Civil Engineering Student | BIM Modeler
        </p>
        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Building the future with innovative architectural solutions and cutting-edge technology
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={() => scrollToSection('projects')}
            className="group px-8 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-xl font-medium hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          <button
            className="group px-8 py-4 bg-white/5 backdrop-blur-md text-white rounded-xl font-medium border border-white/20 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1 hover:scale-105"
          >
            <Download size={20} className="group-hover:animate-bounce" />
            Download CV
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="text-rose-300 hover:text-rose-400 transition-colors animate-bounce"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
