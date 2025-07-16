import React from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import { Text } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";

export const ForYou = ({}: RootStackScreenProps<appScreenNames.FOR_YOU>) => {
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <Text style={{ color: colors.white }}>For You</Text>
    </AppWrapper>
  );
};
