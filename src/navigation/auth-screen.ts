import { authScreenTypes } from "@src/types/types";
import { authScreenNames } from "./navigation-names";
import {
  AgeSelection,
  Login,
  UserSelection,
  SignUp,
  Membership,
  Events,
  AnotherEvents,
  Insights,
  AnotherMembership,
  PredictionServices,
  DailyCoupon,
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
  {
    screenName: authScreenNames.EVENTS,
    component: Events,
  },
  {
    screenName: authScreenNames.ANOTHER_EVENTS,
    component: AnotherEvents,
  },
  {
    screenName: authScreenNames.INSIGHTS,
    component: Insights,
  },
  {
    screenName: authScreenNames.ANOTHER_MEMBERSHIP,
    component: AnotherMembership,
  },
  {
    screenName: authScreenNames.PREDICTION_SERVICES,
    component: PredictionServices,
  },
  {
    screenName: authScreenNames.DAILY_COUPON,
    component: DailyCoupon,
  },
];
