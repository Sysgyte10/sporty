import React from "react";
import { AppWrapper } from "../AppWrapper";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { colors } from "@src/resources/color/color";
import { DVW, moderateScale } from "@src/resources/responsiveness";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation";
import { FormHeader } from "@src/common";
import { loginFormTypes } from "@src/form/types/types";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "@src/form/validation-rule/rule";
import { CustomInput } from "@src/components/shared/input/CustomInput";
import { CustomButton, CustomText } from "@src/components/shared";

export const Login = ({ navigation }: AuthScreenProps<authScreenNames>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<loginFormTypes>({
    mode: "onChange",
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit = (data: loginFormTypes) => {
    if (data) {
      console.log(data);
    }
  };
  return (
    <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
      <FormHeader
        title='Welcome Back'
        description='Please provide the information below to get logged in'
      />
      <View
        style={{
          gap: moderateScale(20),
        }}>
        <Controller
          control={control}
          render={({ field }) => (
            <CustomInput
              title='Email'
              value={field.value}
              onChangeText={(enteredValue) => field.onChange(enteredValue)}
              error={errors?.email?.message}
              type='custom'
              placeholder='Your email'
              placeHolderTextColor={colors.lightGrey}
              keyboardType='email-address'
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
      </View>

      <CustomButton
        title='Login'
        buttonType='Solid'
        purple
        textWhite
        textType='semi-bold'
        textSize={16}
        onPress={handleSubmit(onSubmit)}
        btnStyle={styles.btn}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: moderateScale(5),
        }}>
        <CustomText type='regular' size={14} lightGrey>
          Don't have an account?
        </CustomText>
        <TouchableOpacity
          onPress={() => navigation.navigate(authScreenNames.SIGN_UP)}>
          <CustomText type='medium' size={14} purple>
            SignUp
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
