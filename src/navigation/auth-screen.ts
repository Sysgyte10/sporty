import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./navigation-names";
import { AgeSelection, UserSelection } from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.USER_SELECTION,
    component: UserSelection,
  },
  {
    screenName: authScreenNames.AGE_SELECTION,
    component: AgeSelection,
  },
];
