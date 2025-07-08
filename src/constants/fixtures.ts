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
      // {
      //   date: "08 May",
      //   club: [
      //     {
      //       name: "Tekradi CFC",
      //       image: require("@src/assets/png/fixture.png"),
      //       score: "2",
      //     },
      //     {
      //       name: "Awka FC",
      //       image: require("@src/assets/png/fixture.png"),
      //       score: "0",
      //     },
      //   ],
      // },
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
