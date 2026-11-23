import React from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Team, Player } from '../../../data/types';
import { Trophy, Award, TrendingUp, Target, BarChart2, AlertCircle } from 'lucide-react';

interface TeamStatsSummaryProps {
  team: Team;
  players?: Player[];
}

export const TeamStatsSummary: React.FC<TeamStatsSummaryProps> = ({ team, players }) => {
  const { seasonData } = useSeason();
  const isSeason1 = seasonData.seasonId === 'season-1';

  // Verified Top Run Scorer & Wicket Taker per franchise
  let topRunScorer = { name: '—', runs: '—' };
  let topWicketTaker = { name: '—', wickets: '—' };

  if (isSeason1) {
    if (team.id === 'authors') {
      topRunScorer = { name: 'A. King', runs: '527' };
      topWicketTaker = { name: 'T. Askin', wickets: '7' };
    } else if (team.id === 'champions') {
      topRunScorer = { name: 'S. Harvy', runs: '360' };
      topWicketTaker = { name: 'S. Parker', wickets: '8' };
    } else if (team.id === 'skyshot') {
      topRunScorer = { name: 'V. Lalouch', runs: '372' };
      topWicketTaker = { name: 'N. Sky', wickets: '12' };
    } else if (team.id === 'knights') {
      topRunScorer = { name: 'Jay', runs: '245' };
      topWicketTaker = { name: 'Winsmoke / Turner', wickets: '4 each' };
    }
  } else if (players && players.length > 0) {
    const batters = players.filter((p) => (p.stats.runs ?? 0) > 0);
    if (batters.length > 0) {
      const topBatter = [...batters].sort((a, b) => (b.stats.runs ?? 0) - (a.stats.runs ?? 0))[0];
      topRunScorer = { name: topBatter.name, runs: String(topBatter.stats.runs ?? 0) };
    }

    const bowlers = players.filter((p) => (p.stats.wickets ?? 0) > 0);
    if (bowlers.length > 0) {
      const sortedBowlers = [...bowlers].sort((a, b) => (b.stats.wickets ?? 0) - (a.stats.wickets ?? 0));
      const maxW = sortedBowlers[0].stats.wickets ?? 0;
      const topList = sortedBowlers.filter((p) => (p.stats.wickets ?? 0) === maxW);
      if (topList.length === 1) {
        topWicketTaker = { name: topList[0].name, wickets: String(maxW) };
      } else {
        topWicketTaker = {
          name: topList.map((p) => p.name).join(' / '),
          wickets: `${maxW} each`,
        };
      }
    }
  }

  // Team High and Low scores (only Knights are recorded in records.ts for Season 1)
  const isKnights = team.id === 'knights';
  const highestTeamScore = isSeason1 && isKnights ? '291' : '—';
  const lowestTeamScore = isSeason1 && isKnights ? '122' : '—';

  // Standings tied-2nd resolution
  const isTiedSecond = isSeason1 && (team.id === 'authors' || team.id === 'champions');
  const standingDisplay = isSeason1
    ? team.id === 'skyshot'
      ? '1st'
      : isTiedSecond
      ? 'T-2nd'
      : '4th'
    : `${team.leagueRecord.position}${team.leagueRecord.position === 1 ? 'st' : team.leagueRecord.position === 2 ? 'nd' : team.leagueRecord.position === 3 ? 'rd' : 'th'}`;

  const standingLabel = isSeason1
    ? team.id === 'skyshot'
      ? 'Regular Season Table Toppers'
      : isTiedSecond
      ? 'Tied Second (Shared Standings)'
      : 'League Stage'
    : team.leagueRecord.position === 1
    ? 'Regular Season Table Toppers'
    : team.leagueRecord.position === 2
    ? 'Playoff Qualifier'
    : team.leagueRecord.position === 3
    ? 'Playoff Contenders'
    : 'League Stage';

  return (
    <div className="py-8 sm:py-10 border-b border-[#EAE4D8]/10 space-y-6">
      {/* Section Subheading */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#B99A5B] uppercase font-semibold">
          <BarChart2 className="w-4 h-4 text-[#B99A5B]" />
          <span>{isSeason1 ? 'Season 1 Ledger • Performance Summary' : `${seasonData.name} Ledger • Performance Summary`}</span>
        </div>
        <span className="text-[11px] font-mono text-[#87968B] uppercase">
          12 Regular Season Rounds + Playoffs
        </span>
      </div>

      {/* Primary Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
        {/* Played */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            Matches Played
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-black text-[#EAE4D8]">
            {team.leagueRecord.played}
          </span>
          <span className="block text-[10px] font-mono text-[#A69F92] mt-0.5">League Stage</span>
        </div>

        {/* Won */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            Matches Won
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-black text-emerald-400">
            {team.leagueRecord.won}
          </span>
          <span className="block text-[10px] font-mono text-emerald-500/70 mt-0.5">Victories</span>
        </div>

        {/* Lost */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            Matches Lost
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-black text-rose-400">
            {team.leagueRecord.lost}
          </span>
          <span className="block text-[10px] font-mono text-rose-500/70 mt-0.5">Defeats</span>
        </div>

        {/* League Points */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            League Points
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-black text-[#B99A5B]">
            {team.leagueRecord.points}
          </span>
          <span className="block text-[10px] font-mono text-[#A69F92] mt-0.5">2 Pts / Win</span>
        </div>

        {/* Standing */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            League Standing
          </span>
          <span className="font-mono text-2xl sm:text-3xl font-black text-[#EAE4D8]">
            {standingDisplay}
          </span>
          <span className="block text-[10px] font-mono text-[#B99A5B] mt-0.5 truncate px-1" title={standingLabel}>
            {standingLabel}
          </span>
        </div>

        {/* Playoff Finish */}
        <div className="p-3.5 sm:p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 text-center">
          <span className="block text-[10px] sm:text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-1">
            Tournament Finish
          </span>
          <span className="font-mono text-base sm:text-lg font-bold text-emerald-400 truncate block mt-1">
            {team.playoffResult === 'CHAMPIONS'
              ? 'CHAMPIONS'
              : team.playoffResult === 'RUNNERS_UP'
              ? 'RUNNERS-UP'
              : team.playoffResult === 'SEMI_FINALIST'
              ? 'SEMI-FINAL'
              : 'LEAGUE'}
          </span>
          <span className="block text-[10px] font-mono text-[#A69F92] mt-0.5">Post-Season</span>
        </div>
      </div>

      {/* Secondary Depth Grid: Franchise Leaders & Team Innings Extremes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Top Run Scorer */}
        <div className="p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 flex items-start space-x-3.5">
          <div className="p-2.5 rounded-lg bg-[#B99A5B]/15 text-[#B99A5B] shrink-0 mt-0.5">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <span className="text-[10px] font-mono uppercase text-[#87968B] tracking-wider block">
              Leading Batter
            </span>
            <h4 className="font-display font-bold text-base sm:text-lg text-[#EAE4D8] truncate">
              {topRunScorer.name}
            </h4>
            <p className="font-mono text-xs text-[#B99A5B] font-semibold">
              {topRunScorer.runs} Batter Runs
            </p>
          </div>
        </div>

        {/* Top Wicket Taker */}
        <div className="p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 flex items-start space-x-3.5">
          <div className="p-2.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 mt-0.5">
            <Target className="w-5 h-5" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <span className="text-[10px] font-mono uppercase text-[#87968B] tracking-wider block">
              Leading Bowler
            </span>
            <h4 className="font-display font-bold text-base sm:text-lg text-[#EAE4D8] truncate">
              {topWicketTaker.name}
            </h4>
            <p className="font-mono text-xs text-emerald-400 font-semibold">
              {topWicketTaker.wickets} Wickets
            </p>
          </div>
        </div>

        {/* Highest Team Score */}
        <div className="p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 flex items-start space-x-3.5">
          <div className="p-2.5 rounded-lg bg-cyan-500/15 text-cyan-400 shrink-0 mt-0.5">
            <Award className="w-5 h-5" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <span className="text-[10px] font-mono uppercase text-[#87968B] tracking-wider block">
              Highest Team Score
            </span>
            <h4 className="font-mono font-bold text-base sm:text-lg text-[#EAE4D8]">
              {highestTeamScore}
            </h4>
            <p className="font-sans text-[11px] text-[#87968B]">
              {isSeason1 && isKnights
                ? 'Tournament Record vs Skyshot'
                : 'Not recorded in the available league archive.'}
            </p>
          </div>
        </div>

        {/* Lowest Team Score */}
        <div className="p-4 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 flex items-start space-x-3.5">
          <div className="p-2.5 rounded-lg bg-rose-500/15 text-rose-400 shrink-0 mt-0.5">
            <Trophy className="w-5 h-5" />
          </div>
          <div className="space-y-0.5 overflow-hidden">
            <span className="text-[10px] font-mono uppercase text-[#87968B] tracking-wider block">
              Lowest Team Score
            </span>
            <h4 className="font-mono font-bold text-base sm:text-lg text-[#EAE4D8]">
              {lowestTeamScore}
            </h4>
            <p className="font-sans text-[11px] text-[#87968B]">
              {isSeason1 && isKnights
                ? 'Season Low Recorded in League'
                : 'Not recorded in the available league archive.'}
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Footnote for Tied Second Standings */}
      {isTiedSecond && (
        <div className="p-3.5 rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 text-xs font-sans text-[#A69F92] flex items-start space-x-2.5 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <span>
            <strong className="text-[#EAE4D8] font-mono uppercase text-[11px]">Regular Season Standings Footnote: </strong>
            Authors and Champions concluded the regular season tied on 6 points (identical 3–3 records; 1–1 head-to-head split).
            With no official league Net Run Rate recorded, both franchises officially share 2nd place (T-2nd) in the league standings.
          </span>
        </div>
      )}
    </div>
  );
};
