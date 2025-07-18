import { appScreenTypes } from "@src/types/types";
import { appScreenNames } from "./navigation-names";
import { BottomTabStack } from "@src/router/bottom-tab-stack";
import { More, Notifications } from "@src/screens/app";

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
];
