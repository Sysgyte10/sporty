import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./navigation-names";
import {
  AgeSelection,
  Login,
  UserSelection,
  SignUp,
  Membership,
} from "@src/screens/auth";

export const authScreen: authScreenTypes[] = [
  {
    screenName: authScreenNames.USER_SELECTION,
    component: UserSelection,
  },
  {
    screenName: authScreenNames.AGE_SELECTION,
    component: AgeSelection,
  },
  {
    screenName: authScreenNames.LOGIN,
    component: Login,
  },
  {
    screenName: authScreenNames.SIGN_UP,
    component: SignUp,
  },
  {
    screenName: authScreenNames.MEMBERSHIP,
    component: Membership,
  },
];
