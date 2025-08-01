import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import {
  DefaultSport,
  Language,
  More,
  Notifications,
  Settings,
} from "@src/screens/app";

export const appScreen: appScreenTypes[] = [
  {
    screenName: appScreenNames.BOTTOM_TAB_STACK,
    component: BottomTabStack,
  },
  {
    screenName: appScreenNames.MORE,
    component: More,
  },
  {
    screenName: appScreenNames.NOTIFICATIONS,
    component: Notifications,
  },
  {
    screenName: appScreenNames.SETTINGS,
    component: Settings,
  },
  {
    screenName: appScreenNames.LANGUAGE,
    component: Language,
  },
  {
    screenName: appScreenNames.DEFAULT_SPORT,
    component: DefaultSport,
  },
];
