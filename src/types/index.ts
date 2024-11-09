export interface Player {
  id: string;
  name: string;
  role: 'batsman' | 'bowler' | 'all-rounder' | 'wicketkeeper';
  team?: string;
  stats: {
    batting: {
      runs: number;
      ballsFaced: number;
      strikeRate: number;
      average: number;
      centuries: number;
      fifties: number;
    };
    bowling: {
      wickets: number;
      economy: number;
      average: number;
      fiveWicketHauls: number;
    };
  };
}

export interface Team {
  id: string;
  name: string;
  players: Player[];
  stats: {
    matches: number;
    wins: number;
    losses: number;
    points: number;
    netRunRate: number;
  };
}

export interface Tournament {
  id: string;
  name: string;
  format: 'league' | 'knockout' | 'round-robin' | 'group';
  teams: Team[];
  startDate: string;
  endDate: string;
  status: 'upcoming' | 'ongoing' | 'completed';
  matches: Match[];
}

export interface Match {
  id: string;
  tournamentId: string;
  team1: Team;
  team2: Team;
  date: string;
  venue: string;
  status: 'upcoming' | 'live' | 'completed';
  result?: {
    winner: string;
    margin: string;
    motm: string;
  };
  innings: Innings[];
}

export interface Innings {
  team: string;
  totalRuns: number;
  wickets: number;
  overs: number;
  runRate: number;
  extras: {
    wides: number;
    noBalls: number;
    byes: number;
    legByes: number;
  };
  partnerships: Partnership[];
  fallOfWickets: WicketFall[];
}

export interface Partnership {
  runs: number;
  balls: number;
  player1: string;
  player2: string;
}

export interface WicketFall {
  score: number;
  over: number;
  player: string;
  wicketType: string;
  bowler: string;
}