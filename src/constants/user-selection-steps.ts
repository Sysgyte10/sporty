import { teamsDataType } from "@src/types/types";

export const userSelectionSteps = ["1", "2", "3", "4"];
export const sportyTypes = [
  "Football",
  "Basketball",
  "Volleyball",
  "Tennis",
  "Badminton",
  "Cricket",
  "Hockey",
  "Rugby",
  "Baseball",
  "Table Tennis",
  "Swimming",
  "Athletics",
  "Cycling",
  "Gymnastics",
  "Martial Arts",
  "Boxing",
  "Golf",
  "Skiing",
  "Surfing",
  "Rowing",
  "Ice Hockey",
];

export const teamsData: teamsDataType = [
  {
    club: "Manchester United",
    image: require("@src/assets/png/man-u.png"),
    country: "England",
  },
  {
    club: "Liverpool",
    image: require("@src/assets/png/liverpool.png"),
    country: "England",
  },
  {
    club: "Arsenal",
    image: require("@src/assets/png/arsenal.png"),
    country: "England",
  },
  {
    club: "Totteham Hotspur",
    image: require("@src/assets/png/totheham.png"),
    country: "England",
  },
  {
    club: "Chelsea",
    image: require("@src/assets/png/chelsea.png"),
    country: "England",
  },
];
