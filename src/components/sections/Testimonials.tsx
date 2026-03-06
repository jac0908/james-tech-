import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "EthioPrime's understanding of the local regulatory environment was crucial for our expansion into the manufacturing sector.",
    author: "Kebede Haile",
    role: "CEO, Abyssinia Industries",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
  },
  {
    quote: "A professional partner that delivers world-class consulting standards right here in Addis Ababa.",
    author: "Hanna Bekele",
    role: "COO, Highland Logistics",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Client Success Stories</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-emerald-500 text-emerald-500" />)}
              </div>
              <p className="text-lg italic text-slate-700 mb-6">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="w-12 h-12 rounded-full" />
                <div>
                  <div className="font-bold text-slate-900">{t.author}</div>
                  <div className="text-sm text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;