import { IGlobalModalMessageRef } from "@src/common";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RefObject } from "react";
import { ImageSourcePropType, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import { Image } from "expo-image";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { colors } from "@src/resources/color/color";

let modalRef: RefObject<IGlobalModalMessageRef | null> | null = null;

export const ModalMessageProvider = {
  setRef: (ref: RefObject<IGlobalModalMessageRef | null>) => {
    modalRef = ref;
  },
  showModalMsg: (msg: Parameters<IGlobalModalMessageRef["show"]>[0]) => {
    modalRef?.current?.show(msg);
  },
};

export const returnFormTitleNDesc = (index: number) => {
  if (index === 0) {
    return {
      title: "Add Teams",
      desc: "Select one one or more teams. These will appear in your favourite tab",
    };
  } else if (index === 1) {
    return {
      title: "Add Competitions",
      desc: "Select one one or more competitions. These will appear on the top of your scores tab.",
    };
  } else if (index === 2) {
    return {
      title: "Push Notification",
      desc: "Select the types of notifications you would like to receive for your favorites.",
    };
  }
};

interface IShowMsgOptionsProps {
  msgType: "SUCCESS" | "FAILED" | "ERROR";
  title?: string;
  description?: string;
  backgroundColor?: string;
  icon?: ImageSourcePropType;
}

export const showFlashMsg = ({
  msgType,
  title,
  description,
  backgroundColor,
  icon,
}: IShowMsgOptionsProps) => {
  if (msgType === "SUCCESS") {
    showMessage({
      message: title || "Success",
      description: description || "Successful Operation",
      type: "success",
      icon: () => (
        <View
          style={{
            width: DVW(10),
            height: DVH(5),
            borderRadius: moderateScale(10),
            marginRight: moderateScale(10),
          }}>
          <Image
            source={icon || require("@src/assets/png/success-icon.png")}
            contentFit='contain'
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </View>
      ),
      autoHide: true,
      duration: 2500,
      backgroundColor: backgroundColor || "#0C8242",
    });
  } else if (msgType === "ERROR") {
    showMessage({
      message: title || "Error",
      description: description || "Error in Operation",
      type: "danger",
      icon: () => (
        <View
          style={{
            width: DVW(10),
            height: DVH(5),
            borderRadius: moderateScale(10),
            marginRight: moderateScale(10),
          }}>
          {icon ? (
            <View
              style={{
                width: DVW(10),
                height: DVH(5),
                borderRadius: moderateScale(10),
                marginRight: moderateScale(10),
              }}>
              <Image
                source={icon}
                contentFit='contain'
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </View>
          ) : (
            <Ionicons
              name='close'
              color={colors.white}
              size={moderateScale(30)}
            />
          )}
        </View>
      ),
      autoHide: true,
      duration: 2500,
      backgroundColor: backgroundColor || colors.danger,
    });
  } else if (msgType === "FAILED") {
    showMessage({
      message: title || "Error",
      description: description || "An error occurred while processing request",
      type: "warning",
      icon: () =>
        icon ? (
          <View
            style={{
              width: DVW(10),
              height: DVH(5),
              borderRadius: moderateScale(10),
              marginRight: moderateScale(10),
            }}>
            <Image
              source={icon}
              contentFit='contain'
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </View>
        ) : (
          <View
            style={{
              width: DVW(10),
              height: DVH(5),
              borderRadius: moderateScale(10),
              marginRight: moderateScale(10),
            }}>
            <AntDesign
              name='questioncircle'
              color={colors.white}
              size={moderateScale(30)}
            />
          </View>
        ),
      autoHide: true,
      duration: 2500,
      backgroundColor: backgroundColor || "#CDDC27",
    });
  }
};
