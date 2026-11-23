import React, { createContext, useContext, useState } from 'react';
import { SeasonData, SeasonId } from '../../data/types';
import { availableSeasons, defaultSeason } from '../../data';

export interface SeasonContextType {
  activeSeasonId: SeasonId;
  seasonData: SeasonData;
  setSeasonId: (seasonId: SeasonId) => void;
  availableSeasonIds: SeasonId[];
}

const SeasonContext = createContext<SeasonContextType | undefined>(undefined);

export const SeasonProvider: React.FC<{
  children: React.ReactNode;
  initialSeasonId?: SeasonId;
}> = ({ children, initialSeasonId = 'season-1' }) => {
  const [activeSeasonId, setActiveSeasonId] = useState<SeasonId>(initialSeasonId);

  const seasonData = availableSeasons[activeSeasonId] || defaultSeason;
  const availableSeasonIds = Object.keys(availableSeasons) as SeasonId[];

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

export function useSeason(): SeasonContextType {
  const context = useContext(SeasonContext);
  if (!context) {
    throw new Error('useSeason must be used within a SeasonProvider');
  }
  return context;
}

/**
 * Safe consumer hook for components that can render with default Season 1 data
 * when rendered outside a SeasonProvider tree, such as in isolated unit tests.
 */
export function useSeasonOptional(): SeasonContextType {
  const context = useContext(SeasonContext);
  if (!context) {
    return {
      activeSeasonId: 'season-1',
      seasonData: defaultSeason,
      setSeasonId: () => {},
      availableSeasonIds: ['season-1', 'season-2'] as SeasonId[],
    };
  }
  return context;
}

