export interface upcommingMatches {
  date: string;
  dateTimeGMT: string;
  matchStarted: boolean;
  squad: string;
  team_1: string;
  team_2: string;
  toss_winner_team?: string;
  type: string;
  unique_id: string;
}
export interface cricketScore {
  stat: string;
  score: string;
  description: string;
  matchStarted: boolean;
  team_1: string;
  team_2: string;
  v: string;
  ttl: number;
  creditsLeft: number;
}
