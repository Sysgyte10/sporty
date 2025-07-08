import { appScreenNames } from "@src/navigation";
import { RootStackScreenProps } from "@src/router/types";
import React, { useEffect, useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AppNavigationHeader } from "../AppHeader";
import { ScrollContainer } from "../ScrollContainer";
import { ButtonLineList } from "@src/common";
import { fixturesOverview, footballFixtures } from "@src/constants/fixtures";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";
import { matchesDataType } from "@src/types/types";
import Animated, { FadeIn } from "react-native-reanimated";
import { OverviewTab } from "@src/components/app/fixture-info";

export const FixtureInfo = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.FIXTURE_INFO>) => {
  const id = route?.params?.fixtureId;
  const [filteredMatches, setFilteredMatches] = useState<matchesDataType[]>([]);
  const [selectedLineList, setSelectedLineList] = useState<string>(
    fixturesOverview[0]
  );

  const getMatches = () => {
    const filteredData = footballFixtures.find((f) => f.id === id);
    setFilteredMatches(filteredData?.matches ?? []);
  };

  useEffect(() => {
    getMatches();
  }, [id]);

  console.log("Fixture Id is", id);
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppNavigationHeader
        title='Back'
        notificationIcon
        heartIcon
        onPressActionBtn={() => navigation.goBack()}
      />
      <ScrollContainer>
        <View style={styles.ctaContainer}>
          <View style={styles.ctaImgContainer}>
            <Image
              source={require("@src/assets/png/fifa.png")}
              style={styles.ctaImg}
              contentFit='fill'
            />
          </View>
          <View style={styles.ctaTitle}>
            <CustomText size={14} white type='semi-bold'>
              FIFA Club World Cup: Group B
            </CustomText>
            <CustomText size={12} lightGrey type='medium'>
              International
            </CustomText>
          </View>
        </View>
        <View>
          <ButtonLineList
            data={fixturesOverview}
            onButtonPress={(text) => setSelectedLineList(text)}
            selectedBtn={selectedLineList}
          />
        </View>
        <View style={styles.textBtnContainer}>
          <CustomText type='medium' size={14} lightGrey>
            MATCHES
          </CustomText>
          <TouchableOpacity>
            <CustomText type='medium' size={14} lightGrey>
              See All
            </CustomText>
          </TouchableOpacity>
        </View>
        {selectedLineList === fixturesOverview[0] && (
          <Animated.View entering={FadeIn.delay(200).duration(600)}>
            <OverviewTab matches={filteredMatches} />
          </Animated.View>
        )}
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(0),
  },
  ctaContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(10),
    paddingVertical: moderateScale(20),
  },
  ctaImgContainer: {
    width: DVW(20),
    height: DVH(10),
    overflow: "hidden",
  },
  ctaImg: {
    width: "100%",
    height: "100%",
  },
  ctaTitle: {
    gap: moderateScale(10),
  },
  textBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(15),
  },
});
