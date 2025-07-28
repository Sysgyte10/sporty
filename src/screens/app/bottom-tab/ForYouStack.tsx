import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { RootStackParamList } from "@src/router/types";
import React from "react";
import { appScreenNames } from "@src/navigation";
import { ForYou, ForYouNews } from "../for-you-screens";

const ScreenStack = createNativeStackNavigator<RootStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

export const ForYouStack = () => {
  return (
    <ScreenStack.Navigator screenOptions={headerOptions}>
      <ScreenStack.Screen name={appScreenNames.FOR_YOU} component={ForYou} />
      <ScreenStack.Screen
        name={appScreenNames.FOR_YOU_NEWS}
        component={ForYouNews}
      />
    </ScreenStack.Navigator>
  );
};
