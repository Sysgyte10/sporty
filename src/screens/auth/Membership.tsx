import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { StyleSheet, View } from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { AppHeader } from "../AppHeader";
import { ButtonLineList, ButtonList, FormHeader } from "@src/common";
import { Regular } from "@src/components/auth/membership";
import { VVIP } from "@src/components/auth/membership/Vvip";

export const Membership = ({
  navigation,
}: AuthScreenProps<authScreenNames.MEMBERSHIP>) => {
  const [selectedBtn, setSelectedBtn] = useState<string>("Guest");
  const [selectedPlan, setSelectedPlan] = useState<string>("Weekly");
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppHeader
        backArrow
        onGoBack={() => navigation.goBack()}
        title='Membership'
      />
      <FormHeader
        title='Membership'
        description='Please choose any membership of your choice'
      />
      <ButtonLineList
        data={["Guest", "Member"]}
        onButtonPress={(item) => setSelectedBtn(item)}
        selectedBtn={selectedBtn}
        minWidth={180}
      />
      {selectedBtn === "Member" && (
        <View
          style={{
            paddingVertical: moderateScale(10),
          }}>
          <ButtonList
            data={["Weekly", "Monthly", "Yearly"]}
            onButtonPress={(item) => setSelectedPlan(item)}
            selectedBtn={selectedPlan}
          />
        </View>
      )}
      {selectedBtn === "Guest" && <Regular />}
      {selectedBtn === "Member" && (
        <VVIP
          selectedType={selectedPlan}
          onActionPress={() => navigation.navigate(authScreenNames.EVENTS)}
        />
      )}
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(15),
    gap: moderateScale(15),
  },
});
