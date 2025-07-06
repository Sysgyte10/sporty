import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";

interface IButtonListProps {
  data: string[];
  onButtonPress: (item: string) => void;
  selectedBtn: string;
}

export const ButtonList: React.FC<IButtonListProps> = ({
  data,
  onButtonPress,
  selectedBtn,
}) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: moderateScale(5),
        gap: moderateScale(10),
      }}>
      {data &&
        data.map((item, index) => (
          <Animated.View
            entering={SlideInRight.springify().delay(index * 150)}
            key={index}>
            <TouchableOpacity
              onPress={() => onButtonPress(item)}
              style={[
                styles.btn,
                {
                  backgroundColor:
                    selectedBtn === item ? colors.purple : "#0D0D0D",
                },
              ]}>
              <CustomText
                type='regular'
                size={10}
                style={{
                  color: selectedBtn === item ? colors.white : colors.lightGrey,
                }}>
                {item}
              </CustomText>
            </TouchableOpacity>
          </Animated.View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(10),
    borderRadius: moderateScale(50),
  },
});
