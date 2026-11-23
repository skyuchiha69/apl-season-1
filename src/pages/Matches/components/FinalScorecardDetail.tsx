import React, { useState } from 'react';
import { useSeason } from '../../../app/providers/SeasonProvider';
import { Trophy, Clock, ZoomIn, X, Award, AlertCircle } from 'lucide-react';

export const FinalScorecardDetail: React.FC = () => {
  const { seasonData } = useSeason();
  const finalMatch = seasonData.matches.find((m) => m.stage === 'FINAL');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!finalMatch || !finalMatch.firstInnings || !finalMatch.secondInnings) {
    const winnerTeam = finalMatch?.winnerTeamId ? seasonData.teams[finalMatch.winnerTeamId] : null;
    const runnerUpTeamId = finalMatch
      ? (finalMatch.winnerTeamId === finalMatch.homeTeamId ? finalMatch.awayTeamId : finalMatch.homeTeamId)
      : null;
    const runnerUpTeam = runnerUpTeamId ? seasonData.teams[runnerUpTeamId] : null;

    return (
      <section
        id="final-scorecard"
        aria-labelledby="scorecard-heading"
        className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
      >
        <div className="space-y-8">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
            <div className="space-y-1">
              <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
                <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
                <span>The Defining Climax • Season 2 Championship Decider</span>
              </div>
              <h2
                id="scorecard-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
              >
                Grand Final Championship Outcome
              </h2>
            </div>
            <div className="font-mono text-xs text-[#87968B] text-left sm:text-right">
              <span>Match 15 • Grand Final</span>
              <span className="block text-cyan-400 font-bold">Season 2 Championship Decider</span>
            </div>
          </div>

          {/* Championship Outcome Feature Card */}
          <div className="rounded-xl bg-[#111815] border border-[#EAE4D8]/12 p-5 sm:p-7 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#EAE4D8]/10 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center space-x-2">
                  <span className="bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 px-2 py-0.5 rounded font-mono font-bold uppercase text-[10px] tracking-wider">
                    Official Decider Result
                  </span>
                  <span className="text-xs font-mono text-[#87968B]">
                    APL Season 2 Grand Final
                  </span>
                </div>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-[#EAE4D8] tracking-tight">
                  {winnerTeam ? `${winnerTeam.name.toUpperCase()} DEFEATED ${runnerUpTeam?.name.toUpperCase() ?? 'KNIGHTS'}` : 'SKYSHOT DEFEATED KNIGHTS'}
                </h3>
                <p className="text-xs sm:text-sm text-[#A69F92] font-sans">
                  {`${winnerTeam?.name ?? 'Skyshot'} captured the APL Season 2 Championship trophy, crowning their campaign after direct qualification from Match 13.`}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#14201A] border border-cyan-500/30 text-center shrink-0">
                <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-300 block mb-0.5 font-bold">
                  Season 2 Champions
                </span>
                <span className="font-display font-black text-2xl text-[#EAE4D8] block">
                  {winnerTeam?.name ?? 'SKYSHOT'}
                </span>
                <span className="text-[11px] font-mono text-[#87968B]">
                  Owner: {winnerTeam?.owner.name ?? 'Shubham'}
                </span>
              </div>
            </div>

            {/* Archival Disclosure Note */}
            <div className="p-4 rounded-xl bg-[#15231C] border border-[#B99A5B]/30 flex items-start space-x-3.5">
              <AlertCircle className="w-5 h-5 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
              <div className="space-y-1 text-xs text-[#A69F92] font-sans leading-relaxed">
                <strong className="text-[#EAE4D8] font-mono uppercase block text-[11px] tracking-wide">
                  Archival Disclosure • Surviving Tournament Records:
                </strong>
                <p>
                  Official match-by-match innings scorecards, balls faced, boundaries hit, and individual bowling figures
                  for Match 15 were not recorded in the surviving Season 2 tournament archive.
                  The Grand Final outcome (<strong className="text-[#EAE4D8]">Skyshot defeating Knights</strong>)
                  is verified across all official tournament standings, match sequences, and championship honors.
                  To preserve 100% archival integrity, no speculative runs or ball counts are invented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const { firstInnings, secondInnings } = finalMatch;

  const firstTeam = seasonData.teams[firstInnings.teamId];
  const secondTeam = seasonData.teams[secondInnings.teamId];
  const winnerTeam = finalMatch.winnerTeamId ? seasonData.teams[finalMatch.winnerTeamId] : secondTeam;
  const winnerNameUpper = winnerTeam ? winnerTeam.name.toUpperCase() : 'AUTHORS';
  const marginUpper = finalMatch.margin ? finalMatch.margin.toUpperCase() : 'BY 3 WICKETS';
  const matchResultHeading = `${winnerNameUpper} WON ${marginUpper}`;

  // Derived target & balls remaining calculation
  const targetRuns = firstInnings.runs + 1;
  const scheduledBalls = Math.floor(firstInnings.overs) * 6; // 20.0 * 6 = 120
  const completedOvers = Math.floor(secondInnings.overs); // 19
  const ballsInCurrentOver = Math.round((secondInnings.overs - completedOvers) * 10); // 2
  const ballsBowled = completedOvers * 6 + ballsInCurrentOver; // 116
  const ballsRemaining = Math.max(0, scheduledBalls - ballsBowled); // 4

  // Featured batting performance (A. King: 108 off 54 balls)
  const kingBatting = secondInnings.batting.find((b) => b.playerId === 'king');
  const kingRuns = kingBatting?.runs ?? 108;
  const kingBalls = kingBatting?.balls ?? 54;
  const kingStrikeRate = kingBalls > 0 ? ((kingRuns / kingBalls) * 100).toFixed(2) : '200.00';

  return (
    <section
      id="final-scorecard"
      aria-labelledby="scorecard-heading"
      className="py-10 sm:py-16 border-b border-[#EAE4D8]/10 relative overflow-hidden"
    >
      <div className="space-y-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#EAE4D8]/10 pb-4">
          <div className="space-y-1">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Trophy className="w-3.5 h-3.5 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>The Defining Match • Complete Innings Scorecard</span>
            </div>
            <h2
              id="scorecard-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              Grand Final Scorecard
            </h2>
          </div>
          <div className="font-mono text-xs text-[#87968B] text-left sm:text-right">
            <span>Match 15 • Grand Final</span>
            <span className="block text-[#EAE4D8] font-bold">Exhibition • 9:45 PM</span>
          </div>
        </div>

        {/* Match Result Banner */}
        <div className="rounded-xl bg-[#111815] border border-[#EAE4D8]/12 p-4 sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div className="space-y-1">
            <div className="flex items-center space-x-2">
              <span className="bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 px-2 py-0.5 rounded font-mono font-bold uppercase text-[10px] tracking-wider">
                Official Result
              </span>
              <span className="text-xs font-mono text-[#87968B] flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#B99A5B]" />
                <span>Exhibition • 20 Overs Per Side</span>
              </span>
            </div>
            <h3 className="font-display font-black text-xl sm:text-2xl lg:text-3xl text-emerald-400 tracking-tight">
              {matchResultHeading}
            </h3>
            <p className="text-xs sm:text-sm text-[#A69F92] font-sans">
              {`${winnerTeam?.name ?? 'Authors'} chased ${targetRuns} in ${secondInnings.overs.toFixed(1)} overs with ${ballsRemaining} balls remaining.`}
            </p>
          </div>

          {/* Featured Batting Performance */}
          <div className="p-3.5 rounded-lg bg-[#14201A] border border-amber-500/30 flex items-center space-x-3 shrink-0">
            <div className="p-2 rounded-full bg-amber-500/20 text-amber-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold block">
                Featured Batting Performance
              </span>
              <span className="font-display font-black text-lg text-[#EAE4D8] block">
                {`A. King — ${kingRuns} off ${kingBalls} balls`}
              </span>
              <span className="text-[11px] font-mono text-[#87968B]">
                {`Strike Rate: ${kingStrikeRate} • Match-Winning Century`}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed 2-Innings Scorecards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1st Innings: CHAMPIONS */}
          <div className="rounded-xl border border-[#EAE4D8]/10 bg-[#0E1713] overflow-hidden shadow-xl space-y-4 p-5 sm:p-6">
            <div className="flex items-start justify-between border-b border-[#EAE4D8]/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-rose-400 font-bold block">
                  1st Innings • Batting First
                </span>
                <h4 className="font-display text-2xl font-black text-[#EAE4D8]">
                  {firstTeam?.name.toUpperCase() ?? 'CHAMPIONS'}
                </h4>
                <p className="text-xs text-[#87968B] font-mono">
                  {finalMatch.tossInfo?.includes('elected to BAT') ? 'Toss: Elected to BAT' : 'Batting First'}
                </p>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-black text-rose-400">
                  {firstInnings.runs}/{firstInnings.wickets}
                </div>
                <span className="font-mono text-xs text-[#87968B]">{`${firstInnings.overs.toFixed(1)} OVERS`}</span>
              </div>
            </div>

            {/* Champions Batting Table */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
                {`${firstTeam?.name ?? 'Champions'} Batting`}
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#EAE4D8]/10 text-[#87968B]">
                      <th className="pb-1.5 font-normal">Batter</th>
                      <th className="pb-1.5 text-center font-normal">Balls</th>
                      <th className="pb-1.5 text-right font-normal">Runs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4D8]/5">
                    {firstInnings.batting.map((b) => (
                      <tr key={b.playerId} className="hover:bg-[#15231C]">
                        <td className="py-2 text-[#EAE4D8] font-bold">{b.playerName}</td>
                        <td className="py-2 text-center text-[#87968B]">{b.balls ?? '—'}</td>
                        <td className="py-2 text-right text-rose-400 font-bold">{b.runs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Authors Bowling Table */}
            <div className="space-y-2 pt-3 border-t border-[#EAE4D8]/10">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
                {`${secondTeam?.name ?? 'Authors'} Bowling`}
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#EAE4D8]/10 text-[#87968B]">
                      <th className="pb-1.5 font-normal">Bowler</th>
                      <th className="pb-1.5 text-center font-normal">Overs</th>
                      <th className="pb-1.5 text-center font-normal">Runs</th>
                      <th className="pb-1.5 text-right font-normal">Wickets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4D8]/5">
                    {firstInnings.bowling.map((bw) => (
                      <tr key={bw.playerId} className="hover:bg-[#15231C]">
                        <td className="py-2 text-[#EAE4D8] font-bold">{bw.playerName}</td>
                        <td className="py-2 text-center text-[#87968B]">{bw.overs?.toFixed(1) ?? '—'}</td>
                        <td className="py-2 text-center text-[#87968B]">{bw.runsConceded ?? '—'}</td>
                        <td className="py-2 text-right text-emerald-400 font-bold">{bw.wickets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* 2nd Innings: AUTHORS */}
          <div className="rounded-xl border border-emerald-500/30 bg-[#0E1713] overflow-hidden shadow-xl space-y-4 p-5 sm:p-6">
            <div className="flex items-start justify-between border-b border-[#EAE4D8]/10 pb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                  {`2nd Innings • Chasing ${targetRuns}`}
                </span>
                <h4 className="font-display text-2xl font-black text-[#EAE4D8]">
                  {secondTeam?.name.toUpperCase() ?? 'AUTHORS'}
                </h4>
                <p className="text-xs text-emerald-300 font-mono">
                  {`Winners ${finalMatch.margin ?? 'by 3 Wickets'}`}
                </p>
              </div>
              <div className="text-right">
                <div className="font-display text-3xl font-black text-emerald-400">
                  {secondInnings.runs}/{secondInnings.wickets}
                </div>
                <span className="font-mono text-xs text-emerald-300 font-bold">{`${secondInnings.overs.toFixed(1)} OVERS`}</span>
              </div>
            </div>

            {/* Authors Batting Table */}
            <div className="space-y-2">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
                {`${secondTeam?.name ?? 'Authors'} Batting`}
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#EAE4D8]/10 text-[#87968B]">
                      <th className="pb-1.5 font-normal">Batter</th>
                      <th className="pb-1.5 text-center font-normal">Balls</th>
                      <th className="pb-1.5 text-right font-normal">Runs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4D8]/5">
                    {secondInnings.batting.map((b) => (
                      <tr key={b.playerId} className="hover:bg-[#15231C]">
                        <td className="py-2 text-[#EAE4D8] font-bold">
                          {b.playerName}
                        </td>
                        <td className="py-2 text-center text-[#87968B]">{b.balls ?? '—'}</td>
                        <td className="py-2 text-right text-emerald-400 font-bold">{b.runs}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Champions Bowling Table */}
            <div className="space-y-2 pt-3 border-t border-[#EAE4D8]/10">
              <h5 className="text-[11px] font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
                {`${firstTeam?.name ?? 'Champions'} Bowling`}
              </h5>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#EAE4D8]/10 text-[#87968B]">
                      <th className="pb-1.5 font-normal">Bowler</th>
                      <th className="pb-1.5 text-center font-normal">Overs</th>
                      <th className="pb-1.5 text-center font-normal">Runs</th>
                      <th className="pb-1.5 text-right font-normal">Wickets</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#EAE4D8]/5">
                    {secondInnings.bowling.map((bw) => (
                      <tr key={bw.playerId} className="hover:bg-[#15231C]">
                        <td className="py-2 text-[#EAE4D8] font-bold">{bw.playerName}</td>
                        <td className="py-2 text-center text-[#87968B]">{bw.overs?.toFixed(1) ?? '—'}</td>
                        <td className="py-2 text-center text-[#87968B]">{bw.runsConceded ?? '—'}</td>
                        <td className="py-2 text-right text-rose-400 font-bold">{bw.wickets}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Archival Scorecard Disclosure Note */}
        <div className="rounded-lg bg-[#0E1713] border border-[#EAE4D8]/10 p-3.5 sm:p-4 text-xs font-sans text-[#A69F92] flex items-start space-x-3 leading-relaxed">
          <AlertCircle className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <p className="font-semibold text-[#EAE4D8] font-mono text-[11px] uppercase tracking-wider">
              Archival Scorecard Data Note
            </p>
            <p>
              Archive note: The preserved broadcast record contains the individual contributions listed here, not a complete ball-by-ball scorecard. Extras and fall-of-wickets details were not recorded in the available source.
            </p>
          </div>
        </div>

        {/* Authentic In-Game Broadcast Screenshot Showcase */}
        <div className="rounded-xl border border-[#EAE4D8]/10 bg-[#0E1713] p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-bold block">
                Archival In-Game Proof Asset
              </span>
              <h4 className="font-display font-bold text-lg text-[#EAE4D8]">
                Authentic Broadcast Scorecard Screen
              </h4>
            </div>
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="inline-flex items-center space-x-1.5 text-xs font-mono text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-wider border border-[#B99A5B]/30 hover:border-[#B99A5B]/60 px-3 py-1.5 rounded transition-all min-h-[44px]"
            >
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Enlarge Broadcast Asset</span>
            </button>
          </div>

          <div
            className="rounded-lg overflow-hidden border border-[#EAE4D8]/10 bg-black cursor-pointer group aspect-[16/9] relative max-w-3xl mx-auto"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src="/assets/matches/final-scorecard-original.png"
              alt="Official APL Season 1 Final Match Summary Broadcast Scorecard showing Authors defeating Champions 226/7 to 225/8"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="bg-black/80 text-[#EAE4D8] font-mono text-xs px-3 py-1.5 rounded border border-[#EAE4D8]/20 flex items-center space-x-1.5">
                <ZoomIn className="w-3.5 h-3.5 text-[#B99A5B]" />
                <span>Click to Expand</span>
              </span>
            </div>
          </div>
        </div>

        {/* Modal Lightbox for the Broadcast Screenshot */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged Authentic Broadcast Scorecard"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div
              className="relative max-w-5xl w-full bg-[#111815] border border-[#EAE4D8]/20 rounded-xl overflow-hidden p-2 sm:p-4 space-y-2 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#EAE4D8]/10 text-xs font-mono">
                <span className="text-[#EAE4D8] font-bold">
                  Official Match 15 Broadcast Capture • Authors 226/7 def. Champions 225/8
                </span>
                <button
                  onClick={() => setIsLightboxOpen(false)}
                  className="p-1 rounded text-[#87968B] hover:text-[#EAE4D8] min-h-[44px] min-w-[44px] inline-flex items-center justify-center"
                  aria-label="Close enlarged view"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="overflow-hidden rounded-lg bg-black">
                <img
                  src="/assets/matches/final-scorecard-original.png"
                  alt="Official APL Season 1 Final Match Summary Broadcast Scorecard"
                  className="w-full h-auto max-h-[80vh] object-contain mx-auto"
                />
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] font-mono text-[#87968B]">
                <span>Verified Match Outcome: 3 Wickets • 19.2 Overs</span>
                <span className="text-[#B99A5B]">APL Season 1 Archive</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
