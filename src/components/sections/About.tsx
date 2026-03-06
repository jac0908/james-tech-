import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/about-team-meeting-5cdf445b-1772815364229.webp"
                alt="EthioPrime Team meeting"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="text-4xl font-bold text-emerald-600">12+</div>
              <div className="text-slate-500 font-medium">Years of Local Expertise</div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Experience Driven by Local Insights and Global Standards.</h2>
            <p className="text-lg text-slate-600 mb-8">
              Founded in Addis Ababa on the principles of integrity and deep sectoral knowledge, EthioPrime has grown into Ethiopia's premier strategic partner for private and public enterprises.
            </p>

            <div className="space-y-4 mb-10">
              {['Deep understanding of the Ethiopian market', 'Strategic alignment with national growth goals', 'Local network of 100+ industry experts', 'Commitment to sustainable development'].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-colors">
              Our Heritage
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;