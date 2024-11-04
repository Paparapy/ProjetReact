import React from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import Workflow from './Workflow';
import Pricing from './Pricing';
import Testimonial from './Testimonial';
import ContactPage from './ContactPage';

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <Workflow />
      <Pricing />
      <Testimonial />
      <ContactPage />
    </div>
  );
};

export default Home;
