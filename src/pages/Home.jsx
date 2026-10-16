// src/pages/Home.jsx
import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import About from '../components/About';
import LegacyCounter from '../components/LegacyCounter';
import FeaturedProjects from '../components/FeaturedProjects';
import Testimonials from '../components/Testimonials';
import QuickEnquiry from '../components/QuickEnquiry';
import Contact from '../components/Contact';
import WorkingProcess from '../components/Project/WorkingProcess';
import WhyChooseUs from '../components/Project/WhyChooseUs';
import Clients from '../components/Clients';
const Home = () => {
  return (
    <>
      <HeroSection />
      <Services />
        <FeaturedProjects />
        <WorkingProcess/>
        <Clients/>
      <About />
      <LegacyCounter />
    <WhyChooseUs/>
      <Testimonials />
       <Contact />
      <QuickEnquiry />
     
    </>
  );
};

export default Home;