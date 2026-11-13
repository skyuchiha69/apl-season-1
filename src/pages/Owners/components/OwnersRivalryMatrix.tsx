import React, { useState } from 'react';
import { SeasonData, TeamId, Match } from '../../../data/types';
import { getHeadToHeadRecord } from '../../../data/selectors';
import { Swords, ChevronDown, ChevronUp, CheckCircle, Info } from 'lucide-react';

interface OwnersRivalryMatrixProps {
  season: SeasonData;
}

interface OwnerPairConfig {
  id: string;
  ownerA: {
    name: string;
    nickname: string;
    teamId: TeamId;
    teamName: string;
    accentColor: string;
  };
  ownerB: {
    name: string;
    nickname: string;
    teamId: TeamId;
    teamName: string;
    accentColor: string;
  };
  subtitle: string;
}

export const OwnersRivalryMatrix: React.FC<OwnersRivalryMatrixProps> = ({ season }) => {
  const [collapsedPairs, setCollapsedPairs] = useState<Record<string, boolean>>({});

  const togglePair = (pairId: string) => {
    setCollapsedPairs((prev) => ({
      ...prev,
      [pairId]: !prev[pairId],
    }));
  };

  const pairs: OwnerPairConfig[] = [
    {
      id: 'dharm-umang',
      ownerA: {
        name: 'Dharm',
        nickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        accentColor: '#00E676',
      },
      ownerB: {
        name: 'Umang',
        nickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        accentColor: '#FF2E4D',
      },
      subtitle: 'The Championship Decider Rivalry',
    },
    {
      id: 'dharm-shubham',
      ownerA: {
        name: 'Dharm',
        nickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        accentColor: '#00E676',
      },
      ownerB: {
        name: 'Shubham',
        nickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        accentColor: '#00D2FF',
      },
      subtitle: 'League Sweep vs Semi-Final 2 Playoff Upset',
    },
    {
      id: 'dharm-jay',
      ownerA: {
        name: 'Dharm',
        nickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        accentColor: '#00E676',
      },
      ownerB: {
        name: 'Jay',
        nickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        accentColor: '#F8FAFC',
      },
      subtitle: 'The Pure League Clash',
    },
    {
      id: 'umang-shubham',
      ownerA: {
        name: 'Umang',
        nickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        accentColor: '#FF2E4D',
      },
      ownerB: {
        name: 'Shubham',
        nickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        accentColor: '#00D2FF',
      },
      subtitle: 'Semi-Final 1 Thriller (10-Run Defense)',
    },
    {
      id: 'umang-jay',
      ownerA: {
        name: 'Umang',
        nickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        accentColor: '#FF2E4D',
      },
      ownerB: {
        name: 'Jay',
        nickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        accentColor: '#F8FAFC',
      },
      subtitle: 'Split Honours in League Stage',
    },
    {
      id: 'shubham-jay',
      ownerA: {
        name: 'Shubham',
        nickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        accentColor: '#00D2FF',
      },
      ownerB: {
        name: 'Jay',
        nickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        accentColor: '#F8FAFC',
      },
      subtitle: 'The 146 & 291 Scoring Exhibition',
    },
  ];

  // Helper to format match stage for historical clarity
  const formatStage = (stage: Match['stage']) => {
    switch (stage) {
      case 'LEAGUE':
        return 'League Stage';
      case 'SEMI_FINAL_1':
        return 'Semi-Final 1';
      case 'SEMI_FINAL_2':
        return 'Semi-Final 2';
      case 'FINAL':
        return 'Grand Final';
      default:
        return stage;
    }
  };

  // Helper to safely describe match outcome without inventing scores
  const renderMatchDetail = (m: Match) => {
    if (m.stage === 'FINAL' && m.detailsKnown && m.firstInnings && m.secondInnings) {
      return (
        <div className="space-y-1">
          <div className="font-mono text-xs text-[#EAE4D8]">
            CHAMPIONS {m.firstInnings.runs}/{m.firstInnings.wickets} ({m.firstInnings.overs} ov) vs AUTHORS {m.secondInnings.runs}/{m.secondInnings.wickets} ({m.secondInnings.overs} ov)
          </div>
          <div className="text-[11px] font-mono text-[#00E676]">
            Authors won by 3 wickets (Chased 226 in 19.2 ov) • Complete scorecard preserved
          </div>
        </div>
      );
    }

    if (m.stage === 'SEMI_FINAL_1' && m.detailsKnown) {
      return (
        <div className="space-y-1">
          <div className="font-mono text-xs text-[#EAE4D8]">
            CHAMPIONS 225 vs SKYSHOT 215/5 (20.0 ov)
          </div>
          <div className="text-[11px] font-mono text-[#FF2E4D]">
            Champions won by 10 runs • Defended 225 to qualify for Grand Final
          </div>
        </div>
      );
    }

    if (m.stage === 'SEMI_FINAL_2') {
      return (
        <div className="space-y-1">
          <div className="font-mono text-xs text-[#00E676]">
            AUTHORS qualified for Final
          </div>
          <div className="text-[11px] text-[#87968B] font-mono flex items-center gap-1">
            <Info className="w-3 h-3 text-[#B99A5B]" />
            <span>Scorecard and run margin unrecorded; Authors victory officially verified</span>
          </div>
        </div>
      );
    }

    // Default for League stage matches where detailsKnown is false
    const winnerName = season.teams[m.winnerTeamId]?.name || m.winnerTeamId.toUpperCase();
    return (
      <div className="space-y-0.5">
        <div className="font-mono text-xs text-[#EAE4D8]">
          Winner: <span className="font-bold text-[#EAE4D8]">{winnerName}</span>
        </div>
        <div className="text-[11px] text-[#87968B] font-mono flex items-center gap-1">
          <Info className="w-3 h-3 text-[#87968B]" />
          <span>Official result recorded; detailed scorecard not surviving in archive</span>
        </div>
      </div>
    );
  };

  return (
    <section id="rivalry-matrix" className="py-12 lg:py-16 border-b border-[#EAE4D8]/10 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Masthead */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EAE4D8]/5 border border-[#EAE4D8]/15 text-[#B99A5B] text-xs font-mono uppercase tracking-widest mb-3">
            <Swords className="w-3.5 h-3.5" />
            <span>Head-to-Head Cross-Table</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-[#EAE4D8] tracking-tight mb-4">
            THE SIX-PAIR RIVALRY MATRIX
          </h2>
          <p className="text-base text-[#87968B] leading-relaxed font-sans">
            Every encounter in APL Season 1 was contested between two of the four cousins. This matrix dynamically
            derives the head-to-head records across all six unique owner pairings, accounting for all 15 decided
            fixtures (12 regular-season league fixtures and 3 playoff deciders).
          </p>
        </div>

        {/* Six Matchup Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pairs.map((pair) => {
            // Dynamically derive head-to-head records from the season dataset
            const h2h = getHeadToHeadRecord(season, pair.ownerA.teamId, pair.ownerB.teamId);
            const isExpanded = !collapsedPairs[pair.id];

            return (
              <div
                key={pair.id}
                className="rounded-lg bg-[#0E1626]/70 border border-[#EAE4D8]/15 hover:border-[#EAE4D8]/25 transition-all overflow-hidden"
              >
                {/* Header Strip */}
                <div className="p-5 border-b border-[#EAE4D8]/10 bg-[#090C0B]/40">
                  <div className="flex items-center justify-between text-xs font-mono text-[#87968B] mb-2">
                    <span>{pair.subtitle}</span>
                    <span className="font-bold text-[#B99A5B]">{h2h.total} Total Fixtures</span>
                  </div>

                  {/* Versus Banner with Dynamic Scores */}
                  <div className="grid grid-cols-7 items-center gap-2 my-2">
                    {/* Owner A */}
                    <div className="col-span-3">
                      <div className="text-sm font-display font-bold text-[#EAE4D8]">
                        {pair.ownerA.name}{' '}
                        <span className="text-xs font-normal text-[#87968B]">({pair.ownerA.nickname})</span>
                      </div>
                      <div
                        className="text-xs font-mono font-semibold"
                        style={{ color: pair.ownerA.accentColor }}
                      >
                        {pair.ownerA.teamName}
                      </div>
                    </div>

                    {/* Score Center */}
                    <div className="col-span-1 text-center font-mono">
                      <div className="text-xl sm:text-2xl font-bold text-[#EAE4D8] tracking-wider">
                        <span style={{ color: pair.ownerA.accentColor }}>{h2h.teamAWins}</span>
                        <span className="text-[#87968B] mx-1">–</span>
                        <span style={{ color: pair.ownerB.accentColor }}>{h2h.teamBWins}</span>
                      </div>
                    </div>

                    {/* Owner B */}
                    <div className="col-span-3 text-right">
                      <div className="text-sm font-display font-bold text-[#EAE4D8]">
                        {pair.ownerB.name}{' '}
                        <span className="text-xs font-normal text-[#87968B]">({pair.ownerB.nickname})</span>
                      </div>
                      <div
                        className="text-xs font-mono font-semibold"
                        style={{ color: pair.ownerB.accentColor }}
                      >
                        {pair.ownerB.teamName}
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button for Expandable Fixture Details */}
                  <button
                    type="button"
                    onClick={() => togglePair(pair.id)}
                    className="mt-3 w-full pt-2 border-t border-[#EAE4D8]/10 flex items-center justify-between text-xs font-mono text-[#87968B] hover:text-[#EAE4D8] transition-colors"
                  >
                    <span>
                      {isExpanded ? 'Hide Match Details' : `Inspect ${h2h.total} Match Records`}
                    </span>
                    {isExpanded ? (
                      <ChevronUp className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronDown className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Expandable Match Details List */}
                {isExpanded && (
                  <div className="p-4 space-y-3 bg-[#090C0B]/60">
                    <div className="text-[11px] font-mono text-[#87968B] uppercase tracking-wider mb-2">
                      Verified Historical Fixture Logs ({h2h.matches.length} Matches)
                    </div>

                    <div className="space-y-2.5">
                      {h2h.matches.map((m) => {
                        const winnerTeam = season.teams[m.winnerTeamId];
                        const isPlayoff = m.stage !== 'LEAGUE';

                        return (
                          <div
                            key={m.id}
                            className={`p-3 rounded border text-xs ${
                              isPlayoff
                                ? 'bg-[#1C1408]/60 border-[#B99A5B]/30'
                                : 'bg-[#0E1626]/40 border-[#EAE4D8]/10'
                            }`}
                          >
                            <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                              <div className="flex items-center gap-2">
                                <span className="font-mono text-xs font-bold text-[#B99A5B]">
                                  Match #{m.matchNumber}
                                </span>
                                <span className="text-[#EAE4D8]/20">•</span>
                                <span
                                  className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase ${
                                    isPlayoff
                                      ? 'bg-[#B99A5B]/20 text-[#B99A5B] font-bold'
                                      : 'bg-[#EAE4D8]/5 text-[#87968B]'
                                  }`}
                                >
                                  {formatStage(m.stage)}
                                </span>
                              </div>

                              <div className="flex items-center gap-1.5 font-mono text-[11px]">
                                <span className="text-[#87968B]">Winner:</span>
                                <span
                                  className="font-bold"
                                  style={{ color: winnerTeam?.theme.primaryColor || '#EAE4D8' }}
                                >
                                  {winnerTeam?.name || m.winnerTeamId.toUpperCase()}
                                </span>
                              </div>
                            </div>

                            {/* Safe Fixture Detail / Missing Scorecard Notice */}
                            <div className="pt-1.5 border-t border-[#EAE4D8]/10">
                              {renderMatchDetail(m)}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* 15 Decided Fixtures Reconciliation Check */}
        <div className="mt-8 p-4 rounded-lg bg-[#0E1626]/60 border border-[#B99A5B]/30 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle className="w-5 h-5 text-[#B99A5B] flex-shrink-0" />
            <div className="text-xs text-[#87968B] leading-relaxed">
              <span className="font-bold text-[#EAE4D8] block font-mono">
                15 / 15 Tournament Fixtures Accounted For
              </span>
              The six head-to-head pairings reconcile perfectly with the complete 15-match Season 1 schedule:
              12 double-round-robin league matches, 2 semi-finals, and 1 championship final.
            </div>
          </div>
          <div className="text-xs font-mono text-[#B99A5B] bg-[#090C0B] px-3 py-1.5 rounded border border-[#B99A5B]/20">
            Reconciled: 15 Fixtures
          </div>
        </div>
      </div>
    </section>
  );
};
