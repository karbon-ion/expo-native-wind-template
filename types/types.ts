// types.ts

// Main League Interface
export interface League {
    id: number;
    name: string;
    type?: string;
    logo: string;
    flag?:string;
    season?: number;
    round?: string;
    country: {
        name: string;
        code?: string | null;
        flag?: string | null;
    };
    seasons?: Season[];
}

// Season Interface
export interface Season {
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: Coverage;
}

// Coverage Interface
export interface Coverage {
    fixtures: boolean;
    standings: boolean;
    players: boolean;
    top_scorers: boolean;
    top_assists: boolean;
    top_cards: boolean;
    injuries: boolean;
    predictions: boolean;
    odds: boolean;
}

// Main Data Interface for Leagues
export interface LeaguesData {
    get: string;
    parameters: any; // define if you know the structure
    errors: any; // define if you know the structure
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: League[];
}

// Odds Data Interface
export interface OddsData {
    get: string;
    parameters: any; // define if you know the structure
    errors: any; // define if you know the structure
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: Response[];
}

// Response Interface for Odds
export interface Response {
    league: LeagueInfo;
    fixture: Fixture;
    bookmakers: Bookmaker[];
}

// League Information Interface
export interface LeagueInfo {
    id: number;
    name: string;
    country: {
        name: string;
        code: string | null;
        flag: string | null;
    }; // Updated to match the new League structure
    logo: string;
    flag: string;
    season: number;
}

// Fixture Interface
export interface Fixture {
    id: number;
    timezone: string;
    date: string;
    timestamp: number;
    update: string;
}

// Bookmaker Interface
export interface Bookmaker {
    id: number;
    name: string;
    bets: Bet[];
}

// Bet Interface
export interface Bet {
    id: number;
    name: string;
    values: BetValue[];
}

// Bet Value Interface
export interface BetValue {
    value: string;
    odd: string;
}

// Fixture Data Interface
export interface FixtureData {
    get: string;
    parameters: {
        id: string;
    };
    errors: any;
    results: number;
    paging: {
        current: number;
        total: number;
    };
    response: Array<FixtureResponse>;
}

// Fixture Response Interface
export interface FixtureResponse {
    fixture: FixtureDetails;
}

// Fixture Details Interface
export interface FixtureDetails {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: Periods;
    venue: Venue;
    status: Status;
    league: League;
    teams: Teams;
    goals: Goals;
    events: Array<Event>;
    lineups: Lineups;
    statistics: TeamStatistics;
    players: Players;
}

// Periods Interface
export interface Periods {
    first: number;
    second: number;
}

// Venue Interface
export interface Venue {
    id: number;
    name: string;
    city: string;
}

// Status Interface
export interface Status {
    long: string;
    short: string;
    elapsed: number;
}

// Teams Interface
export interface Teams {
    home: Team;
    away: Team;
}

// Team Interface
export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
}

// Goals Interface
export interface Goals {
    home: number;
    away: number;
    score: Score;
}

// Score Interface
export interface Score {
    halftime: {
        home: number;
        away: number;
    };
    fulltime: {
        home: number;
        away: number;
    };
    extratime: {
        home: number | null;
        away: number | null;
    };
    penalty: {
        home: number | null;
        away: number | null;
    };
}

// Event Interface
export interface Event {
    time: {
        elapsed: number;
        extra: number | null;
    };
    team: Team;
    player: Player;
    assist: Player | null;
    type: string;
    detail: string;
    comments: string | null;
}

// Player Interface
export interface Player {
    id: number | null;
    name: string | null;
    logo?: string; // Make this optional if not needed for all players
    number?: number; // Add this line to include the player's number
    pos?: string; // Add this line to include the player's position
}

// Lineups Interface
export interface Lineups {
    home: LineupTeam;
    away: LineupTeam;
}

// Lineup Team Interface
export interface LineupTeam {
    team: {
        id: number;
        name: string;
        logo: string;
        coach: {
            id: number;
            name: string;
            formation: string;
        };
        startXI: Array<Player>;
        substitutes: Array<Player>;
    };
}

// Team Statistics Interface
export interface TeamStatistics {
    home: TeamStat;
    away: TeamStat;
}

// Team Stat Interface
export interface TeamStat {
    id: number;
    name: string;
    logo: string;
    statistics: Array<Statistic>;
}

// Statistic Interface
export interface Statistic {
    type: string;
    value: number | null;
}

// Players Interface
export interface Players {
    home: TeamPlayers;
    away: TeamPlayers; // Added for completeness
}

// Team Players Interface
export interface TeamPlayers {
    id: number;
    name: string;
    logo: string;
    update: string;
    players: Array<PlayerDetail>;
}

// Player Detail Interface
export interface PlayerDetail {
    id: number;
    name: string;
    photo: string;
    statistics: PlayerStatistics;
}

// Player Statistics Interface
export interface PlayerStatistics {
    games: {
        offsides: number | null;
        shots: {
            goals: number | null;
            passes: number | null;
            tackles: number | null;
            duels: number | null;
            dribbles: number | null;
            fouls: number | null;
            cards: number | null;
            penalty: number | null;
        };
    };
}
