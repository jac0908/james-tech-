import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    title: 'National Digital ID Implementation',
    client: 'Government Entity',
    result: 'Framework for secure identification for 40M+ citizens.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/service-fintech-41ae0847-1772815357764.webp'
  },
  {
    title: 'Agricultural Export Scaling',
    client: 'Regional Coffee Union',
    result: '45% increase in export efficiency via block-chain tracking.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Smart City Infrastructure',
    client: 'Addis Ababa City Admin',
    result: 'Optimized urban traffic flow and power distribution system.',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/service-infrastructure-8bcc6e34-1772815358115.webp'
  }
];

const CaseStudies = () => {
  return (
    <section id="cases" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Strategic Impact in Ethiopia</h2>
            <p className="text-slate-600">Delivering measurable results that drive the nation's economic progress.</p>
          </div>
          <button className="text-emerald-600 font-bold flex items-center gap-2 hover:underline">
            All Projects <ArrowUpRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-lg group">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/10 transition-colors"></div>
                </div>
                <CardHeader className="pb-2">
                  <div className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-1">{item.client}</div>
                  <CardTitle className="text-xl group-hover:text-emerald-600 transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.result}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;