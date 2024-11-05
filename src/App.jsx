import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import FeatureSection from './components/FeatureSection';
import Workflow from './components/Workflow';
import Pricing from './components/Pricing';
import Testimonial from './components/Testimonial';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import ChatBox from './components/Chatbox';
import LoadingScreen from './components/LoadingScreen'; // Importez le composant de chargement

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Le délai avant de supprimer l'écran de chargement (en millisecondes)

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Navbar />
      <div className="px-6 pt-20 mx-auto max-w-7xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<FeatureSection />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <Footer />
      <ChatBox />
    </Router>
  );
};

export default App;
