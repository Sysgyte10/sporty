import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/router/types";
import React from "react";
import { appScreenNames } from "@src/navigation";
import {
  BasketballFixtureInfo,
  FixtureInfo,
  Football,
  MatchHighlights,
  OneMach,
  TennisFixtureInfo,
} from "../football-screens";

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

export const FootBallStack = () => {
  return (
    <ScreenStack.Navigator screenOptions={headerOptions}>
      <ScreenStack.Screen name={appScreenNames.FOOTBALL} component={Football} />
      <ScreenStack.Screen
        name={appScreenNames.FIXTURE_INFO}
        component={FixtureInfo}
      />
      <ScreenStack.Screen
        name={appScreenNames.BASKETBALL_FIXTURE_INFO}
        component={BasketballFixtureInfo}
      />
      <ScreenStack.Screen
        name={appScreenNames.TENNIS_FIXTURE_INFO}
        component={TennisFixtureInfo}
      />
      <ScreenStack.Screen
        name={appScreenNames.MATCH_HIGHLIGHTS}
        component={MatchHighlights}
      />
      <ScreenStack.Screen name={appScreenNames.ONE_MATCH} component={OneMach} />
    </ScreenStack.Navigator>
  );
};
