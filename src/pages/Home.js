import React from 'react';
import HeroSection from '../components/HeroSection';
import NavigationCards from '../components/NavigationCards';

function Home() {
  return (
    <div className="home-page">
      <HeroSection />
      <NavigationCards />
    </div>
  );
}

export default Home;