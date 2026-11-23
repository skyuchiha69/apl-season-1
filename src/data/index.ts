import { season1Data } from './seasons/season1';
import { season2Data } from './seasons/season2';
import { SeasonData, SeasonId } from './types';

export const availableSeasons: Record<SeasonId, SeasonData> & Record<string, SeasonData | undefined> = {
  'season-1': season1Data,
  'season-2': season2Data,
};

export const defaultSeason = season1Data;

export * from './types';
export * from './selectors';
export * from './seasons/season1';
export * from './seasons/season2';
