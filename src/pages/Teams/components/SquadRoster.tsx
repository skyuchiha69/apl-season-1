import React, { useState } from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Team, Player, PlayerRole } from '../../../data/types';
import { Users, ChevronDown, ChevronUp, Info } from 'lucide-react';

interface SquadRosterProps {
  team: Team;
  players: Player[];
}

export const SquadRoster: React.FC<SquadRosterProps> = ({ team, players }) => {
  const { seasonData } = useSeason();
  const isSeason1 = seasonData.seasonId === 'season-1';
  const [selectedRole, setSelectedRole] = useState<'all' | PlayerRole>('all');
  const [expandedPlayerId, setExpandedPlayerId] = useState<string | null>(null);

  // Filter players by selected role tab
  const filteredPlayers = selectedRole === 'all'
    ? players
    : players.filter((p) => p.role === selectedRole);

  // Helper for human-readable role badge
  const formatRoleLabel = (role: PlayerRole) => {
    switch (role) {
      case 'batsman':
        return 'Batsman';
      case 'bowler':
        return 'Bowler';
      case 'all-rounder':
        return 'All-Rounder';
      case 'wicket-keeper':
        return 'Wicket-Keeper';
      default:
        return role;
    }
  };

  const toggleExpand = (id: string) => {
    setExpandedPlayerId(expandedPlayerId === id ? null : id);
  };

  return (
    <div className="py-8 sm:py-10 border-b border-[#EAE4D8]/10 space-y-6">
      {/* Header & Role Filter Tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-xs font-mono tracking-wider text-[#B99A5B] uppercase font-semibold">
            <Users className="w-4 h-4 text-[#B99A5B]" />
            <span>Official Squad Roster • {players.length} Verified Players</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-[#EAE4D8] font-display uppercase tracking-tight">
            The {team.name} {isSeason1 ? 'XI' : 'Squad'}
          </h3>
          <p className="text-xs text-[#87968B] font-sans">
            Verified tournament player profiles, match innings statistics, and career contributions.
          </p>
        </div>

        {/* Role Filter Tabs */}
        <div
          className="flex flex-wrap items-center gap-1.5 p-1 rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 self-start md:self-auto"
          role="tablist"
          aria-label="Filter squad by playing role"
        >
          <button
            role="tab"
            aria-selected={selectedRole === 'all'}
            onClick={() => setSelectedRole('all')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors min-h-[36px] ${
              selectedRole === 'all'
                ? 'bg-[#B99A5B] text-[#090C0B] font-bold'
                : 'text-[#87968B] hover:text-[#EAE4D8]'
            }`}
          >
            All ({players.length})
          </button>
          <button
            role="tab"
            aria-selected={selectedRole === 'batsman'}
            onClick={() => setSelectedRole('batsman')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors min-h-[36px] ${
              selectedRole === 'batsman'
                ? 'bg-[#B99A5B] text-[#090C0B] font-bold'
                : 'text-[#87968B] hover:text-[#EAE4D8]'
            }`}
          >
            Batsmen
          </button>
          <button
            role="tab"
            aria-selected={selectedRole === 'all-rounder'}
            onClick={() => setSelectedRole('all-rounder')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors min-h-[36px] ${
              selectedRole === 'all-rounder'
                ? 'bg-[#B99A5B] text-[#090C0B] font-bold'
                : 'text-[#87968B] hover:text-[#EAE4D8]'
            }`}
          >
            All-Rounders
          </button>
          <button
            role="tab"
            aria-selected={selectedRole === 'bowler'}
            onClick={() => setSelectedRole('bowler')}
            className={`px-3 py-1.5 rounded text-xs font-mono transition-colors min-h-[36px] ${
              selectedRole === 'bowler'
                ? 'bg-[#B99A5B] text-[#090C0B] font-bold'
                : 'text-[#87968B] hover:text-[#EAE4D8]'
            }`}
          >
            Bowlers
          </button>
          {players.some((p) => p.role === 'wicket-keeper') && (
            <button
              role="tab"
              aria-selected={selectedRole === 'wicket-keeper'}
              onClick={() => setSelectedRole('wicket-keeper')}
              className={`px-3 py-1.5 rounded text-xs font-mono transition-colors min-h-[36px] ${
                selectedRole === 'wicket-keeper'
                  ? 'bg-[#B99A5B] text-[#090C0B] font-bold'
                  : 'text-[#87968B] hover:text-[#EAE4D8]'
              }`}
            >
              Wicket-Keepers
            </button>
          )}
        </div>
      </div>

      {/* Umang Franchise Ownership Context (for Champions in Season 1) */}
      {team.id === 'champions' && isSeason1 && (
        <div className="p-4 rounded-xl bg-[#0E1713] border border-[#B99A5B]/30 flex items-start space-x-3 text-xs font-sans text-[#A69F92] leading-relaxed">
          <Info className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#B99A5B] font-semibold block">
              Champions Franchise Ownership Note
            </span>
            <p>
              Umang&apos;s individual in-game player identity and statistics are not documented in the surviving Season 1 archive. His verified role as Champions franchise owner and tactical architect is preserved here.
            </p>
          </div>
        </div>
      )}

      {/* Squad Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPlayers.map((player) => {
          const isExpanded = expandedPlayerId === player.id;
          const isDharm = player.id === 'dharm';
          const isWinsmoke = player.id === 'winsmoke';
          const isShubhamBat = player.id === 'shubham_bat';
          const isSkyBowler = player.id === 'sky';
          const isJay = player.id === 'jay';

          // Safe data display: if not recorded, display em-dash
          const hasBatting = player.stats.runs !== undefined;
          const hasBowling = player.stats.wickets !== undefined;

          const displayRuns = hasBatting ? player.stats.runs : '—';
          const displayHighestScore = player.stats.highestScore !== undefined ? player.stats.highestScore : '—';
          const displayFifties = player.stats.fifties !== undefined ? player.stats.fifties : '—';
          const displayCenturies = player.stats.centuries !== undefined ? player.stats.centuries : '—';
          const displayWickets = hasBowling ? player.stats.wickets : '—';
          const displayBestBowling = player.stats.bestBowling || (player.stats.wicketsFinal ? `${player.stats.wicketsFinal}/${player.stats.runsConcededFinal}` : '—');

          return (
            <div
              key={player.id}
              className={`rounded-xl bg-[#0E1713] border transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                player.isOwner
                  ? 'border-[#B99A5B]/40 ring-1 ring-[#B99A5B]/20'
                  : 'border-[#EAE4D8]/10 hover:border-[#EAE4D8]/25'
              }`}
            >
              {/* Card Masthead */}
              <div className="p-4 sm:p-5 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-1.5 flex-wrap gap-y-1">
                      <h4 className="font-display font-bold text-lg sm:text-xl text-[#EAE4D8]">
                        {player.name}
                      </h4>
                      {player.canonicalName !== player.name && (
                        <span className="text-[10px] font-mono text-[#87968B]">
                          ({player.canonicalName})
                        </span>
                      )}
                    </div>
                    <span className="inline-block text-[11px] font-mono text-[#B99A5B] font-semibold uppercase tracking-wider">
                      {formatRoleLabel(player.role)}
                    </span>
                  </div>

                  {/* Badges: Captain & Owner */}
                  <div className="flex items-center gap-1.5 shrink-0">
                    {player.isCaptain && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                        Captain
                      </span>
                    )}
                    {player.isOwner && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-[#B99A5B]/20 text-[#B99A5B] border border-[#B99A5B]/40 uppercase">
                        Cousin Owner
                      </span>
                    )}
                  </div>
                </div>

                {/* Identity Clarification Notes */}
                {isSeason1 ? (
                  <>
                    {isShubhamBat && (
                      <p className="text-[11px] font-sans text-cyan-300/90 bg-cyan-950/20 p-2 rounded border border-cyan-800/30">
                        Franchise owner and on-field team captain for Skyshot • 134 runs, 1 fifty.
                      </p>
                    )}
                    {isSkyBowler && (
                      <p className="text-[11px] font-sans text-purple-300/90 bg-purple-950/20 p-2 rounded border border-purple-800/30">
                        Skyshot strike bowler &amp; Purple Cap winner (12 wickets across 8 matches).
                      </p>
                    )}
                    {isJay && (
                      <p className="text-[11px] font-sans text-slate-300 bg-slate-900/40 p-2 rounded border border-slate-700/40">
                        Knights owner &amp; team captain • Tournament record: 146 runs in a single innings vs Skyshot.
                      </p>
                    )}
                    {isDharm && (
                      <p className="text-[11px] font-sans text-emerald-300/90 bg-emerald-950/20 p-2 rounded border border-emerald-800/30">
                        Authors champion bowler: 5 verified tournament wickets (4 league + 1 Grand Final).
                      </p>
                    )}
                  </>
                ) : (
                  <>
                    {isShubhamBat && (
                      <p className="text-[11px] font-sans text-cyan-300/90 bg-cyan-950/20 p-2 rounded border border-cyan-800/30">
                        Franchise owner and on-field team captain for Skyshot • 304 runs, 1 century • Season 2 Champion.
                      </p>
                    )}
                    {isJay && (
                      <p className="text-[11px] font-sans text-slate-300 bg-slate-900/40 p-2 rounded border border-slate-700/40">
                        Knights owner &amp; team captain • 322 runs, 4 fifties • Grand Finalist.
                      </p>
                    )}
                    {isDharm && (
                      <p className="text-[11px] font-sans text-emerald-300/90 bg-emerald-950/20 p-2 rounded border border-emerald-800/30">
                        Transferred to Knights for Season 2 • 10 wickets (T-3rd Purple Cap).
                      </p>
                    )}
                  </>
                )}

                {/* Archival Roster / Anomaly Notes */}
                {player.stats.anomalyNote && (
                  <div className="text-[10px] font-sans text-[#A69F92] bg-[#14201A] p-2 rounded border border-[#EAE4D8]/10 leading-relaxed">
                    <strong className="text-[#B99A5B] font-mono uppercase block">Archival Note:</strong>
                    {player.stats.anomalyNote}
                  </div>
                )}

                {/* Primary Stats Grid */}
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EAE4D8]/10 text-xs font-mono">
                  {/* Batting Box */}
                  <div className="p-2.5 rounded-lg bg-[#14201A] space-y-1">
                    <span className="text-[10px] uppercase text-[#87968B] block font-semibold">
                      Batting
                    </span>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[#87968B]">Runs:</span>
                      <strong className="text-[#EAE4D8] text-sm">{displayRuns}</strong>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="text-[#87968B]">High:</span>
                      <span className="text-[#A69F92]">{displayHighestScore}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="text-[#87968B]">50s / 100s:</span>
                      <span className="text-[#A69F92]">
                        {displayFifties !== '—' ? `${displayFifties} / ${displayCenturies}` : '—'}
                      </span>
                    </div>
                  </div>

                  {/* Bowling Box */}
                  <div className="p-2.5 rounded-lg bg-[#14201A] space-y-1">
                    <span className="text-[10px] uppercase text-[#87968B] block font-semibold">
                      Bowling
                    </span>
                    <div className="flex justify-between items-baseline">
                      <span className="text-[#87968B]">Wickets:</span>
                      <strong className="text-emerald-400 text-sm">{displayWickets}</strong>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="text-[#87968B]">Best:</span>
                      <span className="text-[#A69F92]">{displayBestBowling}</span>
                    </div>
                    <div className="flex justify-between items-baseline text-[11px]">
                      <span className="text-[#87968B]">Spells:</span>
                      <span className="text-[#A69F92]">
                        {player.stats.inningsWickets ? `${player.stats.inningsWickets.length} match${player.stats.inningsWickets.length > 1 ? 'es' : ''}` : '—'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Winsmoke Special Accounting Disclosure */}
                {isWinsmoke && (
                  <div className="text-[10px] font-sans text-[#A69F92] bg-[#14201A] p-2 rounded border border-[#EAE4D8]/10 leading-relaxed">
                    <strong className="text-[#B99A5B] font-mono uppercase block">Historical Reconstruction Notice:</strong>
                    Official tournament accounting reflects a 13-run reconstruction for unrecorded Match 1 data (reconciled total: 119 runs).
                  </div>
                )}
              </div>

              {/* Innings Breakdown Expandable Footer */}
              {(player.stats.inningsRuns || player.stats.inningsWickets) && (
                <div className="border-t border-[#EAE4D8]/10 bg-[#0B1512]">
                  <button
                    onClick={() => toggleExpand(player.id)}
                    aria-expanded={isExpanded}
                    className="w-full py-2.5 px-4 flex items-center justify-between text-xs font-mono text-[#87968B] hover:text-[#EAE4D8] transition-colors"
                  >
                    <span>Innings-by-Innings Breakdown</span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5 text-[#B99A5B]" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5 text-[#87968B]" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="p-3 border-t border-[#EAE4D8]/5 space-y-2 text-xs font-mono bg-[#090C0B]/60">
                      {player.stats.inningsRuns && (
                        <div>
                          <span className="text-[10px] text-[#87968B] uppercase block mb-1">
                            Batting Innings Runs:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {player.stats.inningsRuns.map((score, idx) => (
                              <span
                                key={idx}
                                className={`px-1.5 py-0.5 rounded text-[11px] ${
                                  score >= 100
                                    ? 'bg-[#B99A5B]/30 text-[#B99A5B] font-bold border border-[#B99A5B]/50'
                                    : score >= 50
                                    ? 'bg-emerald-500/20 text-emerald-300 font-semibold'
                                    : 'bg-[#14201A] text-[#A69F92]'
                                }`}
                              >
                                {score}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {player.stats.inningsWickets && (
                        <div>
                          <span className="text-[10px] text-[#87968B] uppercase block mb-1">
                            Bowling Match Wickets:
                          </span>
                          <div className="flex flex-wrap gap-1">
                            {player.stats.inningsWickets.map((wkts, idx) => (
                              <span
                                key={idx}
                                className={`px-1.5 py-0.5 rounded text-[11px] ${
                                  wkts >= 4
                                    ? 'bg-emerald-500/30 text-emerald-300 font-bold border border-emerald-500/50'
                                    : wkts > 0
                                    ? 'bg-[#14201A] text-emerald-400 font-semibold'
                                    : 'bg-[#14201A] text-[#87968B]'
                                }`}
                              >
                                {wkts}w
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {player.stats.ballsFacedFinal && (
                        <div className="pt-1 text-[11px] text-[#87968B]">
                          <span>Championship Final: </span>
                          <strong className="text-[#EAE4D8]">
                            {player.stats.highestScore} off {player.stats.ballsFacedFinal} balls
                          </strong>
                        </div>
                      )}

                      {player.stats.oversFinal && (
                        <div className="pt-1 text-[11px] text-[#87968B]">
                          <span>Championship Final Bowling: </span>
                          <strong className="text-[#EAE4D8]">
                            {player.stats.wicketsFinal || 0}/{player.stats.runsConcededFinal} ({player.stats.oversFinal} ov)
                          </strong>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
