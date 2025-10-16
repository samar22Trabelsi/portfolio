import { Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-950/50 backdrop-blur-md border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-2 justify-center md:justify-start">
              <Sparkles className="text-rose-400" size={20} />
              <span className="text-xl font-light text-white">
                Port<span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">folio</span>
              </span>
            </div>
            <p className="text-slate-400 font-light">
              &copy; {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-2 text-slate-300 font-light">
            <span>Crafted with</span>
            <Heart size={16} className="text-rose-400 fill-rose-400 animate-pulse" />
            <span>and passion for design</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
