import { NewsCard } from "@src/cards";
import { DVH, moderateScale, DVW } from "@src/resources/responsiveness";
import { newsDataTypes } from "@src/types/types";
import React from "react";
import {
  FlatList,
  Platform,
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated, { SlideInRight } from "react-native-reanimated";
import { Image } from "expo-image";
import { CustomText } from "@src/components/shared";

interface INewsTabProps {
  newsData: newsDataTypes[];
}

export const NewsTab: React.FC<INewsTabProps> = ({ newsData }) => {
  return (
    <View
      style={{
        paddingVertical: moderateScale(10),
        gap: moderateScale(15),
      }}>
      <TouchableOpacity style={styles.btn} activeOpacity={0.6}>
        <View style={[styles.bgImgContainer]}>
          <Image
            source={newsData[0]?.image}
            contentFit='fill'
            style={styles.bgImg}
          />
        </View>
        {/* Dark overlay to reduce brightness */}
        <View style={[styles.darkOverlay]} />
        <View style={styles.overLayContainer}>
          <CustomText
            type='semi-bold'
            size={14}
            style={[
              {
                color: "#FFFFFFB3",
              },
            ]}>
            {newsData[0]?.details}
          </CustomText>
          <CustomText type='semi-bold' size={10} lightGrey>
            {newsData[0]?.club} {" | "} {newsData[0]?.time}
          </CustomText>
        </View>
      </TouchableOpacity>
      <FlatList
        data={newsData}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: moderateScale(5),
        }}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2} // 👈 This makes it 2 items per row
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginBottom: moderateScale(10),
        }}
        renderItem={({ item, index }) => (
          <Animated.View
            entering={SlideInRight.delay(index * 100).duration(600)}
            style={{
              width: DVW(46), // 👈 roughly half of screen minus margins
              height: Platform.OS === "ios" ? DVH(25) : DVH(27),
            }}>
            <NewsCard
              newsItem={item}
              bgImgContainerStyle={{
                height: DVH(13),
              }}
              darkOverlayStyle={{
                height: DVH(13),
              }}
              topTextStyle={{
                fontSize:
                  Platform.OS === "ios" ? moderateScale(11) : moderateScale(10),
              }}
              bottomTextStyle={{
                fontSize: moderateScale(8),
              }}
            />
          </Animated.View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    paddingVertical: moderateScale(10),
    backgroundColor: "#242222",
    borderRadius: moderateScale(20),
    paddingHorizontal: moderateScale(7),
  },
  bgImgContainer: {
    width: "100%",
    height: DVH(20),
    overflow: "hidden",
  },
  bgImg: {
    width: "100%",
    height: "100%",
  },
  darkOverlay: {
    position: "absolute",
    height: DVH(20),
    marginTop: moderateScale(10),
    width: "100%",
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0.234)",
    borderRadius: moderateScale(15),
    alignSelf: "center",
  },
  overLayContainer: {
    width: "100%",
    paddingHorizontal: moderateScale(3),
    gap: moderateScale(10),
    paddingTop: moderateScale(10),
  },
});
