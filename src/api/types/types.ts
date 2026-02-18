export type PlayerPosition =
  | "Goalkeeper"
  | "Defender"
  | "Midfielder"
  | "Attacker";

export type footballCountries = {
  name: string;
  code: string;
  flag: string;
};

export type liveFixtures = {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string; // ISO string
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
    standings: boolean;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
  events: {
    time: {
      elapsed: number | null;
      extra: number | null;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    player: {
      id: number | null;
      name: string | null;
    };
    assist: {
      id: number | null;
      name: string | null;
    };
    type: "subst" | "Goal" | string;
    detail: string;
    comments: string | null;
  };
};

export type liveFixturesById = {
  fixture: {
    id: number;
    referee: string | null;
    timezone: string;
    date: string; // ISO string
    timestamp: number;
    periods: {
      first: number | null;
      second: number | null;
    };
    venue: {
      id: number | null;
      name: string | null;
      city: string | null;
    };
    status: {
      long: string;
      short: string;
      elapsed: number | null;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    round: string;
    standings: boolean;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean | null;
    };
  };
  goals: {
    home: number | null;
    away: number | null;
  };
  score: {
    halftime: {
      home: number | null;
      away: number | null;
    };
    fulltime: {
      home: number | null;
      away: number | null;
    };
    extratime: {
      home: number | null;
      away: number | null;
    };
    penalty: {
      home: number | null;
      away: number | null;
    };
  };
  events: {
    time: {
      elapsed: number | null;
      extra: number | null;
    };
    team: {
      id: number;
      name: string;
      logo: string;
    };
    player: {
      id: number | null;
      name: string | null;
    };
    assist: {
      id: number | null;
      name: string | null;
    };
    type: "subst" | "Goal" | string;
    detail: string;
    comments: string | null;
  };
  lineups: {
    team: {
      id: number;
      name: string;
      logo: string;
      colors?: unknown;
    };
    coach?: {
      id: number | null;
      name: string | null;
    };
    formation?: string;
    startXI?: {
      player: {
        id: number | null;
        name: string | null;
      } & {
        number?: number;
        pos?: string;
        grid?: string;
      };
    }[];
    substitutes?: {
      player: {
        id: number | null;
        name: string | null;
      } & {
        number?: number;
        pos?: string;
        grid?: string;
      };
    }[];
  };
  statistics: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    statistics: {
      type: string;
      value: number | string | null;
    }[];
  }[];
  players: {
    team: {
      id: number;
      name: string;
      logo: string;
    };
    players: {
      player: {
        id: number | null;
        name: string | null;
      };
      statistics: Record<string, unknown>[];
    }[];
  }[];
};

export type liveFixturesByLeagueAndSeason = {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string; // ISO string
    timestamp: number;
    periods: {
      first: number;
      second: number;
    };
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: {
      long: string;
      short: string;
      elapsed: number;
      extra: number | null;
    };
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
    standings: boolean;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: boolean;
    };
  };
  goals: {
    home: number;
    away: number;
  };
  score: {
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
  };
};

export type liveFixturesByRounds = string[];

export type liveFixturesRoundsDatesByLeagueAndSeason = {
  round: string;
  dates: string[];
};

export type liveFixturesOfLeaguesById = {
  league: {
    id: number;
    name: string;
    country: string | null;
    logo: string;
    flag: string | null;
    season: number;
    round: string | null;
    standings: boolean;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date string
    end: string; // ISO date string
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type liveFixturesOfLeaguesByName = {
  league: {
    id: number;
    name: string;
    country: string | null;
    logo: string;
    flag: string | null;
    season: number;
    round: string | null;
    standings: boolean;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date string
    end: string; // ISO date string
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type liveFixtureOfLeaguesByCountry = {
  league: {
    id: number;
    name: string;
    country: string | null;
    logo: string;
    flag: string | null;
    season: number;
    round: string | null;
    standings: boolean;
  };
  country: {
    name: string;
    code: string | null;
    flag: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date string
    end: string; // ISO date string
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type liveFixturesLeaguesBySeason = {
  league: {
    id: number;
    name: string;
    type: "League" | "Cup" | string;
    logo: string;
  };
  country: {
    id: number;
    name: string;
    code: string | null;
    codeISO_2: string | null;
    codeISO_3: string | null;
    isCountryOfPresence: boolean;
    createdOn: string; // ISO date-time
    createdBy: string | null;
    isDeleted: boolean;
    modifiedOn: string | null;
    modifiedBy: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date string
    end: string; // ISO date string
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type searchLiveFixtureLeagues = {
  league: {
    id: number;
    name: string;
    type: "League" | "Cup" | string;
    logo: string;
  };
  country: {
    id: number;
    name: string;
    code: string | null;
    codeISO_2: string | null;
    codeISO_3: string | null;
    isCountryOfPresence: boolean;
    createdOn: string; // ISO datetime
    createdBy: string | null;
    isDeleted: boolean;
    modifiedOn: string | null;
    modifiedBy: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date
    end: string; // ISO date
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type liveCurrentFixtureLeagues = {
  league: {
    id: number;
    name: string;
    type: "League" | "Cup" | string;
    logo: string;
  };
  country: {
    id: number;
    name: string;
    code: string | null;
    codeISO_2: string | null;
    codeISO_3: string | null;
    isCountryOfPresence: boolean;
    createdOn: string; // ISO datetime
    createdBy: string | null;
    isDeleted: boolean;
    modifiedOn: string | null;
    modifiedBy: string | null;
  };
  seasons: {
    year: number;
    start: string; // ISO date
    end: string; // ISO date
    current: boolean;
    coverage: {
      fixtures: {
        events: boolean;
        lineups: boolean;
        statistics_fixtures: boolean;
        statistics_players: boolean;
      };
      standings: boolean;
      players: boolean;
      top_scorers: boolean;
      top_assists: boolean;
      top_cards: boolean;
      injuries: boolean;
      predictions: boolean;
      odds: boolean;
    };
  }[];
};

export type teamsById = {
  team: {
    id: number;
    name: string;
    logo: string;
    winner: null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
};

export type teamsByName = {
  team: {
    id: number;
    name: string;
    logo: string;
    winner: null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
};

export type teamsByLeagueAndSeason = {
  team: {
    id: number;
    name: string;
    logo: string;
    winner: boolean | null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
};

export type teamsByCountry = {
  team: {
    id: number;
    name: string;
    logo: string;
    winner: null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
};

export type teamsByVenue = {
  team: {
    id: number;
    name: string;
    logo: string;
    winner: null;
  };
  venue: {
    id: number;
    name: string;
    city: string;
  };
};

export type teamsSeasons = string;

export type teamsCountries = {
  name: string;
  code: string | null;
  flag: string | null;
};

export type venuesById = {
  id: number;
  name: string;
  city: string;
};

export type standingsByLeagueIdSeasonTeamId = {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string | null;
    season: number;
    standings: {
      rank: number;
      team: {
        id: number;
        name: string;
        logo: string;
      };
      points: number;
      goalsDiff: number;
      group: string;
      form: string | null;
      status: string | null;
      description: string | null;
      all: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      home: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      away: {
        played: number;
        win: number;
        draw: number;
        lose: number;
        goals: {
          for: number;
          against: number;
        };
      };
      update: string;
    }[][];
  };
};

export type standingsByTeam = {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string | null;
  season: number;
  standings: {
    rank: number;
    team: {
      id: number;
      name: string;
      logo: string;
    };
    points: number;
    goalsDiff: number;
    group: string;
    form: string | null;
    status: string | null;
    description: string | null;
    all: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    home: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    away: {
      played: number;
      win: number;
      draw: number;
      lose: number;
      goals: {
        for: number;
        against: number;
      };
    };
    update: string;
  }[][];
};

export type playerSeasons = string[];

export type footballPlayersProfileById = {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string | null;
      country: string;
    };
    nationality: string;
    height: number | null;
    weight: number | null;
    number: number | null;
    position: string;
    photo: string;
  };
};

export type teamsPlayerSquadByTeamId = {
  team: {
    id: number;
    name: string;
    logo: string;
  };
  players: {
    id: number;
    name: string;
    age: number;
    number: number;
    position: PlayerPosition;
    photo: string;
  }[];
};

export type teamsPlayerSquadByPlayerId = any;

export type transfersPlayerByPlayerId = any;

export type playerSidelinedByPlayerId = any;

export type playersSidelinedBulkByPlayerId = any;

export type playersTrophiesByPlayersId = any;
