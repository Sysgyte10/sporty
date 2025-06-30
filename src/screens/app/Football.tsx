import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { Text } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";

export const Football = ({}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <Text style={{ color: colors.white }}>Football</Text>
    </AppWrapper>
  );
};
