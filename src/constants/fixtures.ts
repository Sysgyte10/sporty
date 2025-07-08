import { fixtureDataType } from "@src/types/types";

export const footballFixtures: fixtureDataType[] = [
  {
    fixtureName: "MLS",
    country: "USA",
    icon: require("@src/assets/png/fixture.png"),
    matches: [
      {
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
    fixtureName: "MLS",
    country: "NG",
    icon: require("@src/assets/png/fixture.png"),
    matches: [
      {
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
];
