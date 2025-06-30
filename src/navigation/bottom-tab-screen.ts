import { bottomTabScreenTypes } from "@src/types/types";
import { bottomTabScreenNames } from "./navigation-names";
import {
  FavoritesStack,
  FootBallStack,
  ForYouStack,
} from "@src/screens/app/bottom-tab";

export const bottomTabBarScreen: bottomTabScreenTypes[] = [
  {
    screenName: bottomTabScreenNames.FOOTBALL_STACK,
    component: FootBallStack,
  },
  {
    screenName: bottomTabScreenNames.FAVORITES_STACK,
    component: FavoritesStack,
  },
  {
    screenName: bottomTabScreenNames.FOR_YOU_STACK,
    component: ForYouStack,
  },
];
