import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import FAQSection from '../components/FAQSection';
import GallerySection from '../components/GallerySection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <FAQSection />
      <GallerySection />
      <Footer />
    </div>
  );
};

export default Home;