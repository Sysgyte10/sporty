import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/router/types";
import React from "react";
import { appScreenNames } from "@src/navigation";
import { FixtureInfo, Football, MatchHighlights } from "../football-screens";

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
        name={appScreenNames.MATCH_HIGHLIGHTS}
        component={MatchHighlights}
      />
    </ScreenStack.Navigator>
  );
};
