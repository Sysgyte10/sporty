import React, { useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { StyleSheet, View } from "react-native";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { ButtonList, FormHeader } from "@src/common";
import { StatusBar } from "expo-status-bar";
import { CustomButton } from "@src/components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import {
  sportyTypes,
  userSelectionSteps,
} from "@src/constants/user-selection-steps";
import { useStepper } from "@src/stepper/hooks/useStepper";
import { FormStepper } from "@src/stepper/ui/Stepper";
import { CustomInput } from "@src/components/shared/input/CustomInput";

export const UserSelection =
  ({}: AuthScreenProps<authScreenNames.USER_SELECTION>) => {
    const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
    const [searchValue, setSearchValue] = useState<string>("");
    const {
      activeStepIndex,
      nextStep,
      prevStep,
      btnStepperText,
      submittedStepsIndex,
    } = useStepper(userSelectionSteps, "Next", "Submit");
    return (
      <>
        <StatusBar style='light' />
        <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
          <View
            style={{
              paddingLeft: moderateScale(30),
            }}>
            <FormStepper
              formSteps={userSelectionSteps}
              activeStep={activeStepIndex}
              submittedSteps={submittedStepsIndex}
              submittedBgColor={
                activeStepIndex > 0 ? `${colors.lightGrey}` : colors.darkGrey
              }
              activeBgColor={`${colors.purple}`}
              inactiveBgColor={colors.white}
              stepperType='dot-only'
              doNotShowTitle={true}
              lineHeight={0.2}
            />
          </View>
          <FormHeader
            title='Add Teams'
            description='Select one one or more teams. These will appear in your favorite tab'
          />
          <View style={styles.btnListContainer}>
            <ButtonList
              data={sportyTypes}
              onButtonPress={(text) => setSelectedSport(text)}
              selectedBtn={selectedSport}
            />
          </View>
          <CustomInput
            type='custom'
            searchInput
            value={searchValue}
            onChangeText={(text) => setSearchValue(text)}
            placeholder='Search'
            placeHolderTextColor={colors.lightGrey}
            style={styles.input}
            inputStyle={{
              color: colors.white,
            }}
          />
          <View style={styles.actionContainer}>
            <CustomButton
              title='Next'
              onPress={() => {}}
              purple
              textWhite
              textType='medium'
              buttonType='Solid'
              rightIcon={
                <MaterialIcons
                  name='arrow-forward-ios'
                  size={moderateScale(15)}
                  color={colors.white}
                />
              }
              btnStyle={styles.actionButton}
            />
          </View>
        </AppWrapper>
      </>
    );
  };

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(15),
  },
  actionContainer: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    bottom: moderateScale(0),
    paddingBottom: moderateScale(35),
  },
  actionButton: {
    paddingVertical: moderateScale(13),
  },
  btnListContainer: {
    paddingVertical: moderateScale(10),
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.2),
    borderColor: colors.lightGrey,
    marginVertical: moderateScale(20),
    paddingVertical: moderateScale(2),
  },
});
