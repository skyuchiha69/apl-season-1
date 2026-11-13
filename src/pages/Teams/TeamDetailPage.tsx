import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSeason } from '../../app/providers/SeasonProvider';
import { Container } from '../../components/layout/Container';
import { TeamId } from '../../data/types';
import { TeamHero } from './components/TeamHero';
import { TeamStatsSummary } from './components/TeamStatsSummary';
import { SquadRoster } from './components/SquadRoster';
import { TeamMatchHistory } from './components/TeamMatchHistory';
import { Shield, ArrowLeft } from 'lucide-react';

export const TeamDetailPage: React.FC = () => {
  const { teamId } = useParams<{ teamId: string }>();
  const { seasonData } = useSeason();

  const validTeamIds: TeamId[] = ['authors', 'champions', 'skyshot', 'knights'];
  const isValidTeam = teamId && validTeamIds.includes(teamId as TeamId);

  // Fallback for invalid or unrecorded team IDs
  if (!isValidTeam || !teamId) {
    return (
      <div className="py-24 text-center bg-[#090C0B] min-h-[60vh] flex items-center justify-center">
        <Container className="space-y-4 max-w-lg mx-auto">
          <div className="inline-flex p-3 rounded-full bg-[#111815] border border-[#EAE4D8]/15 text-[#B99A5B] mb-2">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black text-[#EAE4D8] tracking-tight uppercase font-display">
            Franchise Not Found
          </h1>
          <p className="text-sm text-[#A69F92] leading-relaxed font-sans">
            The franchise identifier &quot;{teamId || 'unknown'}&quot; is not part of the four officially registered
            clubs in the APL Season 1 archive.
          </p>
          <div className="pt-4">
            <Link
              to="/teams"
              className="inline-flex items-center space-x-2 text-xs font-semibold text-[#B99A5B] hover:text-[#D4BA7E] uppercase tracking-widest font-mono"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Return to Franchises Hub</span>
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  const validId = teamId as TeamId;
  const team = seasonData.teams[validId];
  const teamPlayers = seasonData.players.filter((p) => p.teamId === validId);
  const teamMatches = seasonData.matches.filter(
    (m) => m.homeTeamId === validId || m.awayTeamId === validId
  );

  return (
    <div className="min-h-screen bg-[#090C0B] text-[#EAE4D8]">
      <Container className="py-6 sm:py-10 space-y-2">
        <TeamHero team={team} />
        <TeamStatsSummary team={team} players={teamPlayers} />
        <SquadRoster team={team} players={teamPlayers} />
        <TeamMatchHistory teamId={validId} matches={teamMatches} />
      </Container>
    </div>
  );
};

