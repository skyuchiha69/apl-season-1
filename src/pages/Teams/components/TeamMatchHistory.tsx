import React from 'react';
import { Link } from 'react-router-dom';
import { TeamId, Match } from '../../../data/types';
import { Calendar, Trophy, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

interface TeamMatchHistoryProps {
  teamId: TeamId;
  matches: Match[];
}

export const TeamMatchHistory: React.FC<TeamMatchHistoryProps> = ({ teamId, matches }) => {
  // Sort fixtures by match number ascending
  const teamMatches = [...matches].sort((a, b) => a.matchNumber - b.matchNumber);

  const getTeamName = (id: TeamId) => {
    switch (id) {
      case 'authors':
        return 'AUTHORS';
      case 'champions':
        return 'CHAMPIONS';
      case 'skyshot':
        return 'SKYSHOT';
      case 'knights':
        return 'KNIGHTS';
      default:
        return id;
    }
  };

  const getTeamAccentClass = (id: TeamId) => {
    switch (id) {
      case 'authors':
        return 'text-emerald-400';
      case 'champions':
        return 'text-rose-400';
      case 'skyshot':
        return 'text-cyan-400';
      case 'knights':
        return 'text-slate-300';
      default:
        return 'text-[#EAE4D8]';
    }
  };

  return (
    <div className="py-8 sm:py-10 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-[#EAE4D8]/10 pb-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#B99A5B] uppercase font-semibold">
            <Calendar className="w-4 h-4 text-[#B99A5B]" />
            <span>Tournament Schedule • Match History</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#EAE4D8] font-display uppercase tracking-tight">
            Campaign Timeline
          </h3>
        </div>
        <p className="text-xs font-mono text-[#87968B] max-w-sm text-left sm:text-right">
          Chronological record of regular season fixtures and post-season championship rounds.
        </p>
      </div>

      {/* Fixtures List */}
      <div className="space-y-3">
        {teamMatches.map((match) => {
          const opponentId = match.homeTeamId === teamId ? match.awayTeamId : match.homeTeamId;
          const isWinner = match.winnerTeamId === teamId;
          const isFinal = match.stage === 'FINAL';
          const isPlayoff = match.stage === 'SEMI_FINAL_1' || match.stage === 'SEMI_FINAL_2' || isFinal;

          let stageLabel = 'League Stage';
          if (match.stage === 'SEMI_FINAL_1') stageLabel = 'Semi-Final 1';
          if (match.stage === 'SEMI_FINAL_2') stageLabel = 'Semi-Final 2';
          if (match.stage === 'FINAL') stageLabel = 'Championship Final';

          return (
            <div
              key={match.id}
              className={`p-4 rounded-xl border transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                isFinal
                  ? 'bg-[#121F17] border-[#B99A5B]/40 ring-1 ring-[#B99A5B]/20'
                  : isWinner
                  ? 'bg-[#0E1713] border-[#EAE4D8]/10 hover:border-emerald-500/30'
                  : 'bg-[#0E1713] border-[#EAE4D8]/10 hover:border-rose-500/30'
              }`}
            >
              {/* Left Column: Match Identification & Opponent */}
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2 flex-wrap gap-y-1">
                  <span className="text-xs font-mono font-bold text-[#B99A5B] uppercase tracking-wider">
                    Match {match.matchNumber}
                  </span>
                  <span className="text-[#87968B] text-xs font-mono">•</span>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold ${
                      isPlayoff
                        ? 'bg-[#B99A5B]/20 text-[#B99A5B] border border-[#B99A5B]/30'
                        : 'bg-[#14201A] text-[#87968B] border border-[#EAE4D8]/10'
                    }`}
                  >
                    {stageLabel}
                  </span>
                  {isFinal && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase">
                      <Trophy className="w-2.5 h-2.5" />
                      <span>Grand Final</span>
                    </span>
                  )}
                </div>

                <div className="flex items-baseline space-x-2 text-sm sm:text-base font-display">
                  <span className="text-[#87968B] font-sans text-xs">vs</span>
                  <Link
                    to={`/teams/${opponentId}`}
                    className={`font-bold hover:underline transition-all ${getTeamAccentClass(opponentId)}`}
                  >
                    {getTeamName(opponentId)}
                  </Link>
                </div>
              </div>

              {/* Middle Column: Scoreline & Archival Detail */}
              <div className="md:text-right space-y-1">
                {match.detailsKnown ? (
                  <div className="space-y-0.5">
                    {match.firstInnings && match.secondInnings && (
                      <p className="font-mono text-xs text-[#EAE4D8]">
                        {getTeamName(match.firstInnings.teamId)}: {match.firstInnings.runs}/{match.firstInnings.wickets} ({match.firstInnings.overs} ov) vs{' '}
                        {getTeamName(match.secondInnings.teamId)}: {match.secondInnings.runs}/{match.secondInnings.wickets} ({match.secondInnings.overs} ov)
                      </p>
                    )}
                    {match.margin && (
                      <p className="font-sans text-xs text-[#B99A5B] font-semibold">
                        {getTeamName(match.winnerTeamId)} won {match.margin}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="space-y-0.5">
                    <p className="font-mono text-xs text-[#87968B]">
                      Official Scorecard Unrecorded in Surviving Archive
                    </p>
                    <p className="font-sans text-[11px] text-[#A69F92]">
                      Result Verified: <strong className={getTeamAccentClass(match.winnerTeamId)}>{getTeamName(match.winnerTeamId)}</strong> won
                    </p>
                  </div>
                )}
              </div>

              {/* Right Column: Result Badge & Deep Scorecard Link */}
              <div className="flex items-center space-x-3 shrink-0 self-start md:self-auto">
                <span
                  className={`inline-flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                    isWinner
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-500/20 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {isWinner ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>WON</span>
                    </>
                  ) : (
                    <>
                      <XCircle className="w-3.5 h-3.5" />
                      <span>LOST</span>
                    </>
                  )}
                </span>

                {isFinal && (
                  <Link
                    to="/matches"
                    className="inline-flex items-center space-x-1 text-xs font-mono text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-wider"
                  >
                    <span>Match Centre</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
