export type TeamId = 'authors' | 'champions' | 'skyshot' | 'knights';

export type PlayerRole = 'batsman' | 'bowler' | 'all-rounder' | 'wicket-keeper';

export interface ReconstructedRunMetadata {
  sourceRuns: number;               // 119 (Authoritative printed total from PDF Page 6)
  sourceInningsRuns: number[];      // [45, 10, 0, 19, 32] (Exact 5 terms from PDF Page 6)
  sourceInningsSum: number;         // 106
  reconstructedAdjustment: number;  // 13 (Explicitly authorized reconciliation adjustment: 119 - 106 = 13)
  reconciledInningsSum: number;     // 106 + 13 = 119
  displayedReconciledRuns: number;  // 119 in official tables (preserving rankings)
  isReconstructed: boolean;         // true for Winsmoke, false for all other players
  reconstructionNote: string;       // Transparent documentation of the missing 6th match score
}

export interface AggregateReconciliation {
  sourceInningsAggregate: number;            // 5930
  winsmokeReconstruction: number;             // 13
  remainingAggregateAdjustment: number;       // 2
  officialRecordedBatterAggregate: number;    // 5945
  officialRecordedBowlerWickets: number;      // 101
  notes: string;
}

export interface Owner {
  id: string;
  name: string;
  nickname: string;
  teamId: TeamId;
  favouriteColor: string;
  favouriteCricketer: string;
  note?: string;
}

export interface Captain {
  name: string;
  realLifeCounterpart: string;
  teamId: TeamId;
}

export interface PlayerStats {
  runs?: number;
  wickets?: number;
  inningsRuns?: number[];
  inningsWickets?: number[];
  fifties?: number;
  centuries?: number;
  highestScore?: number;
  bestBowling?: string;
  // Final match verified stats
  ballsFacedFinal?: number;
  foursFinal?: number;
  sixesFinal?: number;
  oversFinal?: number;
  runsConcededFinal?: number;
  wicketsFinal?: number;
  // Reconstruction metadata
  reconstruction?: ReconstructedRunMetadata;
  // Discrepancy indicator note (e.g. for Summers 17 vs sum 16)
  anomalyNote?: string;
}

export interface Player {
  id: string;
  name: string;
  canonicalName: string;
  aliases: string[];
  teamId: TeamId;
  role: PlayerRole;
  isCaptainIcon?: boolean;
  isOwner?: boolean;
  stats: PlayerStats;
}

export interface TeamTheme {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  glowColor: string;
  surfaceColor: string;
  borderColor: string;
}

export interface Team {
  id: TeamId;
  name: string;
  shortName: string;
  owner: Owner;
  captain: Captain;
  theme: TeamTheme;
  squad: Player[];
  leagueRecord: {
    played: 6;
    won: number;
    lost: number;
    points: number;
    position: 1 | 2 | 3 | 4;
  };
  playoffResult: 'CHAMPIONS' | 'RUNNERS_UP' | 'SEMI_FINALIST' | 'LEAGUE_STAGE';
}

export interface ScorecardBatsman {
  playerId: string;
  playerName: string;
  runs: number;
  balls?: number;
  fours?: number;
  sixes?: number;
  strikeRate?: number;
  dismissal?: string;
}

export interface ScorecardBowler {
  playerId: string;
  playerName: string;
  overs?: number;
  maidens?: number;
  runsConceded?: number;
  wickets: number;
  economy?: number;
}

export interface MatchInnings {
  teamId: TeamId;
  runs: number;
  wickets: number;
  overs: number;
  batting: ScorecardBatsman[];
  bowling: ScorecardBowler[];
}

export type MatchStage = 'LEAGUE' | 'SEMI_FINAL_1' | 'SEMI_FINAL_2' | 'FINAL';

export interface Match {
  id: number;
  matchNumber: number;
  stage: MatchStage;
  homeTeamId: TeamId;
  awayTeamId: TeamId;
  winnerTeamId: TeamId;
  margin?: string;
  tossInfo?: string;
  detailsKnown: boolean;
  firstInnings?: MatchInnings;
  secondInnings?: MatchInnings;
  screenshotUrl?: string;
}

export interface SeasonRecord {
  id: string;
  title: string;
  category: 'batting' | 'bowling' | 'team' | 'milestone';
  holder: string;
  teamId: TeamId;
  value: string | number;
  description: string;
  isHistoric: boolean;
}

export interface SeasonData {
  seasonId: 'season-1';
  name: string;
  subtitle: string;
  year: number;
  championTeamId: TeamId;
  teams: Record<TeamId, Team>;
  players: Player[];
  matches: Match[];
  records: SeasonRecord[];
  reconciliation: AggregateReconciliation;
}

