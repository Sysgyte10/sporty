import { authScreenNames } from "@src/navigation";
import { AuthScreenProps } from "@src/router/types";
import React from "react";
import { AppWrapper } from "../AppWrapper";
import { colors } from "@src/resources/color/color";
import { AppNavigationHeader } from "../AppHeader";
import { FootBallHeader } from "@src/components/app/football";
import { ScrollView, StyleSheet, View } from "react-native";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { CustomButton, CustomText } from "@src/components/shared";
import { games } from "@src/constants/games";
import { Image } from "expo-image";
import { ScrollContainer } from "../ScrollContainer";

export const Games = ({
  navigation,
}: AuthScreenProps<authScreenNames.GAMES>) => {
  return (
    <AppWrapper safeArea bgColor={colors.black}>
      <AppNavigationHeader
        title='Back'
        onPressActionBtn={() => navigation.goBack()}
      />
      <FootBallHeader
        title='RealSc⚽rZ'
        showSearchIcon
        showMenuIcon
        headerStyle={styles.header}
        onPressMenuIcon={() => {}}
      />
      <ScrollContainer>
        <View style={styles.subContainer}>
          <CustomText size={18} white type='semi-bold'>
            Games
          </CustomText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: moderateScale(20),
              gap: moderateScale(15),
              marginBottom: moderateScale(15),
            }}>
            {games &&
              games.map((game, index) => (
                <View
                  key={index}
                  style={[
                    styles.imgCardContainer,
                    {
                      width: DVW(35),
                    },
                  ]}>
                  <Image
                    source={game.image}
                    style={styles.img}
                    contentFit='fill'
                  />
                </View>
              ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: moderateScale(20),
              gap: moderateScale(15),
            }}>
            {games &&
              games.map((game, index) => (
                <View
                  key={index}
                  style={[
                    styles.imgCardContainer,
                    {
                      width: DVW(35),
                    },
                  ]}>
                  <Image
                    source={game.image}
                    style={styles.img}
                    contentFit='fill'
                  />
                </View>
              ))}
          </ScrollView>
        </View>

        <View style={styles.subContainer}>
          <CustomText size={18} white type='semi-bold'>
            Live
          </CustomText>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: moderateScale(20),
              gap: moderateScale(15),
              marginBottom: moderateScale(15),
            }}>
            {games &&
              games.map((game, index) => (
                <View
                  key={index}
                  style={{
                    width: DVW(45),
                    paddingVertical: moderateScale(10),
                  }}>
                  <View style={styles.imgCardContainer}>
                    <Image
                      source={game.image}
                      style={styles.img}
                      contentFit='fill'
                    />
                  </View>
                  <CustomText
                    type='regular'
                    size={12}
                    white
                    style={{
                      textAlign: "left",
                      paddingVertical: moderateScale(10),
                    }}>
                    {game.description}
                  </CustomText>
                  <CustomButton
                    title={"Play now"}
                    textType='regular'
                    textWhite
                    onPress={() => {
                      navigation.navigate(authScreenNames.UPGRADE_MEMBERSHIP);
                    }}
                    buttonType='Solid'
                    btnStyle={{
                      alignItems: "center",
                      paddingVertical: moderateScale(6),
                      width: "65%",
                      alignSelf: "center",
                    }}
                    purple
                    textSize={9}
                  />
                </View>
              ))}
          </ScrollView>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingRight: moderateScale(20),
              gap: moderateScale(15),
            }}>
            {games &&
              games.map((game, index) => (
                <View
                  key={index}
                  style={{
                    width: DVW(45),
                    paddingVertical: moderateScale(10),
                  }}>
                  <View style={styles.imgCardContainer}>
                    <Image
                      source={game.image}
                      style={styles.img}
                      contentFit='fill'
                    />
                  </View>
                  <CustomText
                    type='regular'
                    size={12}
                    white
                    style={{
                      textAlign: "left",
                      paddingVertical: moderateScale(10),
                    }}>
                    {game.description}
                  </CustomText>
                  <CustomButton
                    title={"Play now"}
                    textType='regular'
                    textWhite
                    onPress={() => {
                      navigation.navigate(authScreenNames.LOGIN);
                    }}
                    buttonType='Solid'
                    btnStyle={{
                      alignItems: "center",
                      paddingVertical: moderateScale(6),
                      width: "65%",
                      alignSelf: "center",
                    }}
                    purple
                    textSize={9}
                  />
                </View>
              ))}
          </ScrollView>
        </View>
        <View
          style={{
            paddingVertical: DVH(10),
          }}
        />
      </ScrollContainer>
    </AppWrapper>
  );
};

const styles = StyleSheet.create({
  header: {
    borderBottomWidth: DVW(0.2),
    borderBottomColor: "#5c5757",
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(10),
  },
  subContainer: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(10),
  },
  imgCardContainer: {
    width: "100%",
    height: DVH(13),
    borderRadius: moderateScale(10),
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});
