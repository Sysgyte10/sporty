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
