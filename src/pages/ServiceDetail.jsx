// src/pages/ServiceDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicesData } from '../data/services-data';
import HeroProject from '../components/Project/HeroProject';
import AboutProject from '../components/Project/AboutProject';
import OurExpertise from '../components/Project/OurExpertise';
import WhatsIncluded from '../components/Project/WhatsIncluded';
import WorkingProcess from '../components/Project/WorkingProcess';
import WhyChooseUs from '../components/Project/WhyChooseUs';
import FAQ from '../components/Project/FAQ';

import ViewOurProjects from '../components/Project/ViewOurProjects';
import GetInTouch from '../components/Project/GetInTouch';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = servicesData.find(s => s.id === id);

  // Service not found
  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Service not found</h2>
        <p>Looking for: <strong>{id}</strong></p>
        <Link to="/">← Go Home</Link>
      </div>
    );
  }

  return (
    <div className="sd-page">

      {/* 1. HERO */}
      <HeroProject 
        title={service.title}
        subtitle={service.shortDesc}
      />

      {/* 2. ABOUT */}
      <AboutProject 
        aboutTitle={service.aboutTitle}
        aboutDesc={service.aboutDesc}
        image={service.heroImage}
        features={service.features}
      />

      {/* 3. OUR EXPERTISE */}
      {service.expertise && (
        <OurExpertise 
          tag={service.expertise.tag}
          title={service.expertise.title}
          description={service.expertise.description}
          items={service.expertise.items}
        />
      )}

      {/* 4. WHAT'S INCLUDED */}
      {service.whatsIncluded && (
        <WhatsIncluded items={service.whatsIncluded} />
      )}

  
<ViewOurProjects/>
      {/* 5. WORKING PROCESS */}
      <WorkingProcess />

      {/* 6. WHY CHOOSE US */}
      <WhyChooseUs />

      {/* 7. FAQ */}
      {service.faqs && (
        <FAQ faqs={service.faqs} />
      )}



      <GetInTouch/>





    
    </div>
  );
};

export default ServiceDetail;