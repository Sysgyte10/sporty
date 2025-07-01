import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DVH, DVW, font, moderateScale } from "@src/resources/responsiveness";

type DotOnlyStepperProps = {
  bgColor: string;
  submitted: boolean;
  lastLengthOfData: number;
  item: string;
  index: number;
  textColor: string;
  lineWidth: number;
  lineHeight: number;
};

export const DotOnlyStepper: React.FC<DotOnlyStepperProps> = ({
  bgColor,
  submitted,
  lastLengthOfData,
  index,
  lineWidth,
  lineHeight,
}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>
        <View
          style={[
            styles.contentContainer,
            {
              backgroundColor: bgColor,
              paddingVertical: submitted ? moderateScale(7) : moderateScale(7),
            },
          ]}></View>
        {lastLengthOfData && lastLengthOfData !== index && (
          <View
            style={[
              styles.line,
              {
                backgroundColor: bgColor,
                height: DVH(lineHeight || 0.4),
                width: DVW(lineWidth || 17),
              },
            ]}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "column",
    width: DVW(18),
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
  contentTitle: {
    maxWidth: "60%",
    fontSize: font.size8,
    textAlign: "center",
  },
  contentContainer: {
    borderRadius: 100,
    paddingHorizontal: moderateScale(7),
  },
  text: {
    fontSize: moderateScale(10),
    fontWeight: "600",
    color: "white",
  },
  line: {
    marginLeft: DVW(-1),
  },
});
