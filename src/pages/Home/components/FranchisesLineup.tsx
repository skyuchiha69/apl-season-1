import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../../../components/layout/Container';
import { Trophy, Shield, ArrowUpRight, UserCheck } from 'lucide-react';
import { useSeasonOptional } from '../../../app/providers/SeasonProvider';

export const FranchisesLineup: React.FC = () => {
  const { activeSeasonId } = useSeasonOptional();
  const isSeason1 = activeSeasonId === 'season-1';

  const season1Franchises = [
    {
      id: 'authors',
      name: 'AUTHORS',
      tagline: 'The Championship Strategists',
      owner: 'Dharm',
      captainIdentity: 'King',
      accentColor: '#00E676',
      borderClass: 'border-emerald-500/40 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      standing: '1st Place • Inaugural Champions',
      championshipNote: 'Defeated Champions by 3 wickets chasing 226 in Grand Final',
      isChampion: true,
      description: 'Built on calculated aggression and composure under pressure, Dharm’s franchise proved lethal in run chases.',
    },
    {
      id: 'champions',
      name: 'CHAMPIONS',
      tagline: 'The High-Octane Finalists',
      owner: 'Umang (UB)',
      captainIdentity: 'Stark',
      accentColor: '#FF2E4D',
      borderClass: 'border-rose-500/40 hover:border-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      standing: '2nd Place • Grand Finalists',
      championshipNote: 'Posted 225/8 in Final • Won Semi-Final 1 by 10 runs',
      isChampion: false,
      description: 'Possessed the most explosive batting lineup in the league, setting colossal targets that tested every opponent.',
    },
    {
      id: 'skyshot',
      name: 'SKYSHOT',
      tagline: 'The League-Stage Pace Setters',
      owner: 'Shubham (Sky)',
      captainIdentity: 'Shubham',
      accentColor: '#00D2FF',
      borderClass: 'border-cyan-500/40 hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      standing: '1st in League • Semi-Finalist',
      championshipNote: 'Table-toppers in regular season with 4 wins (8 pts)',
      isChampion: false,
      description: 'Aggressive strokeplay and tactical bowling variations made Shubham’s team the regular-season league leaders.',
    },
    {
      id: 'knights',
      name: 'KNIGHTS',
      tagline: 'The Relentless Contenders',
      owner: 'Jay',
      captainIdentity: 'Jay',
      accentColor: '#E2E8F0',
      borderClass: 'border-slate-400/40 hover:border-slate-300',
      badgeBg: 'bg-slate-400/20 text-slate-200 border-slate-400/30',
      standing: '4th Place • League Contender',
      championshipNote: 'Scored crucial upset wins and set the 291 all-time team record',
      isChampion: false,
      description: 'Disciplined and tenacious, Jay’s Knights produced intense, record-shattering performances across the regular season.',
    },
  ];

  const season2Franchises = [
    {
      id: 'skyshot',
      name: 'SKYSHOT',
      tagline: 'The Season 2 Champions',
      owner: 'Shubham (Sky)',
      captainIdentity: 'Shubham',
      accentColor: '#00D2FF',
      borderClass: 'border-cyan-500/40 hover:border-cyan-400',
      badgeBg: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
      standing: '1st Place • Season 2 Champions',
      championshipNote: 'Won Qualifier (M13) & Final (M15) to lift the championship',
      isChampion: true,
      description: 'Steered by owner-captain Shubham, Skyshot followed a 7-point regular season with a flawless postseason sweep to claim their inaugural APL title.',
    },
    {
      id: 'knights',
      name: 'KNIGHTS',
      tagline: 'The Grand Finalists',
      owner: 'Jay',
      captainIdentity: 'Jay',
      accentColor: '#E2E8F0',
      borderClass: 'border-slate-400/40 hover:border-slate-300',
      badgeBg: 'bg-slate-400/20 text-slate-200 border-slate-400/30',
      standing: '2nd Place • Grand Finalists',
      championshipNote: 'Defeated Champions in Semi-Final • 3rd in League (6 pts)',
      isChampion: false,
      description: 'Led by Jay, Knights produced electrifying milestones including Pointer’s tournament-record 161 runs and Dharm’s 4-wicket masterclass.',
    },
    {
      id: 'champions',
      name: 'CHAMPIONS',
      tagline: 'The Regular Season Table Toppers',
      owner: 'Umang (UB)',
      captainIdentity: 'Tony',
      accentColor: '#FF2E4D',
      borderClass: 'border-rose-500/40 hover:border-rose-400',
      badgeBg: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
      standing: '1st in League • Semi-Finalist',
      championshipNote: 'Topped regular season with 9 pts (4W–1L–1T) • Orange & Purple Caps',
      isChampion: false,
      description: 'Dominant across the regular season with 9 points, Umang’s Champions swept both individual cap honors with Harvey (446 runs) and Silver (12 wickets).',
    },
    {
      id: 'authors',
      name: 'AUTHORS',
      tagline: 'The Inaugural Champions',
      owner: 'Dharm',
      captainIdentity: 'King',
      accentColor: '#00E676',
      borderClass: 'border-emerald-500/40 hover:border-emerald-400',
      badgeBg: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
      standing: '4th Place • League Contender',
      championshipNote: '4th in regular season with 2 pts (1 win)',
      isChampion: false,
      description: 'The inaugural champions battled through a grueling title defense campaign, with Dharm transferring as player to Knights and Silva leading squad run tallies.',
    },
  ];

  const franchises = isSeason1 ? season1Franchises : season2Franchises;
  const championsTeam = franchises[0];
  const otherTeams = franchises.slice(1);

  return (
    <section
      id="franchises"
      aria-labelledby="franchises-heading"
      className="py-10 sm:py-16 md:py-24 bg-[#0B1512] border-b border-[#EAE4D8]/10"
    >
      <Container>
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 sm:pb-6 mb-8 sm:mb-12 border-b border-[#EAE4D8]/10 gap-3 sm:gap-4">
          <div className="space-y-1.5 sm:space-y-2">
            <div className="flex items-center space-x-2 text-[10px] sm:text-xs font-mono tracking-wider sm:tracking-[0.25em] text-[#B99A5B] uppercase font-semibold">
              <Shield className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#B99A5B] shrink-0" aria-hidden="true" />
              <span>The Roster • Four Franchises</span>
            </div>
            <h2
              id="franchises-heading"
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#EAE4D8] uppercase font-display tracking-tight"
            >
              The Four Franchises.
            </h2>
          </div>
          <p className="text-[10px] sm:text-xs text-[#87968B] font-mono max-w-md text-left md:text-right uppercase tracking-wider">
            DISTINCT IDENTITIES • COUSIN OWNERS • TEAM CAPTAINS
          </p>
        </div>

        {/* Identity Clarification Notice (Editorial Callout) */}
        <div className="mb-6 sm:mb-10 p-3.5 sm:p-4 rounded-lg bg-[#090C0B] border-l-2 border-[#B99A5B] text-[11px] sm:text-xs text-[#A69F92] font-mono flex items-start space-x-2.5 sm:space-x-3 leading-relaxed">
          <UserCheck className="w-4 h-4 text-[#B99A5B] shrink-0 mt-0.5" />
          <span>
            {isSeason1 ? (
              <>
                <strong className="text-[#EAE4D8]">Distinct Identity Architecture:</strong> The four cousins are the real-life strategic franchise owners, managers, and competitors. On the field, the franchises were led by their actual in-game captains: King (Authors), Stark (Champions), Shubham (Skyshot), and Jay (Knights).
              </>
            ) : (
              <>
                <strong className="text-[#EAE4D8]">Distinct Identity Architecture:</strong> The four cousins are the real-life strategic franchise owners, managers, and competitors. On the field, the franchises were led by their actual in-game captains: Shubham (Skyshot), Jay (Knights), Tony (Champions), and King (Authors).
              </>
            )}
          </span>
        </div>

        {/* Tier 1 Feature: The Champions Spotlight */}
        <div
          className={`mb-6 sm:mb-8 rounded-xl p-4 sm:p-6 lg:p-8 shadow-xl ${
            isSeason1
              ? 'bg-gradient-to-r from-[#0C2016] via-[#111815] to-[#0D1411] border border-emerald-500/30'
              : 'bg-gradient-to-r from-[#081C24] via-[#111815] to-[#0D1411] border border-cyan-500/30'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                <span
                  className={`inline-flex items-center space-x-1.5 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-mono uppercase font-bold tracking-wider ${
                    isSeason1
                      ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  }`}
                >
                  <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
                  <span>{championsTeam.standing}</span>
                </span>
                <span className="text-[11px] sm:text-xs font-mono text-[#87968B]">{championsTeam.tagline}</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-[#EAE4D8] tracking-wide">
                {championsTeam.name}
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs font-mono pt-1 text-[#A69F92]">
                <div>
                  <span className="text-[#87968B] uppercase block text-[10px]">Franchise Owner:</span>
                  <span
                    className={`font-bold text-sm ${
                      isSeason1 ? 'text-emerald-400' : 'text-cyan-400'
                    }`}
                  >
                    {championsTeam.owner}
                  </span>
                </div>
                <div>
                  <span className="text-[#87968B] uppercase block text-[10px]">Team Captain:</span>
                  <span className="text-[#EAE4D8] font-bold text-sm">{championsTeam.captainIdentity}</span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-[#A69F92] font-sans leading-relaxed pt-1">
                {championsTeam.description}
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col justify-center items-start lg:items-end w-full">
              <div className="p-3 sm:p-4 rounded-lg bg-black/40 border border-white/5 w-full text-left lg:text-right font-mono text-xs space-y-1">
                <span className="text-[10px] text-[#87968B] uppercase block">Championship Milestone</span>
                <span
                  className={`font-bold block text-xs sm:text-sm ${
                    isSeason1 ? 'text-emerald-400' : 'text-cyan-400'
                  }`}
                >
                  {championsTeam.championshipNote}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tier 2: The Three Challengers (Asymmetric 3-Column Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {otherTeams.map((team) => (
            <div
              key={team.id}
              className={`rounded-xl bg-[#111815] border ${team.borderClass} p-4 sm:p-6 space-y-3 sm:space-y-4 transition-all duration-300 hover:shadow-xl flex flex-col justify-between`}
            >
              <div className="space-y-2.5 sm:space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-mono uppercase tracking-widest px-2 sm:px-2.5 py-0.5 sm:py-1 rounded border ${team.badgeBg} font-bold`}>
                    {team.standing.split('•')[0]}
                  </span>
                  <div
                    className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                    style={{ backgroundColor: team.accentColor }}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-black text-[#EAE4D8] tracking-wide">
                  {team.name}
                </h3>
                <p className="text-[10px] sm:text-[11px] font-mono text-[#87968B] -mt-1">{team.tagline}</p>

                <div className="space-y-1 pt-1.5 sm:pt-2 border-t border-[#EAE4D8]/10 text-xs font-mono">
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-[#87968B] uppercase block">Owner:</span>
                    <strong className="text-[#EAE4D8] text-xs sm:text-sm">{team.owner}</strong>
                  </div>
                  <div>
                    <span className="text-[9px] sm:text-[10px] text-[#87968B] uppercase block">Team Captain:</span>
                    <span className="text-[#A69F92] text-xs sm:text-sm">{team.captainIdentity}</span>
                  </div>
                </div>

                <p className="text-xs text-[#A69F92] font-sans leading-relaxed pt-1">
                  {team.description}
                </p>
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-[#EAE4D8]/10 text-[10px] sm:text-[11px] font-mono text-[#87968B]">
                <span>{team.championshipNote}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Explore All Franchises Action */}
        <div className="mt-8 sm:mt-10 text-center">
          <Link
            to="/teams"
            className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#B99A5B] hover:text-[#D4BA7E] transition-colors py-2.5 px-5 border border-[#B99A5B]/30 hover:border-[#B99A5B] rounded min-h-[44px]"
          >
            <span>Explore Full Team Rosters &amp; Squad Details</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </Container>
    </section>
  );
};

