import React from 'react';
import { Link } from 'react-router-dom';
import { useSeason } from '../../app/providers/SeasonProvider';
import { Container } from '../../components/layout/Container';
import { Shield, Trophy, Award, UserCheck, ArrowRight, AlertCircle, Users } from 'lucide-react';
import { TeamId } from '../../data/types';

export const TeamsPage: React.FC = () => {
  const { seasonData } = useSeason();

  // The 4 franchises in verified tournament order
  const franchiseList: Array<{
    id: TeamId;
    standing: string;
    standingBadge: string;
    playoffBanner: string;
    tagline: string;
    description: string;
  }> = [
    {
      id: 'authors',
      standing: 'T-2nd',
      standingBadge: 'Tied 2nd (6 pts, 3W–3L)',
      playoffBanner: 'Inaugural Champions • Chased 226 in Grand Final',
      tagline: 'The Championship Strategists',
      description: 'Masterminded by Dharm, Authors conquered high-pressure run chases, culminating in the historic 226/7 final victory.',
    },
    {
      id: 'champions',
      standing: 'T-2nd',
      standingBadge: 'Tied 2nd (6 pts, 3W–3L)',
      playoffBanner: 'Grand Finalists • Defended 225 in Semi-Final 1',
      tagline: 'The High-Octane Finalists',
      description: 'Under Umang’s tactical command, Champions produced blistering batting totals, defending 225 in SF1 and scoring 225 in the final.',
    },
    {
      id: 'skyshot',
      standing: '1st',
      standingBadge: '1st Place (8 pts, 4W–2L)',
      playoffBanner: 'Semi-Finalist • Regular Season Leaders',
      tagline: 'The Regular-Season Pace Setters',
      description: 'Commanded by Shubham, Skyshot dominated the 12-round league stage with 4 victories and claimed the Purple Cap with 12 wickets.',
    },
    {
      id: 'knights',
      standing: '4th',
      standingBadge: '4th Place (4 pts, 2W–4L)',
      playoffBanner: 'League Stage • Record Total 291 & Individual 146',
      tagline: 'The Record-Breaking Contenders',
      description: 'Led by Jay, Knights produced the single highest team score (291) and Jay’s historic 146 individual batting masterclass.',
    },
  ];

  return (
    <div className="min-h-screen bg-[#090C0B] text-[#EAE4D8]">
      {/* Masthead Banner */}
      <section className="py-12 sm:py-16 md:py-20 border-b border-[#EAE4D8]/10 relative overflow-hidden bg-[#0B1512]">
        {/* Subtle Archival Glow */}
        <div
          className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-[#B99A5B]/10 blur-[150px] rounded-full pointer-events-none"
          aria-hidden="true"
        />

        <Container>
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center space-x-2 text-xs font-mono tracking-widest text-[#B99A5B] uppercase font-semibold">
              <Shield className="w-4 h-4 text-[#B99A5B]" />
              <span>Franchises Hub • Season 1 Archive</span>
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase font-display tracking-tight text-[#EAE4D8]">
              The Four Franchises.
            </h1>
            <p className="text-sm sm:text-base text-[#A69F92] leading-relaxed font-sans">
              Four distinct club identities forged and contested by four cousins across 15 high-stakes PC matches.
              Explore team rosters, verified player statistics, leadership profiles, and tournament match histories.
            </p>
          </div>

          {/* Standings Comparison Strip */}
          <div className="mt-10 p-4 sm:p-5 rounded-xl bg-[#0E1713] border border-[#EAE4D8]/10 shadow-lg space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE4D8]/10 pb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#B99A5B] font-semibold">
                Official Regular-Season Standings
              </span>
              <span className="text-[11px] font-mono text-[#87968B]">
                12 League Stage Fixtures (Excludes Post-Season Playoffs)
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs font-mono">
              {/* Skyshot */}
              <div className="p-3 rounded-lg bg-[#14201A] border border-cyan-500/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-cyan-400">SKYSHOT</span>
                  <span className="px-1.5 py-0.2 rounded bg-cyan-500/20 text-cyan-300 text-[10px]">1st</span>
                </div>
                <p className="text-[#A69F92] text-[11px]">4 Wins – 2 Losses • 8 Pts</p>
                <p className="text-[#87968B] text-[10px]">Table Toppers</p>
              </div>

              {/* Authors */}
              <div className="p-3 rounded-lg bg-[#14201A] border border-emerald-500/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-emerald-400">AUTHORS</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#B99A5B]/20 text-[#B99A5B] text-[10px]">T-2nd</span>
                </div>
                <p className="text-[#A69F92] text-[11px]">3 Wins – 3 Losses • 6 Pts</p>
                <p className="text-[#87968B] text-[10px]">Tied Second • Champions</p>
              </div>

              {/* Champions */}
              <div className="p-3 rounded-lg bg-[#14201A] border border-rose-500/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-rose-400">CHAMPIONS</span>
                  <span className="px-1.5 py-0.2 rounded bg-[#B99A5B]/20 text-[#B99A5B] text-[10px]">T-2nd</span>
                </div>
                <p className="text-[#A69F92] text-[11px]">3 Wins – 3 Losses • 6 Pts</p>
                <p className="text-[#87968B] text-[10px]">Tied Second • Finalists</p>
              </div>

              {/* Knights */}
              <div className="p-3 rounded-lg bg-[#14201A] border border-slate-500/20 space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-slate-300">KNIGHTS</span>
                  <span className="px-1.5 py-0.2 rounded bg-slate-400/20 text-slate-200 text-[10px]">4th</span>
                </div>
                <p className="text-[#A69F92] text-[11px]">2 Wins – 4 Losses • 4 Pts</p>
                <p className="text-[#87968B] text-[10px]">Record Setters (291)</p>
              </div>
            </div>

            {/* Tie-breaker Footnote */}
            <div className="pt-2 flex items-start space-x-2 text-[11px] font-sans text-[#A69F92] border-t border-[#EAE4D8]/5">
              <AlertCircle className="w-3.5 h-3.5 text-[#B99A5B] shrink-0 mt-0.5" />
              <span>
                Authors and Champions finished tied on 6 points (both 3–3; split 1–1 head-to-head).
                With no official league NRR recorded, both teams share 2nd place (T-2nd).
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Franchises Cards Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <Container className="space-y-8">
          {/* Identity Clarification Callout */}
          <div className="p-4 rounded-xl bg-[#0E1713] border-l-2 border-[#B99A5B] text-xs font-mono text-[#A69F92] flex items-start space-x-3 leading-relaxed">
            <UserCheck className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
            <div>
              <strong className="text-[#EAE4D8] uppercase block mb-0.5">
                Archival Identity Architecture:
              </strong>
              The four cousins (Dharm, Umang, Shubham, Jay) are the real-life franchise owners, tacticians, and tournament competitors.
              On the field, the franchises were led by their actual in-game captains: A. King (Authors), T. Stark (Champions), Shubham (Skyshot), and Jay (Knights).
            </div>
          </div>

          {/* Franchise Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {franchiseList.map((item) => {
              const team = seasonData.teams[item.id];
              const isChampion = item.id === 'authors';
              const isFinalist = item.id === 'champions';
              const isSkyshot = item.id === 'skyshot';
              const primaryColor = team.theme.primaryColor;

              return (
                <div
                  key={item.id}
                  className="rounded-2xl bg-[#0E1713] border border-[#EAE4D8]/10 hover:border-[#EAE4D8]/30 transition-all duration-300 overflow-hidden flex flex-col justify-between group shadow-xl"
                  style={{
                    boxShadow: `0 8px 30px rgba(0, 0, 0, 0.4)`,
                  }}
                >
                  {/* Card Header & Accent Strip */}
                  <div className="p-6 sm:p-8 space-y-5">
                    {/* Top Row: Short Name, Standing, Finish */}
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center space-x-2">
                        <span
                          className="px-2.5 py-0.5 rounded text-xs font-mono font-bold tracking-widest uppercase border"
                          style={{
                            color: primaryColor,
                            backgroundColor: `${primaryColor}15`,
                            borderColor: `${primaryColor}40`,
                          }}
                        >
                          {team.shortName}
                        </span>
                        <span className="text-[11px] font-mono text-[#87968B] uppercase">
                          {item.standingBadge}
                        </span>
                      </div>

                      {isChampion ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#B99A5B]/20 text-[#B99A5B] border border-[#B99A5B]/40 uppercase">
                          <Trophy className="w-3 h-3" />
                          <span>Champions</span>
                        </span>
                      ) : isFinalist ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-rose-500/20 text-rose-300 border border-rose-500/40 uppercase">
                          <Award className="w-3 h-3" />
                          <span>Grand Finalists</span>
                        </span>
                      ) : isSkyshot ? (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase">
                          <Award className="w-3 h-3" />
                          <span>League 1st</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-400/20 text-slate-200 border border-slate-400/40 uppercase">
                          <Shield className="w-3 h-3" />
                          <span>Record 291</span>
                        </span>
                      )}
                    </div>

                    {/* Team Title & Tagline */}
                    <div className="space-y-1">
                      <h2
                        className="text-3xl sm:text-4xl font-black font-display uppercase tracking-tight text-[#EAE4D8] group-hover:text-white transition-colors"
                        style={{ textShadow: `0 0 25px ${primaryColor}20` }}
                      >
                        {team.name}
                      </h2>
                      <p className="text-xs font-mono text-[#B99A5B] font-semibold tracking-wider uppercase">
                        {item.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A69F92] leading-relaxed font-sans">
                      {item.description}
                    </p>

                    {/* Leadership & Squad Data Grid */}
                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#EAE4D8]/10 text-xs font-mono">
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#87968B] uppercase block">Cousin Owner:</span>
                        <strong className="text-[#EAE4D8] block">
                          {team.owner.name} ({team.owner.nickname})
                        </strong>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#87968B] uppercase block">Team Captain:</span>
                        <strong className="text-[#EAE4D8] block">
                          {team.captain.name}
                        </strong>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#87968B] uppercase block">Playoff Finish:</span>
                        <span className="text-emerald-400 font-semibold block">
                          {team.playoffResult}
                        </span>
                      </div>
                      <div className="space-y-1">
                        <span className="text-[10px] text-[#87968B] uppercase block">Official Squad:</span>
                        <span className="text-[#A69F92] block flex items-center gap-1">
                          <Users className="w-3 h-3 text-[#B99A5B]" /> 11 Verified Players
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Action Footer */}
                  <div className="p-4 sm:px-8 sm:py-4 bg-[#14201A] border-t border-[#EAE4D8]/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#87968B] uppercase tracking-wider">
                      Explore Roster & Match Log
                    </span>
                    <Link
                      to={`/teams/${item.id}`}
                      className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-[#B99A5B] hover:text-[#EAE4D8] transition-colors uppercase tracking-widest min-h-[36px]"
                    >
                      <span>Enter Portal</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};

