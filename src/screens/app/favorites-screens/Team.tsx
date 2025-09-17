import { ButtonLineList } from "@src/common";
import {
  TeamMatchesTab,
  TeamTableTab,
} from "@src/components/app/favorites/team";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

export const Team = ({
  route,
  navigation,
}: RootStackScreenProps<appScreenNames.TEAM>) => {
  const { screenTitle, screenDesc } = route?.params ?? {};
  const [selectedLineList, setSelectedLineList] = useState<string>("Matches");
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppNavigationHeader
        title={screenTitle}
        onPressActionBtn={() => navigation.goBack()}
        heartIcon
      />
      <View
        style={{
          paddingVertical: moderateScale(10),
        }}>
        <ButtonLineList
          data={["Matches", "Table"]}
          onButtonPress={(text) => setSelectedLineList(text)}
          selectedBtn={selectedLineList}
          minWidth={190}
        />
      </View>
      {selectedLineList === "Matches" && <TeamMatchesTab />}
      {selectedLineList === "Table" && <TeamTableTab />}
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(10),
  },
});
