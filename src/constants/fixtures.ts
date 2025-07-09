import { fixtureDataType } from "@src/types/types";

export const footballFixtures: fixtureDataType[] = [
  {
    id: 1,
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
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
    ],
  },
  {
    id: 3,
    fixtureName: "MLS",
    country: "GH",
    icon: require("@src/assets/png/fixture.png"),
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

export const fixturesOverview = [
  "Overview",
  "Matches",
  "Table",
  "News",
  "Odds",
];
