import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { FormHeader } from "@src/common";
import { loginFormTypes, resetPasswordFormTypes } from "@src/form/types/types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema, resetPasswordValidationSchema } from "@src/form/validation-rule/rule";
import { CustomInput } from "@src/components/shared/input/CustomInput";
import { CustomButton, CustomText } from "@src/components/shared";
import { useAuth } from "@src/api/services/auth";

export const ResetPassword = ({ navigation, route }: AuthScreenProps<authScreenNames>) => {
    const params = route?.params;
    console.log(params);
    const {resetPassword,loading} = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<resetPasswordFormTypes>({
    mode: "onChange",
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const onSubmit = async (data: resetPasswordFormTypes) => {
    await resetPassword({
      email: String(params?.email),
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
      token: String(params?.token)
    });
  };
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <FormHeader
        title="Reset Password"
        description={"Please provide the information below\nto get reset password"}
        showBackBtn
        onPressBackBtn={() => navigation.goBack()}
      />
      <View
        style={{
          gap: moderateScale(20),
          marginTop: moderateScale(20)
        }}
      >
        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title="New Password"
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.newPassword?.message}
              type="password"
              placeholder="enter new password"
              placeHolderTextColor={colors.lightGrey}
              showErrorText
              style={styles.input}
            />
          )}
          name="newPassword"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title="Confirm Password"
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.confirmPassword?.message}
              type="password"
              placeholder="enter confirm password"
              placeHolderTextColor={colors.lightGrey}
              showErrorText
              style={styles.input}
            />
          )}
          name="confirmPassword"
          defaultValue=""
        />
      </View>

      <CustomButton
        title="Reset Password"
        buttonType="Solid"
        purple
        textWhite
        textType="semi-bold"
        textSize={16}
        onPress={handleSubmit(onSubmit)}
        btnStyle={styles.btn}
        isLoading={loading}
        loaderColor={colors?.white}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: moderateScale(5),
        }}
      >
        <CustomText type="regular" size={14} lightGrey>
          Don't have an account?
        </CustomText>
        <TouchableOpacity
          onPress={() => navigation.navigate(authScreenNames.LOGIN)}
        >
          <CustomText type="medium" size={14} purple>
            Login
          </CustomText>
        </TouchableOpacity>
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
