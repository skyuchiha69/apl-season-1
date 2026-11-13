import { season1Data } from './seasons/season1';
import { SeasonData } from './types';

export const availableSeasons: Record<string, SeasonData> = {
  'season-1': season1Data,
};

export const defaultSeason = season1Data;

export * from './types';
export * from './selectors';
export * from './seasons/season1';

