import React from 'react';
import { HeroSection } from './components/HeroSection';
import { LegacySection } from './components/LegacySection';

export const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#08090C] text-slate-100">
      {/* Milestone 2A: Hero Section */}
      <HeroSection />

      {/* Milestone 2A: Legacy Section */}
      <LegacySection />
    </div>
  );
};

export default HomePage;

