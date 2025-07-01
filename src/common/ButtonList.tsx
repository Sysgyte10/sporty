import { CustomButton } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";

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
          <CustomButton
            title={item}
            key={index}
            onPress={() => onButtonPress(item)}
            buttonType='Solid'
            textType='regular'
            textSize={10}
            btnStyle={[
              styles.btn,
              {
                backgroundColor:
                  selectedBtn === item ? colors.purple : "#0D0D0D",
              },
            ]}
            textStyle={{
              color: selectedBtn === item ? colors.white : colors.lightGrey,
            }}
          />
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  btn: {
    paddingVertical: moderateScale(7),
    borderRadius: moderateScale(50),
    width: moderateScale(80),
  },
});
