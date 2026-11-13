import React, { createContext, useContext, useState } from 'react';
import { SeasonData } from '../../data/types';
import { availableSeasons, defaultSeason } from '../../data';

interface SeasonContextType {
  activeSeasonId: string;
  seasonData: SeasonData;
  setSeasonId: (seasonId: string) => void;
  availableSeasonIds: string[];
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [activeSeasonId, setActiveSeasonId] = useState<string>('season-1');

  const seasonData = availableSeasons[activeSeasonId] || defaultSeason;
  const availableSeasonIds = Object.keys(availableSeasons);

  return (
    <SeasonContext.Provider
      value={{
        activeSeasonId,
        seasonData,
        setSeasonId: setActiveSeasonId,
        availableSeasonIds
      }}
    >
      {children}
    </SeasonContext.Provider>
  );
};

export function useSeason() {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
}

