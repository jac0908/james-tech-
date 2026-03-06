import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/hero-addis-skyline-412e1081-1772815357452.webp"
          alt="Addis Ababa Skyline"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Ethiopia's Leading Strategy Firm
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">
              Architecting the <span className="text-emerald-500">Growth</span> of Ethiopia.
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              Empowering the next generation of Ethiopian enterprises through strategic innovation, 
              digital excellence, and world-class consulting standards.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 h-14 text-lg font-bold group">
                Get Started <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 h-14 text-lg font-bold">
                <Play className="mr-2 fill-white" /> Watch Film
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-slate-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-emerald-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;