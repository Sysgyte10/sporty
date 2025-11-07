import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { AppHeader } from "../AppHeader";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { ScrollContainer } from "../ScrollContainer";
import { Controller, useForm } from "react-hook-form";
import { signUpFormTypes } from "@src/form/types/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpValidationSchema } from "@src/form/validation-rule/rule";
import { CustomInput } from "@src/components/shared/input/CustomInput";
import { FormHeader } from "@src/common";
import { CustomPhoneInput } from "@src/components/shared/input/CustomPhoneInput";
import { CustomButton } from "@src/components/shared";

export const SignUp = ({
  navigation,
}: AuthScreenProps<authScreenNames.SIGN_UP>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormTypes>({
    mode: "onChange",
    resolver: yupResolver(signUpValidationSchema),
  });

  const onSubmit = (data: signUpFormTypes) => {
    if (data) {
      console.log(data);
      navigation.navigate(authScreenNames.EVENTS);
    }
  };

  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <AppHeader
        backArrow
        title='Sign Up'
        onGoBack={() => navigation.goBack()}
      />
      <ScrollContainer
        style={{
          gap: moderateScale(20),
          marginTop: moderateScale(10),
        }}>
        <FormHeader
          title='Welcome to RealSc⚽rZ'
          description='Please provide the information below to get started'
        />
        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title='First name'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.first_name?.message}
              type='custom'
              placeholder='Your first name'
              placeHolderTextColor={colors.lightGrey}
              keyboardType='default'
              showErrorText
              style={styles.input}
            />
          )}
          name='first_name'
          defaultValue=''
        />

        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title='Last name'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.last_name?.message}
              type='custom'
              placeholder='Your last name'
              placeHolderTextColor={colors.lightGrey}
              keyboardType='default'
              showErrorText
              style={styles.input}
            />
          )}
          name='last_name'
          defaultValue=''
        />

        <Controller
          control={control}
          render={({ field }) => (
            <CustomPhoneInput
              title='Phone Number'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.phone_number?.message}
              placeholder='800 000 0000'
              showErrorText
              style={styles.input}
              placeHolderTextColor={colors.lightGrey}
              titleColor={"#484848"}
              inputStyle={{ color: colors.white }}
            />
          )}
          name='phone_number'
          defaultValue=''
        />

        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title='Email'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.email?.message}
              type='custom'
              placeholder='johndoe@example.com'
              placeHolderTextColor={colors.lightGrey}
              keyboardType='default'
              showErrorText
              style={styles.input}
            />
          )}
          name='email'
          defaultValue=''
        />

        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title='Password'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.password?.message}
              type='password'
              placeholder='Enter your password'
              placeHolderTextColor={colors.lightGrey}
              showErrorText
              style={styles.input}
            />
          )}
          name='password'
          defaultValue=''
        />
        <View
          style={{
            paddingVertical: DVH(10),
          }}
        />
      </ScrollContainer>
      <View
        style={{
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
          bottom: 0,
          paddingBottom: moderateScale(40),
          width: "100%",
          alignSelf: "center",
          backgroundColor: colors.black,
        }}>
        <CustomButton
          title='Sign Up'
          buttonType='Solid'
          purple
          textWhite
          textType='semi-bold'
          textSize={16}
          onPress={handleSubmit(onSubmit)}
          btnStyle={styles.btn}
        />
      </View>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(15),
  },
  input: {
    backgroundColor: "transparent",
    borderWidth: DVW(0.3),
    borderColor: colors.lightGrey,
  },
  btn: {
    paddingVertical: moderateScale(12),
    marginVertical: moderateScale(20),
  },
});
