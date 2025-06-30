import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AuthScreenProps } from "@src/router/types";
import { authScreenNames } from "@src/navigation/navigation-names";
import { CustomText } from "@src/components/shared";

export const UserSelection =
  ({}: AuthScreenProps<authScreenNames.USER_SELECTION>) => {
    return (
      <AppWrapper safeArea bgColor={colors.black}>
        <CustomText type='regular' white size={16}>
          User Selection screen
        </CustomText>
      </AppWrapper>
    );
  };
