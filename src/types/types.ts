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
  fixtureName: string;
  country: string;
  icon: ImageSourcePropType;
  matches: {
    club: {
      name: string;
      image: ImageSourcePropType;
      score: string;
    }[];
  }[];
};
