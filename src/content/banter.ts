import { TeamId } from '../data/types';

export type BanterCategoryId = 'all-out-war' | 'playoff-salt' | '146-paradox' | 'championship-gloating';

export interface BanterMessage {
  id: string;
  speakerId: 'sky' | 'jay' | 'dharm' | 'ub';
  speakerName: string;
  speakerNickname: string;
  teamId: TeamId;
  teamName: string;
  teamColor: string;
  message: string;
  verifiedContext?: string;
}

export interface BanterCategory {
  id: BanterCategoryId;
  title: string;
  subtitle: string;
  badge: string;
  matchContext: string;
  messages: BanterMessage[];
}

export const BANTER_DISCLOSURE = 'APL Editorial Banter • Fictional Rivalry Dialogue • Grounded in Verified Season 1 Outcomes.';

export const rivalryCategories: BanterCategory[] = [
  {
    id: 'all-out-war',
    title: 'ALL-OUT WAR',
    subtitle: 'The 12-Match League Stage Dogfight',
    badge: 'LEAGUE DOMINANCE',
    matchContext: 'Verified Context: Skyshot topped the 12-match regular season (4 wins, 8 pts), defeating Authors twice (Matches 6 & 12).',
    messages: [
      {
        id: 'aow-1',
        speakerId: 'sky',
        speakerName: 'Shubham',
        speakerNickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        teamColor: '#00D2FF',
        message: 'Let the record state: across twelve rounds of league play, nobody touched Skyshot. Four wins, top of the table, and we handled Authors twice without breaking a sweat.',
        verifiedContext: 'Match 6: Authors vs Skyshot (Skyshot win) • Match 12: Skyshot vs Authors (Skyshot win)'
      },
      {
        id: 'aow-2',
        speakerId: 'dharm',
        speakerName: 'Dharm',
        speakerNickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        teamColor: '#00E676',
        message: 'Winning regular-season fixtures is cute, Sky. But championship cricket isn’t about who peaks in Match 6 — it’s about who has ice in their veins when the trophy is on the line.',
        verifiedContext: 'Authors finished regular season tied for 2nd (3-3, 6 pts) before claiming the championship'
      },
      {
        id: 'aow-3',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'Sky conveniently forgets Match 2. First meeting of the tournament, Champions shut you down and took the points. You weren’t untouchable — you were just loud.',
        verifiedContext: 'Match 2: Skyshot vs Champions — Champions victory'
      },
      {
        id: 'aow-4',
        speakerId: 'jay',
        speakerName: 'Jay',
        speakerNickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        teamColor: '#F8FAFC',
        message: 'Table toppers or not, Skyshot still had to bowl to me in Match 3. We didn’t just beat them; we hung 291 on the board. The greatest single team total of the tournament.',
        verifiedContext: 'Match 3: Skyshot vs Knights — Knights won posting all-time tournament record 291'
      }
    ]
  },
  {
    id: 'playoff-salt',
    title: 'THE PLAYOFF SALT',
    subtitle: 'The 10-Run Heartbreak & Semi-Final Fallout',
    badge: 'PLAYOFF CRUNCH',
    matchContext: 'Verified Context: Match 13 (SF1): Champions 225 vs Skyshot 215/5 (Champions won by 10 runs). Match 14 (SF2): Authors defeated Skyshot.',
    messages: [
      {
        id: 'ps-1',
        speakerId: 'sky',
        speakerName: 'Shubham',
        speakerNickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        teamColor: '#00D2FF',
        message: 'Ten runs. That is all it was in Semi-Final 1. We put 215 on the board chasing 225, and suddenly we miss the final by ten agonising runs. That semi-final still haunts the group chat.',
        verifiedContext: 'Match 13 (SF1): Champions defended 225, restricting Skyshot to 215/5'
      },
      {
        id: 'ps-2',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'That wasn’t luck, Sky. That was Champions defense. We put 225 on the scoreboard batting first, held our nerve, and shut the door when you came chasing. A ten-run win is a ten-run win.',
        verifiedContext: 'Match 13 (SF1): Champions defended 225 by 10 runs to reach the Grand Final'
      },
      {
        id: 'ps-3',
        speakerId: 'dharm',
        speakerName: 'Dharm',
        speakerNickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        teamColor: '#00E676',
        message: 'And when you fell into Semi-Final 2 for a second chance, Authors were waiting. You had two shots at a grand final and couldn’t cash either. That is the definition of playoff temperament.',
        verifiedContext: 'Match 14 (SF2): Authors defeated Skyshot to advance to the Grand Final'
      },
      {
        id: 'ps-4',
        speakerId: 'jay',
        speakerName: 'Jay',
        speakerNickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        teamColor: '#F8FAFC',
        message: 'All those regular season celebrations, only to watch the Grand Final from the sidelines. You led the table all season and still didn’t make the decider.',
        verifiedContext: 'Skyshot eliminated in the semi-finals despite leading the regular-season table (4-2, 8 pts)'
      }
    ]
  },
  {
    id: '146-paradox',
    title: 'THE 146 PARADOX',
    subtitle: 'The All-Time Record Score vs 4th Place Reality',
    badge: 'HISTORIC PARADOX',
    matchContext: 'Verified Context: Jay scored 146 in Match 3 (highest score in APL history) & Knights posted 291 (highest team score), yet finished 4th (2-4, 4 pts).',
    messages: [
      {
        id: 'p146-1',
        speakerId: 'jay',
        speakerName: 'Jay',
        speakerNickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        teamColor: '#F8FAFC',
        message: 'You three can argue about silverware all you want. When people look at the APL record book, my name is at the absolute top: 146 runs in a single innings. Nobody else even touched 110.',
        verifiedContext: 'Tournament Record: Jay (146 runs) in Match 3 vs Skyshot'
      },
      {
        id: 'p146-2',
        speakerId: 'sky',
        speakerName: 'Shubham',
        speakerNickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        teamColor: '#00D2FF',
        message: 'You scored 146 and still couldn’t take your franchise to the playoffs, Jay. That’s an impressive way to waste a good innings. Four total points at the bottom of the table.',
        verifiedContext: 'Knights finished 4th in league table (2 wins, 4 losses, 4 points)'
      },
      {
        id: 'p146-3',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'It was the ultimate feast or famine. In Match 3 Knights looked like world champions. Two games later against us, you were bowled out for 122. That’s the lowest team total of the entire tournament!',
        verifiedContext: 'Tournament Record: Knights lowest team score (122) vs Champions'
      },
      {
        id: 'p146-4',
        speakerId: 'dharm',
        speakerName: 'Dharm',
        speakerNickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        teamColor: '#00E676',
        message: 'Innings like that win highlight reels, Jay. Balanced elevens win championships. That’s why the trophy stays in the green corner.',
        verifiedContext: 'Authors lifted the Season 1 trophy through collective squad depth'
      }
    ]
  },
  {
    id: 'championship-gloating',
    title: 'CHAMPIONSHIP GLOATING',
    subtitle: 'The 226 Chase & Final Trophy Honors',
    badge: 'THE DECIDING MOMENT',
    matchContext: 'Verified Context: Match 15 (Grand Final): Champions 225/8 in 20.0 ov; Authors 226/7 in 19.2 ov. Authors won by 3 wickets (A. King 108 from 54).',
    messages: [
      {
        id: 'cg-1',
        speakerId: 'dharm',
        speakerName: 'Dharm',
        speakerNickname: 'Green',
        teamId: 'authors',
        teamName: 'AUTHORS',
        teamColor: '#00E676',
        message: '225 on the scoreboard, runners-up on the record, UB. That’s a lot of runs for a silver medal. Chasing 226 with everything on the line, King delivered 108 off 54 and we crossed the line with four balls to spare. That is how champions close.',
        verifiedContext: 'Match 15 Final: Authors chased 226/7 in 19.2 ov — highest successful run chase in APL history'
      },
      {
        id: 'cg-2',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'Enjoy that trophy while you can. We put up 225/8 in twenty overs with Harvy making 60 and Stark scored 40 off 16. King had the chase of his life, but we will make sure you don’t get comfortable next season.',
        verifiedContext: 'Match 15 Final: Champions 225/8; Harvy 60 (33), Stark 40 (16), Parker 2/30'
      },
      {
        id: 'cg-3',
        speakerId: 'sky',
        speakerName: 'Shubham',
        speakerNickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        teamColor: '#00D2FF',
        message: 'Skyshot still took the Purple Cap with N. Sky’s twelve wickets and topped the regular season. If we hadn’t left those ten runs out there in Semi-Final 1, Authors would have had to chase 226 against our attack instead.',
        verifiedContext: 'Season 1 Honors: N. Sky won the Purple Cap with 12 tournament wickets'
      },
      {
        id: 'cg-4',
        speakerId: 'jay',
        speakerName: 'Jay',
        speakerNickname: 'Red',
        teamId: 'knights',
        teamName: 'KNIGHTS',
        teamColor: '#F8FAFC',
        message: 'N. Sky’s Purple Cap looks great in Skyshot’s cabinet, Sky. Shame the actual championship wasn’t available in your size. Dharm chased 226, UB defended 225 once, and I hit 146. You’re holding regular-season points and watching the celebration. Roll on Season 2.',
        verifiedContext: 'Ashes Premier League Season 1 conclusion'
      }
    ]
  }
];
