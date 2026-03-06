import React from 'react';

const stats = [
  { label: 'Founded in Addis', value: '2012' },
  { label: 'Local Clients', value: '250+' },
  { label: 'Projects Nationwide', value: '850+' },
  { label: 'Local Experts', value: '120+' },
];

const Stats = () => {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 font-medium uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;