import React from 'react';
import { HeroSection } from './components/HeroSection';
import { SeasonStatsStrip } from './components/SeasonStatsStrip';
import { ChampionshipFeature } from './components/ChampionshipFeature';
import { FranchisesLineup } from './components/FranchisesLineup';
import { CousinsSection } from './components/CousinsSection';
import { RivalryRoomSection } from './components/RivalryRoomSection';
import { LegacySection } from './components/LegacySection';

import { BanterCategoryId } from '../../content/banter';

interface HomePageProps {
  initialCategory?: BanterCategoryId;
}

export const HomePage: React.FC<HomePageProps> = ({ initialCategory }) => {
  return (
    <div className="flex flex-col bg-[#090C0B] text-[#EAE4D8]">
      {/* Editorial Hero Opening Sequence */}
      <HeroSection />

      {/* Broadcast-Grade Tournament Statistics Ledger */}
      <SeasonStatsStrip />

      {/* The Climax Feature: The Authors 226 Chase */}
      <ChampionshipFeature />

      {/* The Four Franchises Editorial Lineup */}
      <FranchisesLineup />

      {/* The Four Cousins: Strategic Owners & Active Players */}
      <CousinsSection />

      {/* The Rivalry Room: Interactive Banter & Verified Match Lore */}
      <RivalryRoomSection initialCategory={initialCategory} />

      {/* The Emotional Origin Narrative */}
      <LegacySection />
    </div>
  );
};

export default HomePage;
