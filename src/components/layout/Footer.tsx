import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-white text-xl font-bold tracking-tight">ETHIOPRIME</span>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Driving Ethiopia's economic transformation through professional excellence and strategic foresight since 2012.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Strategy</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Fintech</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Agro-Tech</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Infrastructure</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Our Team</Link></li>
              <li><Link to="/" className="hover:text-emerald-400 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Addis Office</h4>
            <p className="text-sm mb-4">Stay updated with the latest Ethiopian market trends.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Your Email" className="bg-slate-800 border-none rounded px-4 py-2 w-full focus:ring-1 ring-emerald-500" />
              <button className="bg-emerald-600 text-white px-4 py-2 rounded font-bold hover:bg-emerald-700 transition-colors">Join</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; {new Date().getFullYear()} EthioPrime Consulting Group. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;