import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthStack } from "./auth-stack";
import { KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import { AppStack } from "./app-stack";

interface IRouterProps {
  isAuthenticated: boolean;
}

export const Router = ({ isAuthenticated }: IRouterProps) => {
  return (
    <>
      <NavigationContainer>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : undefined}
          style={styles.container}>
          {isAuthenticated ? <AppStack /> : <AuthStack />}
        </KeyboardAvoidingView>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
// This file sets up the main navigation structure for the app, conditionally rendering either the authentication stack or the main app stack based on the user's authentication status. It also includes a `KeyboardAvoidingView` to handle keyboard interactions gracefully on different platforms.
// The `Router` component takes an `isAuthenticated` prop to determine which stack to render. If the user is authenticated, it renders the `AppStack`, otherwise it renders the `Auth
