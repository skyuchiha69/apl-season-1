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
    matchContext: 'Verified Context: Skyshot topped the 12-match regular season (4 wins, 8 pts, +NRR), defeating Authors twice (Matches 6 & 12).',
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
        message: 'Winning regular-season fixtures on a Tuesday night is cute, Sky. But championship cricket isn’t about who peaks in Match 6 — it’s about who has ice in their veins when the trophy is on the pitch.',
        verifiedContext: 'Authors finished 2nd in League Stage (3-3, 6 pts) before storming the playoffs'
      },
      {
        id: 'aow-3',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'Sky conveniently forgets Match 2. First meeting of the tournament, Champions walked into your stadium and took the points. You weren’t untouchable — you just had good net run rate math.',
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
        message: 'Table toppers or not, Skyshot still had to bowl to me in Match 3. We didn’t just beat them; we hung 291 on the board. The greatest single batting spectacle of the summer.',
        verifiedContext: 'Match 3: Skyshot vs Knights — Knights won posting all-time tournament record 291'
      }
    ]
  },
  {
    id: 'playoff-salt',
    title: 'THE PLAYOFF SALT',
    subtitle: 'The 10-Run Heartbreak & Semi-Final Fallout',
    badge: 'PLAYOFF CRUNCH',
    matchContext: 'Verified Context: Match 13 (SF1): Champions 225 vs Skyshot 215 (Champions won by 10 runs). Match 14 (SF2): Authors defeated Skyshot.',
    messages: [
      {
        id: 'ps-1',
        speakerId: 'sky',
        speakerName: 'Shubham',
        speakerNickname: 'Sky',
        teamId: 'skyshot',
        teamName: 'SKYSHOT',
        teamColor: '#00D2FF',
        message: 'Ten runs. That is all it was in Semi-Final 1. We were cruising at 200 with Lelouch on 56 and Shamrock on 71. Two freak runouts by Paul and Oscar, and suddenly we miss the final by ten agonising runs.',
        verifiedContext: 'Match 13 (SF1): Lelouch run out (56), Shamrock run out (71); Skyshot stranded on 215'
      },
      {
        id: 'ps-2',
        speakerId: 'ub',
        speakerName: 'Umang',
        speakerNickname: 'UB',
        teamId: 'champions',
        teamName: 'CHAMPIONS',
        teamColor: '#FF2E4D',
        message: 'Those weren’t "freak" runouts, Sky. That was Champions pressure. We put 225 on the scoreboard batting first, choked the middle overs, and executed two direct hits when your batsmen started panicking.',
        verifiedContext: 'Match 13 (SF1): Champions posted 225, defended by 10 runs to qualify for Grand Final'
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
        message: 'All those regular season celebrations on Google Meet, only to watch Sunday’s Grand Final from the call lobby. Beautiful poetry.',
        verifiedContext: 'Skyshot eliminated in 3rd place despite leading the tournament in regular-season points'
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
        message: 'Congratulations, Jay. You scored 146 runs in Match 3, your team posted 291, and you still managed to finish dead last in the standings with four total points. That has to be an Olympic record for stat-padding.',
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
        message: 'It was the ultimate feast or famine. In Match 3 Knights looked like world champions. Two games later against us, you collapsed to 122 all out. That’s the lowest score of the entire season!',
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
        message: 'Innings like that win highlights reels, Jay. Balanced elevens win championships. That’s why the trophy stays in the green corner.',
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
        message: 'Chasing 226 at over 11.3 an over under lights with everything on the line. King smashed 108 from 54, Cross blasted 46 off 23, and we hit the winning boundary with four balls to spare. That is how champions close.',
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
        message: 'We posted 225/8 in twenty overs. Harvy made 60, Stark dropped 40 off 16. Ninety-nine times out of a hundred, 225 wins you a championship final. King played the innings of his life — take four deliveries away and that cup is ours.',
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
        message: 'I still hold the Purple Cap with twelve wickets. If we hadn’t left those ten runs out on the pitch in Semi-Final 1, Authors would have had to chase 226 against my bowling attack instead.',
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
        message: 'Would’ve, could’ve, should’ve. The history books don’t record "what if", Sky. Dharm chased 226, UB defended 225 once, and I hit 146. You’re holding a purple cap and zero final appearances. Roll on Season 2.',
        verifiedContext: 'Ashes Premier League Season 1 conclusion'
      }
    ]
  }
];

