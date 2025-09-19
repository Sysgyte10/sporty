import { OddsCard } from "@src/cards";
import { ButtonList, SectionHeader } from "@src/common";
import { CustomText } from "@src/components/shared";
import { odds } from "@src/constants/fixtures";
import { moderateScale } from "@src/resources/responsiveness";
import { oddsDataType } from "@src/types/types";
import React, { useState } from "react";
import {
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IOddsTabProps {
  oddsData: oddsDataType[];
}

export const OddsTab: React.FC<IOddsTabProps> = ({ oddsData }) => {
  const [selectedItem, setSelectedItem] = useState<string>(odds[0]);
  return (
    <View>
      <View style={styles.btnListContainer}>
        <ButtonList
          data={odds}
          onButtonPress={(text) => setSelectedItem(text)}
          selectedBtn={selectedItem}
        />
      </View>
      <View>
        <SectionHeader
          leftText='FIFA CLUB WORLD CUP. 2025 - Finishing Position - Top 2 {1-2}'
          actionText=' '
          containerStyle={{
            marginBottom:
              Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
          }}
          leftTextStyle={{
            fontSize: moderateScale(11),
          }}
        />
        <FlatList
          data={oddsData}
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            marginTop: 0,
          }}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              // <Animated.View
              //   entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
              //   key={index}>
              <View key={index}>
                <OddsCard
                  oddsItem={item}
                  style={{
                    borderTopRightRadius:
                      index === 0 ? moderateScale(10) : undefined,
                    borderTopLeftRadius:
                      index === 0 ? moderateScale(10) : undefined,
                  }}
                />
              </View>
              // </Animated.View>
            );
          }}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                backgroundColor: "#242222",
                paddingVertical: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                borderBottomRightRadius: moderateScale(10),
                borderBottomLeftRadius: moderateScale(10),
              }}>
              <CustomText type='medium' size={12} purple>
                See all
              </CustomText>
            </TouchableOpacity>
          }
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </View>

      <View>
        <SectionHeader
          leftText='FIFA CLUB WORLD CUP. 2025 - Finishing Position - Top 4 {1-4}'
          actionText=' '
          containerStyle={{
            marginBottom:
              Platform.OS === "ios" ? moderateScale(-10) : moderateScale(-20),
          }}
          leftTextStyle={{
            fontSize: moderateScale(11),
          }}
        />
        <FlatList
          data={oddsData}
          contentContainerStyle={{
            paddingVertical: moderateScale(10),
            marginTop: 0,
          }}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            return (
              <Animated.View
                entering={FadeIn.delay(index * 200).duration(800)} // increase to 800ms or more
                key={index}>
                <OddsCard
                  oddsItem={item}
                  style={{
                    borderTopRightRadius:
                      index === 0 ? moderateScale(10) : undefined,
                    borderTopLeftRadius:
                      index === 0 ? moderateScale(10) : undefined,
                  }}
                />
              </Animated.View>
            );
          }}
          ListFooterComponent={
            <TouchableOpacity
              style={{
                backgroundColor: "#242222",
                paddingVertical: moderateScale(15),
                paddingHorizontal: moderateScale(20),
                borderBottomRightRadius: moderateScale(10),
                borderBottomLeftRadius: moderateScale(10),
              }}>
              <CustomText type='medium' size={12} purple>
                See all
              </CustomText>
            </TouchableOpacity>
          }
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btnListContainer: {
    paddingVertical: moderateScale(20),
  },
});
