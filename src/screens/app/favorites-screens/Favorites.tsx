import React, { useState } from "react";
import { AppWrapper } from "../../AppWrapper";
import { colors } from "@src/resources/color/color";
import { StyleSheet, Text, View } from "react-native";
import { RootStackScreenProps } from "@src/router/types";
import { appScreenNames } from "@src/navigation/navigation-names";
import { FootBallHeader } from "@src/components/app/football";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { Feather } from "@expo/vector-icons";
import { ButtonLineList, ButtonList } from "@src/common";
import { favoriteBtnList, favoritesList } from "@src/constants/football";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import {
  CompetitionTab,
  MatchTab,
  TeamTab,
} from "@src/components/app/favorites";

export const Favorites = ({
  navigation,
}: RootStackScreenProps<appScreenNames.FAVORITES>) => {
  const [selectedSport, setSelectedSport] = useState<string>(
    favoriteBtnList[0]
  );
  const [selectedLineList, setSelectedLineList] = useState<string>(
    favoritesList[0]
  );
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <FootBallHeader
        title='Favorites'
        showSearchIcon
        headerStyle={styles.header}
        rightIcon={
          <Feather name='heart' size={moderateScale(20)} color={colors.white} />
        }
      />
      <View
        style={{
          paddingVertical: moderateScale(10),
        }}>
        <ButtonLineList
          data={favoritesList}
          onButtonPress={(text) => setSelectedLineList(text)}
          selectedBtn={selectedLineList}
        />
      </View>
      {/* <ScrollContainer style={styles.scrollContainer}> */}
      <View
        style={{
          paddingVertical: moderateScale(10),
          paddingHorizontal: moderateScale(10),
        }}>
        <View style={styles.btnListContainer}>
          <ButtonList
            data={favoriteBtnList}
            onButtonPress={(text) => setSelectedSport(text)}
            selectedBtn={selectedSport}
          />
        </View>

        {selectedLineList === favoritesList[0] && <MatchTab />}
        {selectedLineList === favoritesList[1] && <CompetitionTab />}
        {selectedLineList === favoritesList[2] && <TeamTab />}
        {/* </ScrollContainer> */}
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(5),
  },
  scrollContainer: {
    paddingHorizontal: moderateScale(2),
    marginTop: moderateScale(5),
  },
  btnListContainer: {
    paddingVertical: moderateScale(10),
  },
});
