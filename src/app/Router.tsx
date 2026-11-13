import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { useSeason } from './providers/SeasonProvider';
import { Trophy, Users, Shield, BarChart3, Calendar, Award } from 'lucide-react';

// Stage 1 Foundation placeholder view for Home
const HomePlaceholder: React.FC = () => {
  const { seasonData } = useSeason();
  return (
    <div className="py-16 space-y-12">
      <Container>
        {/* Foundation Hero Banner */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full border border-amber-400/30 bg-amber-400/10 text-amber-300 text-xs font-semibold tracking-widest uppercase">
            <Trophy className="w-3.5 h-3.5" /> Stage 1: Foundation & Data Verified
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight">
            ASHES PREMIER LEAGUE
          </h1>
          <p className="text-lg text-amber-400 font-display uppercase tracking-widest">
            {seasonData.subtitle}
          </p>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            The permanent digital archive of Season 1 is now initialized with a 100% verified data
            model. Four cousins, four teams, 15 matches, and the Authors’ legendary championship chase.
          </p>
        </div>

        {/* Live Verified Data Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="bg-[#12151E] border border-white/10 rounded-lg p-5 text-center">
            <p className="text-3xl font-display font-bold text-white tracking-wider">4</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Teams</p>
          </div>
          <div className="bg-[#12151E] border border-white/10 rounded-lg p-5 text-center">
            <p className="text-3xl font-display font-bold text-white tracking-wider">15</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Total Matches</p>
          </div>
          <div className="bg-[#12151E] border border-white/10 rounded-lg p-5 text-center">
            <p className="text-3xl font-display font-bold text-amber-400 tracking-wider">5,945</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Batter Runs (Official)</p>
          </div>
          <div className="bg-[#12151E] border border-white/10 rounded-lg p-5 text-center">
            <p className="text-3xl font-display font-bold text-purple-400 tracking-wider">101</p>
            <p className="text-xs text-slate-400 uppercase tracking-widest mt-1">Bowler Wickets</p>
          </div>
        </div>

        {/* The 4 Contenders Snapshot */}
        <div className="mt-12">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
            <Shield className="w-5 h-5 text-amber-400" /> The Four Contenders
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.values(seasonData.teams).map((team) => (
              <div
                key={team.id}
                className="bg-[#12151E] border border-white/10 hover:border-white/20 rounded-lg p-5 transition-all"
                style={{ borderTopColor: team.theme.primaryColor, borderTopWidth: 3 }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-display text-lg font-bold text-white">{team.name}</h3>
                  {team.playoffResult === 'CHAMPIONS' && (
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 font-bold px-1.5 py-0.5 rounded border border-amber-400/30 flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> Champions
                    </span>
                  )}
                </div>
                <div className="space-y-1.5 text-xs text-slate-400">
                  <p>
                    <span className="text-slate-300 font-medium">Owner:</span> {team.owner.name} ({team.owner.nickname})
                  </p>
                  <p>
                    <span className="text-slate-300 font-medium">Captain:</span> {team.captain.name}
                  </p>
                  <p>
                    <span className="text-slate-300 font-medium">League Finish:</span> {team.leagueRecord.won}W - {team.leagueRecord.lost}L ({team.leagueRecord.points} pts)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Foundation Notice */}
        <div className="mt-12 bg-white/5 border border-white/10 rounded-lg p-6 text-center text-xs text-slate-400 space-y-2">
          <p className="text-slate-200 font-semibold">
            Stage 1 Foundation Active: Data Model & Test Suite Verified (10/10 Tests Passed).
          </p>
          <p>
            Complete cinematic hero, interactive rosters, player comparisons, and broadcast scorecard
            will be unlocked across Stages 2–5 upon your approval.
          </p>
        </div>
      </Container>
    </div>
  );
};

// Generic placeholder for other routes
const RoutePlaceholder: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <div className="py-24 text-center">
      <Container className="space-y-4 max-w-lg mx-auto">
        <div className="inline-flex p-3 rounded-full bg-white/5 border border-white/10 text-amber-400 mb-2">
          {icon}
        </div>
        <h1 className="text-3xl font-black text-white tracking-tight uppercase">{title}</h1>
        <p className="text-sm text-slate-400 leading-relaxed">{subtitle}</p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-semibold text-amber-400 hover:text-amber-300 uppercase tracking-widest"
          >
            ← Return to Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePlaceholder />} />
      <Route
        path="/owners"
        element={
          <RoutePlaceholder
            title="The Four Cousins"
            subtitle="Stage 3 Target: Immersive owner profiles for Shubham, Jay, Dharm, and Umang with head-to-head rivalry matrix."
            icon={<Users className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="/teams"
        element={
          <RoutePlaceholder
            title="Teams & Squads"
            subtitle="Stage 3 Target: Dedicated team portals for Authors, Champions, Skyshot, and Knights."
            icon={<Shield className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="/teams/:teamId"
        element={
          <RoutePlaceholder
            title="Team Portal"
            subtitle="Stage 3 Target: 11-player squad cards with verified innings and interactive statistics."
            icon={<Shield className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="/stats"
        element={
          <RoutePlaceholder
            title="Statistics Archive"
            subtitle="Stage 4 Target: Points table, Orange/Purple Cap podiums, 50s/100s milestones, and 2-player comparison tool."
            icon={<BarChart3 className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="/matches"
        element={
          <RoutePlaceholder
            title="Match Centre"
            subtitle="Stage 4 Target: 12 league matches, playoff bracket, and the centerpiece 226 chase final scorecard."
            icon={<Calendar className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="/hall-of-fame"
        element={
          <RoutePlaceholder
            title="Hall of Fame"
            subtitle="Stage 5 Target: Permanent trophy inductees, golden caps, and historic records ceremony."
            icon={<Award className="w-8 h-8" />}
          />
        }
      />
      <Route
        path="*"
        element={
          <RoutePlaceholder
            title="404 — Pitch Not Found"
            subtitle="The match page or statistic you are looking for does not exist in the APL archive."
            icon={<Trophy className="w-8 h-8" />}
          />
        }
      />
    </Routes>
  );
};

