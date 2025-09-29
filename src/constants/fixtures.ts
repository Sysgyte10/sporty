import { fixtureDataType } from "@src/types/types";

export const footballFixtures: fixtureDataType[] = [
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Remo Stars",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Rivers United",
            clubImg: require("@src/assets/png/chelsea.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Abia Warriors",
            clubImg: require("@src/assets/png/liverpool.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Ikorodu City",
            clubImg: require("@src/assets/png/totheham.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Chelsea FC",
            clubImg: require("@src/assets/png/arsenal.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Man United",
            clubImg: require("@src/assets/png/man-u.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/arsenal.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/man-u.png"),
            goals: 3,
          },
          {
            id: 9,
            footballerName: "Jamail Musiala",
            clubName: "Man City FC",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 10,
            footballerName: "Jamail Musiala",
            clubName: "Arsenal FC",
            clubImg: require("@src/assets/png/chelsea.png"),
            goals: 3,
          },
          {
            id: 11,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 12,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 13,
            footballerName: "Jamail Musiala",
            clubName: "Everton FC",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 14,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 15,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 16,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 17,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 18,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 19,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 20,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 21,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 22,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 23,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 24,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 25,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 26,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 27,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 28,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 29,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 30,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 31,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 32,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 33,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 34,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 35,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 36,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 37,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 38,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 39,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 40,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 41,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 42,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 43,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 44,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 45,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 46,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 47,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 48,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 49,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 50,
            footballerName: "Jamail Musiala",
            clubName: "Ginga",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 51,
            footballerName: "Jamail Musiala",
            clubName: "Odogwu Football Club",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 52,
            footballerName: "Jamail Musiala",
            clubName: "Lagos Titans",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 53,
            footballerName: "Jamail Musiala",
            clubName: "Monaco FC",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 54,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 55,
            footballerName: "Jamail Musiala",
            clubName: "Southampton FC",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 56,
            footballerName: "Jamail Musiala",
            clubName: "Liverpool FC",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 9,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 10,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 11,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 12,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 13,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 14,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 15,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 16,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 17,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 18,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 19,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 20,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 21,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 22,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 23,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 24,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 25,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 26,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 27,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 28,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 29,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 30,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 31,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 32,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 33,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 34,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 35,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 36,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 37,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 38,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 39,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 40,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 41,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 42,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 43,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 44,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 45,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 46,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 47,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 48,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 49,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 50,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 51,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 52,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 53,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 54,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 55,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 56,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GHS",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 2,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 4,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 5,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 6,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 7,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 8,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Eyimba FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
          {
            name: "Kwara United",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
        ],
      },
      {
        id: 2,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "Shining Stars",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "Awka FC",
            image: require("@src/assets/png/fixture.png"),
            score: "2",
          },
        ],
      },
      {
        id: 3,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 4,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
      {
        id: 5,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
        ],
        club: [
          {
            name: "New York City FC",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
          {
            name: "Atlanta United",
            image: require("@src/assets/png/fixture.png"),
            score: "0",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "MLS",
    country: "GHS",
    icon: require("@src/assets/png/fixture.png"),
    odds: [
      {
        clubName: "PSG",
        odd: 2.5,
      },
      {
        clubName: "Real Madrid",
        odd: 3.0,
      },
      {
        clubName: "Manchester City",
        odd: 3.25,
      },
      {
        clubName: "Bayern Munchen",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Micheal Olise in Club World Cup debut, Brazillian media remain sceptical",
        club: "Bayern Munich",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chelsea vs Crystal Palace",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Man Utd vs Chelsea",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Chelsea vs Man Utd",
        detail: "FIFA Club World Cup 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jamail Musiala",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 2,
          },
          {
            id: 2,
            footballerName: "Kingsley Coman",
            clubName: "Bayern Munich",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 3,
          },
          {
            id: 3,
            footballerName: "Adebayo Bunmi Solomon",
            clubName: "Man United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 1,
          },
        ],
        club: [
          {
            name: "Accra FC",
            image: require("@src/assets/png/fixture.png"),
            score: "1",
          },
          {
            name: "kumasi United",
            image: require("@src/assets/png/fixture.png"),
            score: "4",
          },
        ],
      },
    ],
  },
];

export const basketballFixtures: fixtureDataType[] = [
  {
    id: 1,
    fixtureName: "NBA",
    country: "USA",
    icon: require("@src/assets/png/basketball1.png"),
    odds: [
      {
        clubName: "Lakers",
        odd: 2.5,
      },
      {
        clubName: "Warriors",
        odd: 3.0,
      },
      {
        clubName: "Celtics",
        odd: 3.25,
      },
      {
        clubName: "Bucks",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "LeBron James leads Lakers to victory, analysts praise his leadership",
        club: "Lakers",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Giannis Antetokounmpo dominates in playoffs, MVP contender continues streak",
        club: "Bucks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Stephen Curry breaks three-point record, Warriors fans celebrate milestone",
        club: "Warriors",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details: "Jayson Tatum leads Celtics comeback, Boston fans ecstatic",
        club: "Celtics",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Kevin Durant trade rumors circulate, multiple teams interested",
        club: "Nets",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Luka Doncic triple-double performance impresses scouts worldwide",
        club: "Mavericks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Lakers vs Warriors",
        detail: "NBA Finals 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Celtics vs Heat",
        detail: "NBA Eastern Conference Finals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Bucks vs 76ers",
        detail: "NBA Eastern Conference Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "LeBron James",
            clubName: "Lakers",
            clubImg: require("@src/assets/png/basketball1.png"),
            goals: 28,
          },
          {
            id: 2,
            footballerName: "Stephen Curry",
            clubName: "Warriors",
            clubImg: require("@src/assets/png/basketball2.png"),
            goals: 32,
          },
          {
            id: 3,
            footballerName: "Giannis Antetokounmpo",
            clubName: "Bucks",
            clubImg: require("@src/assets/png/basketball1.png"),
            goals: 35,
          },
          {
            id: 4,
            footballerName: "Jayson Tatum",
            clubName: "Celtics",
            clubImg: require("@src/assets/png/basketball2.png"),
            goals: 27,
          },
          {
            id: 5,
            footballerName: "Luka Doncic",
            clubName: "Mavericks",
            clubImg: require("@src/assets/png/basketball1.png"),
            goals: 31,
          },
          {
            id: 6,
            footballerName: "Kevin Durant",
            clubName: "Suns",
            clubImg: require("@src/assets/png/basketball2.png"),
            goals: 29,
          },
          {
            id: 7,
            footballerName: "Nikola Jokic",
            clubName: "Nuggets",
            clubImg: require("@src/assets/png/basketball1.png"),
            goals: 26,
          },
          {
            id: 8,
            footballerName: "Joel Embiid",
            clubName: "76ers",
            clubImg: require("@src/assets/png/man-u.png"),
            goals: 33,
          },
          {
            id: 9,
            footballerName: "Damian Lillard",
            clubName: "Trail Blazers",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 30,
          },
          {
            id: 10,
            footballerName: "Kawhi Leonard",
            clubName: "Clippers",
            clubImg: require("@src/assets/png/basketball2.png"),
            goals: 25,
          },
        ],
        club: [
          {
            name: "Lakers",
            image: require("@src/assets/png/fixture.png"),
            score: "112",
          },
          {
            name: "Warriors",
            image: require("@src/assets/png/fixture.png"),
            score: "108",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "EuroLeague",
    country: "Europe",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Real Madrid",
        odd: 2.5,
      },
      {
        clubName: "Barcelona",
        odd: 3.0,
      },
      {
        clubName: "CSKA Moscow",
        odd: 3.25,
      },
      {
        clubName: "Panathinaikos",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Real Madrid dominates EuroLeague, fans celebrate championship run",
        club: "Real Madrid",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Barcelona signs new star player, management optimistic about season",
        club: "Barcelona",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "CSKA Moscow upset victory shocks European basketball community",
        club: "CSKA Moscow",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Real Madrid vs Barcelona",
        detail: "EuroLeague Final Four 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "CSKA vs Panathinaikos",
        detail: "EuroLeague Playoffs 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Fenerbahce vs Olympiacos",
        detail: "EuroLeague Championship 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Sergio Rodriguez",
            clubName: "Real Madrid",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 24,
          },
          {
            id: 2,
            footballerName: "Nikola Mirotic",
            clubName: "Barcelona",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 22,
          },
        ],
        club: [
          {
            name: "Real Madrid",
            image: require("@src/assets/png/fixture.png"),
            score: "89",
          },
          {
            name: "Barcelona",
            image: require("@src/assets/png/fixture.png"),
            score: "85",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "CBA",
    country: "China",
    icon: require("@src/assets/png/basketball1.png"),
    odds: [
      {
        clubName: "Beijing Ducks",
        odd: 2.5,
      },
      {
        clubName: "Guangdong Tigers",
        odd: 3.0,
      },
      {
        clubName: "Shanghai Sharks",
        odd: 3.25,
      },
      {
        clubName: "Liaoning Flying Leopards",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Beijing Ducks secure playoff spot, fans excited for championship run",
        club: "Beijing Ducks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Guangdong Tigers sign former NBA star, roster strengthened significantly",
        club: "Guangdong Tigers",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Shanghai Sharks upset victory against title favorites surprises league",
        club: "Shanghai Sharks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Beijing Ducks vs Guangdong Tigers",
        detail: "CBA Finals 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Shanghai Sharks vs Liaoning Flying Leopards",
        detail: "CBA Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Xinjiang Flying Tigers vs Zhejiang Lions",
        detail: "CBA Regular Season 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jeremy Lin",
            clubName: "Beijing Ducks",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 26,
          },
          {
            id: 2,
            footballerName: "Yi Jianlian",
            clubName: "Guangdong Tigers",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 31,
          },
          {
            id: 3,
            footballerName: "Jimmer Fredette",
            clubName: "Shanghai Sharks",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 28,
          },
        ],
        club: [
          {
            name: "Beijing Ducks",
            image: require("@src/assets/png/fixture.png"),
            score: "98",
          },
          {
            name: "Guangdong Tigers",
            image: require("@src/assets/png/fixture.png"),
            score: "104",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    fixtureName: "NBA",
    country: "USA",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Lakers",
        odd: 2.5,
      },
      {
        clubName: "Warriors",
        odd: 3.0,
      },
      {
        clubName: "Celtics",
        odd: 3.25,
      },
      {
        clubName: "Bucks",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "LeBron James leads Lakers to victory, analysts praise his leadership",
        club: "Lakers",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Giannis Antetokounmpo dominates in playoffs, MVP contender continues streak",
        club: "Bucks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Stephen Curry breaks three-point record, Warriors fans celebrate milestone",
        club: "Warriors",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
      {
        id: 4,
        details: "Jayson Tatum leads Celtics comeback, Boston fans ecstatic",
        club: "Celtics",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 5,
        details:
          "Kevin Durant trade rumors circulate, multiple teams interested",
        club: "Nets",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 6,
        details:
          "Luka Doncic triple-double performance impresses scouts worldwide",
        club: "Mavericks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Lakers vs Warriors",
        detail: "NBA Finals 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Celtics vs Heat",
        detail: "NBA Eastern Conference Finals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Bucks vs 76ers",
        detail: "NBA Eastern Conference Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "LeBron James",
            clubName: "Lakers",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 28,
          },
          {
            id: 2,
            footballerName: "Stephen Curry",
            clubName: "Warriors",
            clubImg: require("@src/assets/png/chelsea.png"),
            goals: 32,
          },
          {
            id: 3,
            footballerName: "Giannis Antetokounmpo",
            clubName: "Bucks",
            clubImg: require("@src/assets/png/liverpool.png"),
            goals: 35,
          },
          {
            id: 4,
            footballerName: "Jayson Tatum",
            clubName: "Celtics",
            clubImg: require("@src/assets/png/totheham.png"),
            goals: 27,
          },
          {
            id: 5,
            footballerName: "Luka Doncic",
            clubName: "Mavericks",
            clubImg: require("@src/assets/png/arsenal.png"),
            goals: 31,
          },
          {
            id: 6,
            footballerName: "Kevin Durant",
            clubName: "Suns",
            clubImg: require("@src/assets/png/man-u.png"),
            goals: 29,
          },
          {
            id: 7,
            footballerName: "Nikola Jokic",
            clubName: "Nuggets",
            clubImg: require("@src/assets/png/arsenal.png"),
            goals: 26,
          },
          {
            id: 8,
            footballerName: "Joel Embiid",
            clubName: "76ers",
            clubImg: require("@src/assets/png/man-u.png"),
            goals: 33,
          },
          {
            id: 9,
            footballerName: "Damian Lillard",
            clubName: "Trail Blazers",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 30,
          },
          {
            id: 10,
            footballerName: "Kawhi Leonard",
            clubName: "Clippers",
            clubImg: require("@src/assets/png/chelsea.png"),
            goals: 25,
          },
        ],
        club: [
          {
            name: "Lakers",
            image: require("@src/assets/png/fixture.png"),
            score: "112",
          },
          {
            name: "Warriors",
            image: require("@src/assets/png/fixture.png"),
            score: "108",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    fixtureName: "EuroLeague",
    country: "Europe",
    icon: require("@src/assets/png/basketball1.png"),
    odds: [
      {
        clubName: "Real Madrid",
        odd: 2.5,
      },
      {
        clubName: "Barcelona",
        odd: 3.0,
      },
      {
        clubName: "CSKA Moscow",
        odd: 3.25,
      },
      {
        clubName: "Panathinaikos",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Real Madrid dominates EuroLeague, fans celebrate championship run",
        club: "Real Madrid",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Barcelona signs new star player, management optimistic about season",
        club: "Barcelona",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "CSKA Moscow upset victory shocks European basketball community",
        club: "CSKA Moscow",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Real Madrid vs Barcelona",
        detail: "EuroLeague Final Four 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "CSKA vs Panathinaikos",
        detail: "EuroLeague Playoffs 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Fenerbahce vs Olympiacos",
        detail: "EuroLeague Championship 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "16 July",
        topScorers: [
          {
            id: 1,
            footballerName: "Sergio Rodriguez",
            clubName: "Real Madrid",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 24,
          },
          {
            id: 2,
            footballerName: "Nikola Mirotic",
            clubName: "Barcelona",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 22,
          },
        ],
        club: [
          {
            name: "Real Madrid",
            image: require("@src/assets/png/fixture.png"),
            score: "89",
          },
          {
            name: "Barcelona",
            image: require("@src/assets/png/fixture.png"),
            score: "85",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    fixtureName: "CBA",
    country: "China",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Beijing Ducks",
        odd: 2.5,
      },
      {
        clubName: "Guangdong Tigers",
        odd: 3.0,
      },
      {
        clubName: "Shanghai Sharks",
        odd: 3.25,
      },
      {
        clubName: "Liaoning Flying Leopards",
        odd: 4.0,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Beijing Ducks secure playoff spot, fans excited for championship run",
        club: "Beijing Ducks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Guangdong Tigers sign former NBA star, roster strengthened significantly",
        club: "Guangdong Tigers",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Shanghai Sharks upset victory against title favorites surprises league",
        club: "Shanghai Sharks",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Beijing Ducks vs Guangdong Tigers",
        detail: "CBA Finals 2025",
        image: require("@src/assets/png/highlight1.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 2,
        feature: "Shanghai Sharks vs Liaoning Flying Leopards",
        detail: "CBA Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),

        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
      {
        id: 3,
        feature: "Xinjiang Flying Tigers vs Zhejiang Lions",
        detail: "CBA Regular Season 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
          "https://www.youtube.com/watch?v=ouH3ApIMHb0",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "17 Jun",
        topScorers: [
          {
            id: 1,
            footballerName: "Jeremy Lin",
            clubName: "Beijing Ducks",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 26,
          },
          {
            id: 2,
            footballerName: "Yi Jianlian",
            clubName: "Guangdong Tigers",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 31,
          },
          {
            id: 3,
            footballerName: "Jimmer Fredette",
            clubName: "Shanghai Sharks",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 28,
          },
        ],
        club: [
          {
            name: "Beijing Ducks",
            image: require("@src/assets/png/fixture.png"),
            score: "98",
          },
          {
            name: "Guangdong Tigers",
            image: require("@src/assets/png/fixture.png"),
            score: "104",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    fixtureName: "WNBA",
    country: "USA",
    icon: require("@src/assets/png/basketball1.png"),
    odds: [
      {
        clubName: "Las Vegas Aces",
        odd: 2.2,
      },
      {
        clubName: "New York Liberty",
        odd: 2.8,
      },
      {
        clubName: "Seattle Storm",
        odd: 3.5,
      },
      {
        clubName: "Phoenix Mercury",
        odd: 4.2,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "A'ja Wilson breaks WNBA scoring record, Aces fans celebrate historic moment",
        club: "Las Vegas Aces",
        time: "3 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Breanna Stewart leads Liberty to playoffs, championship hopes high",
        club: "New York Liberty",
        time: "5 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Sue Bird retirement ceremony draws emotional crowds in Seattle",
        club: "Seattle Storm",
        time: "2 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Las Vegas Aces vs New York Liberty",
        detail: "WNBA Finals 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
        ],
      },
      {
        id: 2,
        feature: "Seattle Storm vs Phoenix Mercury",
        detail: "WNBA Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
          "https://www.youtube.com/watch?v=ns4kM_xqACU",
          "https://www.youtube.com/watch?v=elnrftCjt9M",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "18 Aug",
        topScorers: [
          {
            id: 1,
            footballerName: "A'ja Wilson",
            clubName: "Las Vegas Aces",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 34,
          },
          {
            id: 2,
            footballerName: "Breanna Stewart",
            clubName: "New York Liberty",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 28,
          },
        ],
        club: [
          {
            name: "Las Vegas Aces",
            image: require("@src/assets/png/fixture.png"),
            score: "91",
          },
          {
            name: "New York Liberty",
            image: require("@src/assets/png/fixture.png"),
            score: "87",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    fixtureName: "NBL",
    country: "Australia",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Sydney Kings",
        odd: 2.6,
      },
      {
        clubName: "Melbourne United",
        odd: 3.1,
      },
      {
        clubName: "Perth Wildcats",
        odd: 3.4,
      },
      {
        clubName: "Tasmania JackJumpers",
        odd: 4.5,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Sydney Kings dominate regular season, championship favorites emerge",
        club: "Sydney Kings",
        time: "6 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Melbourne United sign former NBA veteran, roster depth improves",
        club: "Melbourne United",
        time: "1 hr ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details: "Perth Wildcats upset victory keeps playoff hopes alive",
        club: "Perth Wildcats",
        time: "4 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Sydney Kings vs Melbourne United",
        detail: "NBL Grand Final 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
        ],
      },
      {
        id: 2,
        feature: "Perth Wildcats vs Tasmania JackJumpers",
        detail: "NBL Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "15 Mar",
        topScorers: [
          {
            id: 1,
            footballerName: "Derrick Walton Jr.",
            clubName: "Sydney Kings",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 29,
          },
          {
            id: 2,
            footballerName: "Chris Goulding",
            clubName: "Melbourne United",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 25,
          },
          {
            id: 3,
            footballerName: "Bryce Cotton",
            clubName: "Perth Wildcats",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 31,
          },
        ],
        club: [
          {
            name: "Sydney Kings",
            image: require("@src/assets/png/fixture.png"),
            score: "96",
          },
          {
            name: "Melbourne United",
            image: require("@src/assets/png/fixture.png"),
            score: "88",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    fixtureName: "Basketball Africa League",
    country: "Africa",
    icon: require("@src/assets/png/basketball1.png"),
    odds: [
      {
        clubName: "US Monastir",
        odd: 2.3,
      },
      {
        clubName: "Petro de Luanda",
        odd: 2.9,
      },
      {
        clubName: "Al Ahly",
        odd: 3.6,
      },
      {
        clubName: "AS Salé",
        odd: 4.1,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "US Monastir wins BAL championship, Tunisian basketball celebrates",
        club: "US Monastir",
        time: "2 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Petro de Luanda's amazing comeback story inspires African youth",
        club: "Petro de Luanda",
        time: "5 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Al Ahly basketball program expands, Egyptian fans show support",
        club: "Al Ahly",
        time: "7 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "US Monastir vs Petro de Luanda",
        detail: "BAL Championship 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
        ],
      },
      {
        id: 2,
        feature: "Al Ahly vs AS Salé",
        detail: "BAL Playoffs 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "22 May",
        topScorers: [
          {
            id: 1,
            footballerName: "Michael Dixon",
            clubName: "US Monastir",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 27,
          },
          {
            id: 2,
            footballerName: "Carlos Morais",
            clubName: "Petro de Luanda",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 24,
          },
        ],
        club: [
          {
            name: "US Monastir",
            image: require("@src/assets/png/fixture.png"),
            score: "82",
          },
          {
            name: "Petro de Luanda",
            image: require("@src/assets/png/fixture.png"),
            score: "79",
          },
        ],
      },
    ],
  },
  {
    id: 7,
    fixtureName: "Liga ACB",
    country: "Spain",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Real Madrid",
        odd: 1.8,
      },
      {
        clubName: "FC Barcelona",
        odd: 2.4,
      },
      {
        clubName: "Valencia Basket",
        odd: 4.2,
      },
      {
        clubName: "Baskonia",
        odd: 5.1,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Real Madrid extends winning streak, Laso's tactics prove effective",
        club: "Real Madrid",
        time: "1 hr ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Barcelona basketball section invests in youth development program",
        club: "FC Barcelona",
        time: "3 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Valencia Basket surprises with upset victory over title contenders",
        club: "Valencia Basket",
        time: "6 hrs ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Real Madrid vs FC Barcelona",
        detail: "Liga ACB El Clasico 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
        ],
      },
      {
        id: 2,
        feature: "Valencia Basket vs Baskonia",
        detail: "Liga ACB Playoffs 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "14 Apr",
        topScorers: [
          {
            id: 1,
            footballerName: "Sergio Llull",
            clubName: "Real Madrid",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 21,
          },
          {
            id: 2,
            footballerName: "Nikola Mirotic",
            clubName: "FC Barcelona",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 19,
          },
          {
            id: 3,
            footballerName: "Mike Tobey",
            clubName: "Valencia Basket",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 23,
          },
        ],
        club: [
          {
            name: "Real Madrid",
            image: require("@src/assets/png/fixture.png"),
            score: "84",
          },
          {
            name: "FC Barcelona",
            image: require("@src/assets/png/fixture.png"),
            score: "81",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    fixtureName: "B.League",
    country: "Japan",
    icon: require("@src/assets/png/basketball2.png"),
    odds: [
      {
        clubName: "Chiba Jets",
        odd: 2.7,
      },
      {
        clubName: "Alvark Tokyo",
        odd: 3.0,
      },
      {
        clubName: "Ryukyu Golden Kings",
        odd: 3.8,
      },
      {
        clubName: "Kawasaki Brave Thunders",
        odd: 4.3,
      },
    ],
    news: [
      {
        id: 1,
        details:
          "Chiba Jets sign former NBA player, championship hopes soar high",
        club: "Chiba Jets",
        time: "2 hrs ago",
        image: require("@src/assets/png/news1.png"),
      },
      {
        id: 2,
        details:
          "Alvark Tokyo's home court advantage proves decisive in playoffs",
        club: "Alvark Tokyo",
        time: "4 hrs ago",
        image: require("@src/assets/png/news2.png"),
      },
      {
        id: 3,
        details:
          "Ryukyu Golden Kings upset victory shocks Japanese basketball fans",
        club: "Ryukyu Golden Kings",
        time: "1 hr ago",
        image: require("@src/assets/png/news4.png"),
      },
    ],
    matchHighLights: [
      {
        id: 1,
        feature: "Chiba Jets vs Alvark Tokyo",
        detail: "B.League Championship 2025",
        image: require("@src/assets/png/highlight1.png"),
        highLights: [
          "https://www.youtube.com/watch?v=ON18ItHo5YE",
          "https://www.youtube.com/watch?v=g8metHHWcx0",
        ],
      },
      {
        id: 2,
        feature: "Ryukyu Golden Kings vs Kawasaki Brave Thunders",
        detail: "B.League Semifinals 2025",
        image: require("@src/assets/png/highlight2.png"),
        highLights: [
          "https://www.youtube.com/watch?v=WRse9_XQuDc",
          "https://www.youtube.com/watch?v=OihgT6fRLrE",
        ],
      },
    ],
    matches: [
      {
        id: 1,
        date: "28 Feb",
        topScorers: [
          {
            id: 1,
            footballerName: "Yuki Togashi",
            clubName: "Chiba Jets",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 26,
          },
          {
            id: 2,
            footballerName: "Ryan Rossiter",
            clubName: "Alvark Tokyo",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 22,
          },
          {
            id: 3,
            footballerName: "Allen Durham",
            clubName: "Ryukyu Golden Kings",
            clubImg: require("@src/assets/png/fixture.png"),
            goals: 29,
          },
        ],
        club: [
          {
            name: "Chiba Jets",
            image: require("@src/assets/png/fixture.png"),
            score: "93",
          },
          {
            name: "Alvark Tokyo",
            image: require("@src/assets/png/fixture.png"),
            score: "90",
          },
        ],
      },
    ],
  },
];

export const fixturesOverview = [
  "Overview",
  "Matches",
  "Table",
  "News",
  "Odds",
  "Player Stats",
  "Team Stats",
];

export const odds = ["Outrights", "Specials"];

export const playerStats = [
  "All",
  "Goals",
  "Assists",
  "Red Cards",
  "Yellow Cards",
  "Shots on Target",
];

export const teamStats = [
  "All",
  "Goals Scored",
  "Goals COncealed",
  "Average Possession",
  "Shots on Target",
  "Total Shots",
  "Red Cards",
  "Yellow Cards",
];

export const bio = [
  {
    title: "170cm",
    desc: "Height",
  },
  {
    title: "38 years",
    desc: "Jun 24, 1987",
  },
  {
    title: "ARG",
    desc: "Country",
  },
];

export const leagueStats = [
  {
    title: "13",
    desc: "Matches",
  },
  {
    title: "10",
    desc: "Goals",
  },
  {
    title: "6",
    desc: "Assists",
  },
];
