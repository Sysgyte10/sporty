import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { StyleSheet, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "../ScrollContainer";
import { ButtonLineList, ButtonList } from "@src/common";
import { sportyTypes } from "@src/constants/user-selection-steps";
import { FootBallHeader } from "@src/components/app/football";
import { footBallWatches } from "@src/constants/football";

export const Football = ({}: RootStackScreenProps<appScreenNames.FOOTBALL>) => {
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    footBallWatches[0]
  );
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <FootBallHeader
        title='ScoresWatch'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
      />
      <ScrollContainer style={styles.scrollContainer}>
        <View style={styles.btnListContainer}>
          <ButtonList
            data={sportyTypes}
            onButtonPress={(text) => setSelectedSport(text)}
            selectedBtn={selectedSport}
          />
        </View>
        <View style={styles.btnListContainer2}>
          <ButtonLineList
            data={footBallWatches}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
  },
  btnListContainer: {
    paddingVertical: moderateScale(20),
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
  },
  btnListContainer2: {
    paddingVertical: moderateScale(15),
  },
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(5),
  },
});
