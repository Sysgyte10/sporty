import {
  AuthStackParamList,
  BottomTabBarStackParamList,
  RootStackParamList,
} from "@src/router/types";
import { ImageSourcePropType } from "react-native";

export type authScreenTypes = {
  screenName: keyof AuthStackParamList;
  component: React.ComponentType<any>;
};

export type appScreenTypes = {
  screenName: keyof RootStackParamList;
  component: React.ComponentType<any>;
};

export type bottomTabScreenTypes = {
  screenName: keyof BottomTabBarStackParamList;
  component: React.ComponentType<any>;
};

export type teamsDataType = {
  club: string;
  country: string;
  image: ImageSourcePropType;
}[];

export type fixtureDataType = {
  id: number;
  fixtureName: string;
  country: string;
  icon: ImageSourcePropType;
  matches: matchesDataType[];
  matchHighLights: matchHightLightDataType[];
  news: newsDataTypes[];
};

export type topScorersDataType = {
  id: string | number | any;
  footballerName: string;
  clubName: string;
  clubImg: ImageSourcePropType;
  goals: number;
};

export type matchesDataType = {
  id: number;
  date: string;
  topScorers: topScorersDataType[];
  club: {
    name: string;
    image: ImageSourcePropType;
    score: string;
  }[];
};

export type matchHightLightDataType = {
  id: number;
  image: ImageSourcePropType;
  feature: string;
  detail: string;
};

export type newsDataTypes = {
  id: number;
  details: string;
  club: string;
  time: string;
  image: ImageSourcePropType;
};

export type goalsScoredDataType = {};
