import { CustomText } from "@src/components/shared";
import { moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NewsTab } from "../fixture-info";
import { footballFixtures } from "@src/constants/fixtures";

export const PlayersTab: React.FC<{}> = () => {
  return (
    <ScrollContainer style={styles.scrollContainer}>
      <CustomText
        type='semi-bold'
        size={12}
        lightGrey
        style={{
          marginTop: moderateScale(-10),
          textAlign: "center",
        }}>
        Countdown to:
      </CustomText>
      <View />
      {/* liner gradient card */}
      <CustomText type='semi-bold' lightGrey size={12}>
        Other Updates
      </CustomText>
      <NewsTab newsData={footballFixtures[0]?.news} />
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingVertical: moderateScale(10),
    paddingHorizontal: moderateScale(5),
  },
});
