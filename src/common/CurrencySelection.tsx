import { CustomText } from "@src/components/shared";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const currencySelections = [
  {
    currency: "NGN",
    sign: "₦",
  },
  {
    currency: "Dollar",
    sign: "$",
  },
  {
    currency: "Pounds",
    value: "£",
  },
  {
    currency: "Euro",
    value: "€",
  },
  {
    currency: "ZAR",
    value: "R",
  },
  {
    currency: "GHS",
    value: "₵",
  },
];

export const CurrencySelection: React.FC<{}> = () => {
  const [opened, setOpened] = useState<boolean>(false);
  const [selectedCurr, setSelectedCurr] = useState<string>(
    currencySelections[0].currency
  );
  return (
    <View
      style={{
        width: "27%",
        gap: moderateScale(5),
        zIndex: 10,
        position: "absolute",
        right: 0,
      }}>
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          setOpened(!opened);
        }}>
        <CustomText type='regular' size={12} white>
          {selectedCurr}
        </CustomText>
        <MaterialIcons
          name={opened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={moderateScale(20)}
          color={colors.white}
        />
      </TouchableOpacity>
      {opened && (
        <View style={styles.modal}>
          {currencySelections &&
            currencySelections.map((item, index) => (
              <TouchableOpacity
                style={styles.modalActionBtn}
                key={index}
                onPress={() => {
                  setSelectedCurr(item.currency);
                  setOpened(!opened);
                }}>
                <CustomText type='regular' size={13} black>
                  {item?.currency}
                </CustomText>
                <CustomText type='bold' size={14} black>
                  {item?.value}
                </CustomText>
              </TouchableOpacity>
            ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: moderateScale(5),
    borderWidth: DVW(0.1),
    borderColor: colors.white,
    borderRadius: moderateScale(12),
    paddingVertical: moderateScale(5),
    paddingHorizontal: moderateScale(7),
  },
  modal: {
    backgroundColor: colors.white,
    width: "100%",
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(5),
    borderRadius: moderateScale(10),
  },
  modalActionBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: moderateScale(5),
  },
});
