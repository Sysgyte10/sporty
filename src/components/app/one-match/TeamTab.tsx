import { CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { Platform, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import { OddsTab } from "../fixture-info";
import { footballFixtures } from "@src/constants/fixtures";

export const TeamTab: React.FC<{}> = () => {
  return (
    <ScrollContainer style={styles.scrollContainer}>
      <View>
        <CustomText
          type='semi-bold'
          size={12}
          lightGrey
          style={{
            paddingVertical: moderateScale(10),
            textAlign: "center",
          }}>
          20.06.2025 02:00
        </CustomText>

        <View style={styles.scoreContainer}>
          <View style={styles.clubImgContainer}>
            <Image
              source={require("@src/assets/png/totheham.png")}
              contentFit='fill'
              style={styles.clubImg}
            />
          </View>
          <CustomText type='bold' size={20} white>
            1 - 0
          </CustomText>
          <View style={styles.clubImgContainer}>
            <Image
              source={require("@src/assets/png/chelsea.png")}
              contentFit='fill'
              style={styles.clubImg}
            />
          </View>
        </View>
        <View
          style={[
            styles.scoreContainer,
            {
              paddingTop: moderateScale(25),
              paddingHorizontal: moderateScale(15),
            },
          ]}>
          <CustomText type='semi-bold' size={10} lightGrey>
            TOTHEHAM
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            FINISHED
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            CHELSEA
          </CustomText>
        </View>
      </View>
      <OddsTab oddsData={footballFixtures[0]?.odds} />
      <View
        style={{
          paddingVertical: DVH(5),
        }}
      />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
  clubImgContainer: {
    overflow: "hidden",
    borderRadius: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: "#242222",
  },
  clubImg: {
    width: DVW(10),
    height: Platform.OS === "ios" ? DVH(4) : DVH(5),
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(-20),
    paddingHorizontal: moderateScale(10),
  },
});
