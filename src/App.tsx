import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Services from './components/sections/Services';
import About from './components/sections/About';
import CaseStudies from './components/sections/CaseStudies';
import Team from './components/sections/Team';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import ContactPage from './components/pages/ContactPage';

const HomePage = () => (
  <main>
    <section id="hero"><Hero /></section>
    <section id="stats"><Stats /></section>
    <section id="services"><Services /></section>
    <section id="about"><About /></section>
    <section id="cases"><CaseStudies /></section>
    <section id="team"><Team /></section>
    <section id="testimonials"><Testimonials /></section>
    <section id="contact"><Contact /></section>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50 font-sans antialiased">
        <Toaster position="top-right" />
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;