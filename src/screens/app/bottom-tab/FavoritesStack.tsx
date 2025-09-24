import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/router/types";
import React from "react";
import { appScreenNames } from "@src/navigation";
import {
  AnotherPlayerTeam,
  AnotherTeam,
  Favorites,
  Team,
} from "../favorites-screens";

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

export const FavoritesStack = () => {
  return (
    <ScreenStack.Navigator screenOptions={headerOptions}>
      <ScreenStack.Screen
        name={appScreenNames.FAVORITES}
        component={Favorites}
      />
      <ScreenStack.Screen name={appScreenNames.TEAM} component={Team} />
      <ScreenStack.Screen
        name={appScreenNames.ANOTHER_TEAM}
        component={AnotherTeam}
      />
      <ScreenStack.Screen
        name={appScreenNames.ANOTHER_PLAYER_TEAM}
        component={AnotherPlayerTeam}
      />
    </ScreenStack.Navigator>
  );
};
