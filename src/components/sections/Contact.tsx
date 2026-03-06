import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-emerald-600">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Enterprise in Ethiopia?</h2>
          <p className="text-xl text-emerald-100 mb-10">
            Schedule a complimentary consultation with our senior strategy team in Addis Ababa and discover how we can help your organization reach its full potential.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 h-14 text-lg font-bold shadow-xl">
                Book a Consultation
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 h-14 text-lg font-bold">
                Our Addis Office
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;