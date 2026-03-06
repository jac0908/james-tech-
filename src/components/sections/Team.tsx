import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    name: 'Dawit Mekonnen',
    role: 'Managing Partner & CEO',
    bio: "Renowned strategy consultant with deep roots in Ethiopia's financial sector.",
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/ceo-portrait-36b05d37-1772815363513.webp'
  },
  {
    name: 'Selamawit Tadesse',
    role: 'Chief Technology Officer',
    bio: "Pioneer in Ethiopia's digital transformation and tech ecosystem development.",
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/cto-portrait-fae5a152-1772815357487.webp'
  },
  {
    name: 'Abebe Kebede',
    role: 'Head of Industrial Advisory',
    bio: "Expert in agro-processing and manufacturing growth across regional states.",
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400&h=500'
  },
  {
    name: 'Tsion Girmay',
    role: 'Director of Policy & Reform',
    bio: "Specialist in regulatory alignment and public-private partnerships.",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400&h=500'
  }
];

const Team = () => {
  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Leadership</h2>
          <p className="text-slate-600">Bringing together the finest minds in Ethiopian business and global strategy.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-[4/5]">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a href="#" className="text-white hover:text-emerald-400"><Linkedin size={20} /></a>
                    <a href="#" className="text-white hover:text-emerald-400"><Twitter size={20} /></a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900">{member.name}</h3>
              <div className="text-emerald-600 text-sm font-semibold mb-2">{member.role}</div>
              <p className="text-slate-500 text-sm leading-relaxed">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;