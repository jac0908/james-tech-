import React from 'react';
import { Shield, BarChart3, Globe2, Zap, Users2, Rocket } from 'lucide-react';

const services = [
  {
    title: 'Business Strategy',
    description: "Navigate the changing Ethiopian economic landscape with data-driven market entry and expansion strategies.",
    icon: <BarChart3 className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Fintech Solutions',
    description: "Accelerate financial inclusion with modern payment systems and digital banking frameworks localized for ETB.",
    icon: <Zap className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Agro-Industrial Advisory',
    description: "Optimize agricultural value chains and scale processing operations across Ethiopia's key regions.",
    icon: <Globe2 className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Public Sector Advisory',
    description: "Supporting institutional reform and national infrastructure projects with global best practices.",
    icon: <Shield className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Human Capital Development',
    description: "Building high-performance local leadership through specialized executive training and organizational design.",
    icon: <Users2 className="w-8 h-8 text-emerald-600" />
  },
  {
    title: 'Infrastructure & Logistics',
    description: "Expert guidance on large-scale urban development and regional transport logistics.",
    icon: <Rocket className="w-8 h-8 text-emerald-600" />
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Comprehensive Ethiopian Solutions</h2>
          <p className="text-slate-600">We offer a specialized suite of strategic services designed to address the unique growth opportunities within the Horn of Africa.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all group">
              <div className="mb-6 bg-emerald-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;