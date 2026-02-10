import React, { useEffect, useState } from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { Alert, StyleSheet, TouchableOpacity, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { ButtonList, FormHeader, Loader } from "@src/common";
import { StatusBar } from "expo-status-bar";
import { CustomButton, CustomText } from "@src/components/shared";
import { MaterialIcons } from "@expo/vector-icons";
import {
  sportyTypes,
  teamsData,
  userSelectionSteps,
} from "@src/constants/user-selection-steps";
import { useStepper } from "@src/stepper/hooks/useStepper";
import { FormStepper } from "@src/stepper/ui/Stepper";
import { CustomInput } from "@src/components/shared/input/CustomInput";
import { useForm } from "react-hook-form";
import {
  userSelectionStep1,
  userSelectionStep2,
  userSelectionStep3,
} from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  userSelectionStep1ValidationSchema,
  userSelectionStep2ValidationSchema,
  userSelectionStep3ValidationSchema,
} from "@src/form/validation-rule/rule";
import { Step1, Step2, Step3 } from "@src/components/auth/user-selection";
import {
  useAccountCreatedStore,
  useGoToPredictions,
  useSearchFilter,
} from "@src/hooks";
import { returnFormTitleNDesc } from "@src/helper/ui-utils";
import { AppHeader } from "../AppHeader";
import { useAuthStore } from "@src/api/store/auth";
import { useFetchSportData } from "@src/api/services/apiTransformService";
import {
  getLiveCurrentFixtureLeague,
  getStandingsLeagueIdSeasonTeamId,
  getTeamsByCountry,
  getTeamsById,
  getTeamsByLeagueAndSeason,
  getTeamsCountries,
  getTeamsSeasons,
  getVenuesById,
} from "@src/api/services/football.service";

export const UserSelection = ({
  navigation,
}: AuthScreenProps<authScreenNames.USER_SELECTION>) => {
  const { loading } = useFetchSportData();
  const [selectedSport, setSelectedSport] = useState<string>(sportyTypes[0]);
  const { filteredData, searchVal, setSearchVal } = useSearchFilter(
    teamsData,
    "club",
  );
  const { setIsAuthenticated } = useAuthStore();
  const { setGoToPredictions } = useGoToPredictions();
  const { hasCreatedAccount } = useAccountCreatedStore();

  useEffect(() => {
    const initiateData = async () => {
      //fetching data or any other side effects can be handled here
      await getStandingsLeagueIdSeasonTeamId(6, 2019, 32).then((data) => {
        console.log("Fetched standings by league id season team id:", data);
      });
    };
    initiateData();
  });

  //user selection step_1 form control
  const {
    control: step1Control,
    formState: { errors: step1Error },
    trigger: step1Trigger,
    setValue: setStep1Value,
    getValues: getStep1Value,
    clearErrors: clearStep1Errors,
  } = useForm<userSelectionStep1>({
    mode: "onChange",
    resolver: yupResolver(userSelectionStep1ValidationSchema),
  });

  //user selection step_2 form control
  const {
    control: step2Control,
    formState: { errors: step2Error },
    trigger: step2Trigger,
    setValue: setStep2Value,
    getValues: getStep2Value,
    clearErrors: clearStep2Errors,
  } = useForm<userSelectionStep2>({
    mode: "onChange",
    resolver: yupResolver(userSelectionStep2ValidationSchema),
  });

  //user selection step_3 form control
  const {
    control: step3Control,
    formState: { errors: step3Error },
    trigger: step3Trigger,
    setValue: setStep3Value,
    getValues: getStep3Value,
    clearErrors: clearStep3Errors,
  } = useForm<userSelectionStep3>({
    mode: "onChange",
    resolver: yupResolver(userSelectionStep3ValidationSchema),
  });

  //stepper logics and functions
  const {
    activeStepIndex,
    nextStep,
    prevStep,
    btnStepperText,
    submittedStepsIndex,
  } = useStepper(userSelectionSteps, "Next", "Submit");

  const steps = [
    <Step1
      useFormProps={{
        control: step1Control,
        errors: step1Error,
        setValues: setStep1Value,
        getValues: getStep1Value,
        clearErrors: clearStep1Errors,
      }}
      teamsData={filteredData}
    />,
    <Step2
      useFormProps={{
        control: step2Control,
        errors: step2Error,
        setValues: setStep2Value,
        getValues: getStep2Value,
        clearErrors: clearStep2Errors,
      }}
      teamsData={filteredData}
    />,
    <Step3
      useFormProps={{
        control: step3Control,
        errors: step3Error,
        setValues: setStep3Value,
        getValues: getStep3Value,
        clearErrors: clearStep3Errors,
      }}
      teamsData={filteredData}
    />,
  ];

  const onSubmit = async () => {
    let isValid = false;
    if (activeStepIndex === 0) {
      isValid = await step1Trigger();
      if (isValid) nextStep();
    } else if (activeStepIndex === 1) {
      isValid = await step2Trigger();
      if (isValid) nextStep();
    } else if (activeStepIndex === 2) {
      isValid = await step3Trigger();
      if (isValid) {
        navigation.replace(authScreenNames.AGE_SELECTION);
      }
    }
  };

  return (
    <>
      <StatusBar style='light' />
      <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
        <View style={styles.headerContainer}>
          <AppHeader
            // title='User Selection'
            // backArrow
            onGoBack={() => prevStep()}
          />
          {loading ? (
            <View>
              <Loader size={"small"} color={colors.purple} />
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => {
                Alert.alert("Info", "Where do you want to go?", [
                  {
                    text: "Dashboard",
                    onPress: () => {
                      if (hasCreatedAccount) {
                        setIsAuthenticated(true);
                        setGoToPredictions(false);
                      } else {
                        setIsAuthenticated(true);
                        setGoToPredictions(false);
                      }
                    },
                  },
                  {
                    text: "Predictions",
                    onPress: () => {
                      navigation.navigate(authScreenNames.LOGIN);
                      setGoToPredictions(false);
                    },
                  },
                  {
                    text: "Close",
                    onPress: () => {
                      setGoToPredictions(false);
                    },
                  },
                ]);
              }}>
              <CustomText size={16} type='medium' purple>
                Skip
              </CustomText>
            </TouchableOpacity>
          )}
        </View>
        <View
          style={{
            paddingLeft: moderateScale(30),
          }}>
          <FormStepper
            formSteps={userSelectionSteps}
            activeStep={activeStepIndex}
            submittedSteps={submittedStepsIndex}
            submittedBgColor={
              activeStepIndex > 0 ? `${colors.purple}` : colors.darkGrey
            }
            activeBgColor={`${colors.purple}`}
            inactiveBgColor={colors.lightGrey}
            stepperType='line-stepper'
            doNotShowTitle={true}
            lineHeight={0.5}
          />
        </View>
        <FormHeader
          style={styles.formTitle}
          title={String(returnFormTitleNDesc(activeStepIndex)?.title)}
          description={String(returnFormTitleNDesc(activeStepIndex)?.desc)}
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
          value={searchVal}
          onChangeText={(text) => setSearchVal(text)}
          placeholder='Search'
          placeHolderTextColor={colors.lightGrey}
          style={styles.input}
          inputStyle={{
            color: colors.white,
          }}
        />
        <View
          style={{
            marginTop: moderateScale(-10),
          }}>
          {steps[activeStepIndex]}
        </View>
        <View style={styles.actionContainer}>
          <CustomButton
            title={String(btnStepperText)}
            onPress={() => onSubmit()}
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
  formTitle: {
    paddingVertical: moderateScale(5),
  },
  appWrapper: {
    paddingHorizontal: moderateScale(15),
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
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
    paddingTop: moderateScale(7),
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.2),
    borderColor: colors.lightGrey,
    marginVertical: moderateScale(20),
    height: DVH(5),
  },
});
