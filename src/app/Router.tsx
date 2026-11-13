import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { HomePage } from '../pages/Home/HomePage';
import { StatsPage } from '../pages/Stats/StatsPage';
import { MatchesPage } from '../pages/Matches/MatchesPage';
import { TeamsPage } from '../pages/Teams/TeamsPage';
import { TeamDetailPage } from '../pages/Teams/TeamDetailPage';
import { OwnersPage } from '../pages/Owners/OwnersPage';
import { HallOfFamePage } from '../pages/HallOfFame/HallOfFamePage';
import { Trophy } from 'lucide-react';

// Generic placeholder for future milestone routes
const RoutePlaceholder: React.FC<{ title: string; subtitle: string; icon: React.ReactNode }> = ({
  title,
  subtitle,
  icon,
}) => {
  return (
    <div className="py-24 text-center bg-[#090C0B]">
      <Container className="space-y-4 max-w-lg mx-auto">
        <div className="inline-flex p-3 rounded-full bg-[#111815] border border-[#EAE4D8]/15 text-[#B99A5B] mb-2">
          {icon}
        </div>
        <h1 className="text-3xl font-black text-[#EAE4D8] tracking-tight uppercase font-display">{title}</h1>
        <p className="text-sm text-[#A69F92] leading-relaxed font-sans">{subtitle}</p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center text-xs font-semibold text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-widest font-mono"
          >
            ← Return to Chronicle
          </Link>
        </div>
      </Container>
    </div>
  );
};

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      {/* Editorial Homepage Chronicle */}
      <Route path="/" element={<HomePage />} />

      {/* Owners Chronicle Portal */}
      <Route path="/owners" element={<OwnersPage />} />
      <Route path="/teams" element={<TeamsPage />} />
      <Route path="/teams/:teamId" element={<TeamDetailPage />} />
      <Route path="/stats" element={<StatsPage />} />
      <Route path="/matches" element={<MatchesPage />} />
      <Route path="/hall-of-fame" element={<HallOfFamePage />} />
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
