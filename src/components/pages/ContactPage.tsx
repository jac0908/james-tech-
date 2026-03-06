import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { toast } from 'sonner';

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your message! Our team in Addis Ababa will get back to you shortly.");
    (e.target as HTMLFormElement).reset();
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-emerald-600" />,
      title: "Phone",
      details: "+251 11 123 4567",
      subDetails: "Mon-Fri, 8:30am - 5:30pm EAT",
    },
    {
      icon: <Mail className="w-5 h-5 text-emerald-600" />,
      title: "Email",
      details: "info@ethioprime.com",
      subDetails: "support@ethioprime.com",
    },
    {
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
      title: "Headquarters",
      details: "Bole Road, DH Geda Tower",
      subDetails: "Addis Ababa, Ethiopia",
    },
    {
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
      title: "Regional Offices",
      details: "Bahir Dar, Mekelle, Hawassa",
      subDetails: "and Dire Dawa",
    },
  ];

  return (
    <div className="pt-20 bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/hero-addis-skyline-412e1081-1772815357452.webp"
            alt="Addis Ababa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-[2px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Connect with Our Addis Team</h1>
            <p className="text-lg text-slate-200">
              Whether you are a startup or a multinational entering the Ethiopian market, 
              our experts are here to guide your success. Reach out today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7"
            >
              <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 border border-slate-100">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-slate-900">Send us a Message</h2>
                  <p className="text-slate-500 mt-2">Fill out the form below and our consultants will respond promptly.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" placeholder="Abebe Kebede" required className="bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Business Email</Label>
                      <Input id="email" type="email" placeholder="abebe@company.com" required className="bg-slate-50 border-slate-200 focus:bg-white" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Inquiry Type</Label>
                    <Input id="subject" placeholder="Market Entry Strategy" required className="bg-slate-50 border-slate-200 focus:bg-white" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your business goals..."
                      rows={6}
                      required
                      className="bg-slate-50 border-slate-200 focus:bg-white resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full md:w-auto px-10 h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-all">
                    <Send className="w-4 h-4 mr-2" />
                    Send Inquiry
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information & Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Info Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mb-4">
                        {info.icon}
                      </div>
                      <h3 className="font-bold text-slate-900 mb-1">{info.title}</h3>
                      <p className="text-slate-600 text-sm font-medium">{info.details}</p>
                      <p className="text-slate-400 text-xs">{info.subDetails}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Map Placeholder */}
              <div className="relative rounded-2xl overflow-hidden h-64 shadow-lg border border-slate-200">
                <img
                  src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/7f103709-d9e4-4129-830a-f7fd5066cb35/about-team-meeting-5cdf445b-1772815364229.webp"
                  alt="Map location"
                  className="w-full h-full object-cover grayscale opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-emerald-900/20">
                   <div className="bg-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 border border-emerald-100">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                      <span className="font-bold text-slate-900">Visit Our Bole Office</span>
                   </div>
                </div>
              </div>

              {/* FAQ Teaser */}
              <div className="p-6 bg-emerald-600 rounded-2xl text-white">
                <div className="flex items-center gap-3 mb-3">
                  <MessageSquare className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Need Quick Advice?</h3>
                </div>
                <p className="text-emerald-100 text-sm mb-4">
                  Our consultants are available for quick strategy sessions every Thursday afternoon. Book a slot.
                </p>
                <Button variant="outline" className="w-full bg-transparent border-white text-white hover:bg-white hover:text-emerald-600">
                  Book a Call
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner logos placeholder */}
      <section className="py-12 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <p className="text-slate-400 text-sm font-semibold tracking-widest uppercase mb-8">Trusted by 250+ Ethiopian & Global Enterprises</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
             <div className="text-2xl font-bold text-slate-900">CBE</div>
             <div className="text-2xl font-bold text-slate-900">ET-AIRLINES</div>
             <div className="text-2xl font-bold text-slate-900">SAFENET</div>
             <div className="text-2xl font-bold text-slate-900">UN-AFRICA</div>
             <div className="text-2xl font-bold text-slate-900">MIDROC</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;