import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-slate-900/80 backdrop-blur-xl shadow-lg shadow-rose-500/5 border-b border-white/10'
        : 'bg-transparent'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => scrollToSection('home')}>
            <Sparkles className="text-rose-400 group-hover:rotate-12 transition-transform" size={24} />
            <span className="text-2xl font-light text-white">
              Port<span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">folio</span>
            </span>
          </div>

          <div className="hidden md:flex gap-1 bg-white/5 backdrop-blur-md rounded-full p-1 border border-white/10">
            <button
              onClick={() => scrollToSection('home')}
              className="px-6 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="px-6 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="px-6 py-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all font-medium"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-full transition-all font-medium hover:shadow-lg hover:shadow-rose-500/30"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden text-white bg-white/10 backdrop-blur-md p-2 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-3 bg-white/5 backdrop-blur-md rounded-2xl p-4 border border-white/10">
            <button
              onClick={() => scrollToSection('home')}
              className="text-slate-300 hover:text-rose-400 transition-colors font-medium text-left px-4 py-3 hover:bg-white/5 rounded-xl"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-slate-300 hover:text-rose-400 transition-colors font-medium text-left px-4 py-3 hover:bg-white/5 rounded-xl"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-slate-300 hover:text-rose-400 transition-colors font-medium text-left px-4 py-3 hover:bg-white/5 rounded-xl"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-slate-300 hover:text-rose-400 transition-colors font-medium text-left px-4 py-3 hover:bg-white/5 rounded-xl"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-rose-500 to-purple-500 text-white transition-colors font-medium text-left px-4 py-3 rounded-xl"
            >
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
