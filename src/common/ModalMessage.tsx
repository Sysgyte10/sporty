// import React, { forwardRef, useImperativeHandle, useState } from "react";
// import {
//   Modal,
//   View,
//   StyleSheet,
//   ImageSourcePropType,
//   StyleProp,
//   ViewStyle,
//   TextStyle,
//   TouchableOpacity,
// } from "react-native";
// import { Image } from "expo-image";
// import { CustomButton, CustomText } from "@src/components/shared";
// import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
// import { colors } from "@src/resources/color/color";
// import { AntDesign } from "@expo/vector-icons";

// export interface IModalMessageProps {
//   msgType: "SUCCESS" | "ERROR" | "FAILED";
//   title: string;
//   description: string;
//   icon?: ImageSourcePropType;
//   btnColor?: string;
//   containerStyle?: StyleProp<ViewStyle>;
//   btnTextStyle?: StyleProp<TextStyle>;
//   animationType?: "fade" | "slide" | "";
//   btnStyle?: StyleProp<ViewStyle>;
//   onClick?: () => void;
//   btnText?: string;
//   hideMsgIcon?: boolean;
//   descriptionStyle?: StyleProp<TextStyle>;
//   titleStyle?: StyleProp<TextStyle>;
//   showCloseBtn?: boolean;
//   shouldAllowCloseMsgOnCloseBtn?: boolean;
// }

// export interface IGlobalModalMessageRef {
//   show: (_config: IModalMessageProps) => void;
// }

// export const ModalMessage = forwardRef<IGlobalModalMessageRef>(
//   (_props, ref) => {
//     const [visible, setVisible] = useState(false);
//     const [modalData, setModalData] = useState<IModalMessageProps>({
//       hideMsgIcon: false,
//       showCloseBtn: false,
//       msgType: "SUCCESS",
//       title: "",
//       description: "",
//       icon: undefined,
//       btnColor: "",
//       containerStyle: {},
//       animationType: "",
//       btnStyle: {},
//       onClick: undefined,
//       btnText: "",
//       btnTextStyle: {},
//       descriptionStyle: {},
//     });

//     useImperativeHandle(ref, () => ({
//       show: (config) => {
//         setModalData(config);
//         setVisible(true);
//       },
//     }));

//     return (
//       <View>
//         <Modal
//           visible={visible}
//           transparent
//           animationType={modalData?.animationType || "fade"}>
//           <View style={styles.container}>
//             <View style={[styles.content, modalData.containerStyle]}>
//               {modalData?.hideMsgIcon ? null : (
//                 <Image
//                   source={
//                     modalData.icon
//                       ? modalData?.icon
//                       : modalData.msgType === "ERROR"
//                       ? require("@src/assets/png/danger.png")
//                       : modalData?.msgType === "FAILED"
//                       ? require("@src/assets/png/warning.png")
//                       : modalData?.msgType === "SUCCESS"
//                       ? require("@src/assets/png/success.png")
//                       : null
//                   }
//                   style={styles.icon}
//                 />
//               )}
//               {modalData?.showCloseBtn && (
//                 <TouchableOpacity
//                   style={[styles.closeBtn]}
//                   onPress={() =>
//                     modalData?.shouldAllowCloseMsgOnCloseBtn
//                       ? setVisible(false)
//                       : null
//                   }>
//                   <AntDesign
//                     name='close'
//                     size={moderateScale(10)}
//                     color={colors.white}
//                   />
//                 </TouchableOpacity>
//               )}

//               <CustomText
//                 size={14}
//                 type='regular'
//                 black
//                 style={[
//                   {
//                     textAlign: "center",
//                   },
//                   modalData?.titleStyle,
//                 ]}>
//                 {modalData.title}
//               </CustomText>
//               <CustomText
//                 size={14}
//                 type='regular'
//                 black
//                 style={[
//                   {
//                     textAlign: "center",
//                   },
//                   modalData?.descriptionStyle,
//                 ]}>
//                 {modalData.description}
//               </CustomText>
//               <CustomButton
//                 title={modalData?.btnText ? modalData?.btnText : "OK"}
//                 onPress={() => {
//                   if (modalData?.shouldAllowCloseMsgOnCloseBtn) {
//                     modalData.onClick?.();
//                   } else {
//                     setVisible(false);
//                   }
//                 }}
//                 buttonType='Solid'
//                 textType='medium'
//                 textWhite
//                 btnStyle={[
//                   styles.button,
//                   {
//                     backgroundColor: modalData?.btnColor
//                       ? modalData.btnColor
//                       : modalData?.msgType === "SUCCESS"
//                       ? "#0C8242"
//                       : modalData?.msgType === "ERROR"
//                       ? colors.danger
//                       : modalData?.msgType === "FAILED"
//                       ? "#CDDC27"
//                       : colors.danger,
//                   },
//                   modalData?.btnStyle,
//                 ]}
//                 textStyle={modalData?.btnTextStyle}
//               />
//             </View>
//           </View>
//         </Modal>
//       </View>
//     );
//   }
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "rgba(0,0,0,0.5)",
//     justifyContent: "center",
//     alignItems: "center",
//     zIndex: 10, // Add this
//   },
//   content: {
//     width: "85%",
//     backgroundColor: "#fff",
//     borderRadius: moderateScale(10),
//     padding: moderateScale(20),
//     // zIndex: 10000, // Add this
//   },
//   icon: {
//     width: DVW(20),
//     height: DVH(10),
//     alignSelf: "center",
//     marginBottom: moderateScale(15),
//   },
//   button: {
//     backgroundColor: "#0C8242",
//     borderRadius: moderateScale(50),
//     marginTop: moderateScale(15),
//   },
//   closeBtn: {
//     padding: moderateScale(5),
//     borderRadius: moderateScale(100),
//     backgroundColor: "#000000",
//     alignSelf: "flex-end",
//   },
// });

import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
} from "react";
import {
  View,
  StyleSheet,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Image } from "expo-image";
import { CustomButton, CustomText } from "@src/components/shared";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { AntDesign } from "@expo/vector-icons";

const { height } = Dimensions.get("window");

export interface IModalMessageProps {
  msgType: "SUCCESS" | "ERROR" | "FAILED";
  title: string;
  description: string;
  icon?: ImageSourcePropType;
  btnColor?: string;
  containerStyle?: StyleProp<ViewStyle>;
  btnTextStyle?: StyleProp<TextStyle>;
  animationType?: "fade" | "slide" | "";
  btnStyle?: StyleProp<ViewStyle>;
  onClick?: () => void;
  btnText?: string;
  hideMsgIcon?: boolean;
  descriptionStyle?: StyleProp<TextStyle>;
  titleStyle?: StyleProp<TextStyle>;
  showCloseBtn?: boolean;
  shouldAllowCloseMsgOnCloseBtn?: boolean;
}

export interface IGlobalModalMessageRef {
  show: (_config: IModalMessageProps) => void;
  hide: () => void;
}

export const ModalMessage = forwardRef<IGlobalModalMessageRef>(
  (_props, ref) => {
    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState<IModalMessageProps>({
      hideMsgIcon: false,
      showCloseBtn: false,
      msgType: "SUCCESS",
      title: "",
      description: "",
      icon: undefined,
      btnColor: "",
      containerStyle: {},
      animationType: "",
      btnStyle: {},
      onClick: undefined,
      btnText: "",
      btnTextStyle: {},
      descriptionStyle: {},
    });

    // Animation values
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const slideAnim = useRef(new Animated.Value(height)).current;
    const scaleAnim = useRef(new Animated.Value(0.8)).current;

    useEffect(() => {
      if (visible) {
        showAnimation();
      } else {
        hideAnimation();
      }
    }, [visible]);

    const showAnimation = () => {
      const animationType = modalData?.animationType || "fade";

      if (animationType === "slide") {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(slideAnim, {
            toValue: 0,
            damping: 15,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        // Fade animation (default)
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
          Animated.spring(scaleAnim, {
            toValue: 1,
            damping: 12,
            useNativeDriver: true,
          }),
        ]).start();
      }
    };

    const hideAnimation = () => {
      const animationType = modalData?.animationType || "fade";

      if (animationType === "slide") {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(slideAnim, {
            toValue: height,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      } else {
        Animated.parallel([
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(scaleAnim, {
            toValue: 0.8,
            duration: 200,
            useNativeDriver: true,
          }),
        ]).start();
      }
    };

    const hide = () => {
      setVisible(false);
    };

    useImperativeHandle(ref, () => ({
      show: (config) => {
        console.log("🔵 ModalMessage show called with:", config);
        setModalData(config);
        setVisible(true);
        console.log("🔵 Visible state set to true");
      },
      hide,
    }));

    if (!visible) {
      return null;
    }

    const animationType = modalData?.animationType || "fade";

    return (
      <Animated.View
        style={[
          styles.overlay,
          {
            opacity: fadeAnim,
          },
        ]}
        pointerEvents='box-none'>
        <TouchableWithoutFeedback
          onPress={() => {
            // Optional: Close modal when tapping outside
            // if (modalData?.shouldAllowCloseMsgOnCloseBtn) {
            //   hide();
            // }
          }}>
          <View style={styles.container}>
            <TouchableWithoutFeedback onPress={() => {}}>
              <Animated.View
                style={[
                  styles.content,
                  modalData.containerStyle,
                  animationType === "slide"
                    ? {
                        transform: [{ translateY: slideAnim }],
                      }
                    : {
                        transform: [{ scale: scaleAnim }],
                      },
                ]}>
                {modalData?.hideMsgIcon ? null : (
                  <Image
                    source={
                      modalData.icon
                        ? modalData?.icon
                        : modalData.msgType === "ERROR"
                        ? require("@src/assets/png/danger.png")
                        : modalData?.msgType === "FAILED"
                        ? require("@src/assets/png/warning.png")
                        : modalData?.msgType === "SUCCESS"
                        ? require("@src/assets/png/success.png")
                        : null
                    }
                    style={styles.icon}
                  />
                )}
                {modalData?.showCloseBtn && (
                  <TouchableOpacity
                    style={[styles.closeBtn]}
                    onPress={() => {
                      if (modalData?.shouldAllowCloseMsgOnCloseBtn) {
                        hide();
                      }
                    }}>
                    <AntDesign
                      name='close'
                      size={moderateScale(10)}
                      color={colors.white}
                    />
                  </TouchableOpacity>
                )}

                <CustomText
                  size={14}
                  type='regular'
                  black
                  style={[
                    {
                      textAlign: "center",
                    },
                    modalData?.titleStyle,
                  ]}>
                  {modalData.title}
                </CustomText>
                <CustomText
                  size={14}
                  type='regular'
                  black
                  style={[
                    {
                      textAlign: "center",
                    },
                    modalData?.descriptionStyle,
                  ]}>
                  {modalData.description}
                </CustomText>
                <CustomButton
                  title={modalData?.btnText ? modalData?.btnText : "OK"}
                  onPress={() => {
                    if (modalData?.shouldAllowCloseMsgOnCloseBtn) {
                      modalData.onClick?.();
                    } else {
                      hide();
                    }
                  }}
                  buttonType='Solid'
                  textType='medium'
                  textWhite
                  btnStyle={[
                    styles.button,
                    {
                      backgroundColor: modalData?.btnColor
                        ? modalData.btnColor
                        : modalData?.msgType === "SUCCESS"
                        ? "#0C8242"
                        : modalData?.msgType === "ERROR"
                        ? colors.danger
                        : modalData?.msgType === "FAILED"
                        ? "#CDDC27"
                        : colors.danger,
                    },
                    modalData?.btnStyle,
                  ]}
                  textStyle={modalData?.btnTextStyle}
                />
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Animated.View>
    );
  }
);

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 99999, // Increase this
    elevation: 99999, // Increase this for Android
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "85%",
    backgroundColor: "#fff",
    borderRadius: moderateScale(10),
    padding: moderateScale(20),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10, // Increase this
  },
  // ... rest of styles
  icon: {
    width: DVW(20),
    height: DVH(10),
    alignSelf: "center",
    marginBottom: moderateScale(15),
  },
  button: {
    backgroundColor: "#0C8242",
    borderRadius: moderateScale(50),
    marginTop: moderateScale(15),
  },
  closeBtn: {
    padding: moderateScale(5),
    borderRadius: moderateScale(100),
    backgroundColor: "#000000",
    alignSelf: "flex-end",
  },
});
