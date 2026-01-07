import React from "react";
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from "@react-navigation/native-stack";
import { AuthStackParamList } from "./types";
import { authScreen, authScreenNames } from "@src/navigation";
import { useAccountCreatedStore, useGoToPredictions } from "@src/hooks";

const AuthScreenStack = createNativeStackNavigator<AuthStackParamList>();
const headerOptions: NativeStackNavigationOptions = { headerShown: false };

export const AuthStack = () => {
  const { goToPredictions } = useGoToPredictions();
  const { hasCreatedAccount } = useAccountCreatedStore();
  return (
    <AuthScreenStack.Navigator
      screenOptions={headerOptions}
      initialRouteName={
        !hasCreatedAccount && goToPredictions
          ? authScreenNames.SIGN_UP
          : hasCreatedAccount && goToPredictions
          ? authScreenNames.MEMBERSHIP
          : authScreenNames.USER_SELECTION
      }>
      {authScreen &&
        authScreen.map((screens, index) => (
          <AuthScreenStack.Screen
            name={screens.screenName}
            key={index}
            component={screens.component}
          />
        ))}
    </AuthScreenStack.Navigator>
  );
};
