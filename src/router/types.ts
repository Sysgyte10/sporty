import { type ParamListBase } from "@react-navigation/native";
import { type NativeStackScreenProps } from "@react-navigation/native-stack";
import { type BottomTabScreenProps } from "@react-navigation/bottom-tabs";

//auth screen stack navigation
export interface AuthStackParamList extends ParamListBase {
  UserSelection: undefined;
  AgeSelection: undefined;
  Login: undefined;
  SignUp: undefined;
  Membership: undefined;
  Events: undefined;
  AnotherEvents: undefined;
  Insights: undefined;
  AnotherMembership: undefined;
}

export type AuthScreenProps<ScreenName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, ScreenName>;

//bottom tab-bar screen navigation
export interface BottomTabBarStackParamList extends ParamListBase {
  FootBallStack: undefined;
  FavoriteStack: undefined;
  ForYouStack: undefined;
}

export type BottomTabBarScreenProps<
  ScreenName extends keyof BottomTabBarStackParamList
> = BottomTabScreenProps<BottomTabBarStackParamList, ScreenName>;

//native and app screen navigation
export interface RootStackParamList extends ParamListBase {
  Football: undefined;
  Favorite: undefined;
  ForYou: undefined;
  FixtureInfo: {
    fixtureId: string | number | any;
  };
  MatchHighlights: {
    highLightId: string | number | any;
    fixtureId: string | number | any;
  };
  More: undefined;
  Notifications: undefined;
  Settings: undefined;
  Language: undefined;
  DefaultSport: undefined;
  ForYouNews: undefined;
  OneMatch: undefined;
  Team: {
    screenTitle: string;
    screenDesc: string;
  };
}

export type RootStackScreenProps<ScreenName extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, ScreenName>;
