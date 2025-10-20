import { Mail, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-light text-white mb-4">
            Get In <span className="font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto font-light">
            Interested in collaboration or have an internship opportunity? Let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-semibold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-rose-400/30 transition-all">
                <div className="p-3 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl border border-rose-400/30 flex-shrink-0">
                  <Mail className="text-rose-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-slate-300 hover:text-rose-400 transition-colors">
                    your.email@example.com
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-purple-400/30 transition-all">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-400/30 flex-shrink-0">
                  <Linkedin className="text-purple-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">LinkedIn</h4>
                  <a href="https://www.linkedin.com/in/samar-trabelsi-88401a202/" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-purple-400 transition-colors">
                    https://www.linkedin.com/in/samar-trabelsi-88401a202/
                  </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-pink-400/30 transition-all">
                <div className="p-3 bg-gradient-to-br from-pink-500/20 to-rose-500/20 rounded-xl border border-pink-400/30 flex-shrink-0">
                  <Github className="text-pink-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">GitHub</h4>
                  <a href="https://github.com/samar22Trabelsi" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-pink-400 transition-colors">
                    https://github.com/samar22Trabelsi                 </a>
                </div>
              </div>

              <div className="group flex items-start gap-4 p-4 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 hover:border-rose-400/30 transition-all">
                <div className="p-3 bg-gradient-to-br from-rose-500/20 to-purple-500/20 rounded-xl border border-rose-400/30 flex-shrink-0">
                  <MapPin className="text-rose-400" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">Location</h4>
                  <p className="text-slate-300">Open to opportunities across Europe</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-rose-500/10 to-purple-500/10 backdrop-blur-md rounded-xl p-6 border border-white/10">
              <h4 className="font-bold text-white mb-2">Availability</h4>
              <p className="text-slate-300 leading-relaxed font-light">
                Currently seeking internship opportunities starting in the next few months.
                Flexible with remote work and willing to relocate within Europe for the right opportunity.
              </p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-8">
              <h3 className="text-3xl font-semibold text-white mb-8">Send a Message</h3>

              <div className="mb-6">
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Samar TRABELSI
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-rose-400 focus:outline-none transition-all text-white placeholder-slate-400"
                  placeholder="Jane Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-rose-400 focus:outline-none transition-all text-white placeholder-slate-400"
                  placeholder="jane@example.com"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl focus:border-rose-400 focus:outline-none transition-all resize-none text-white placeholder-slate-400"
                  placeholder="Tell me about your internship opportunity or project..."
                />
              </div>

              <button
                type="submit"
                className="group w-full px-6 py-4 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-2xl hover:shadow-rose-500/50 transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
