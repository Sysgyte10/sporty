import { CustomText } from "@src/components/shared";
import { appScreenNames } from "@src/navigation";
import { colors } from "@src/resources/color/color";
import { DVH, DVW, moderateScale } from "@src/resources/responsiveness";
import { RootStackScreenProps } from "@src/router/types";
import { AppNavigationHeader } from "@src/screens/AppHeader";
import { AppWrapper } from "@src/screens/AppWrapper";
import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { extractYouTubeVideoId } from "@src/helper/utils";
import YoutubePlayer from "react-native-youtube-iframe";
import { Image } from "expo-image";
import { VideoModal } from "@src/components/app/match-highlights";
import { useMatchHighlights } from "@src/hooks";
import Animated, { SlideInDown } from "react-native-reanimated";
import { SkeletonLoader } from "@src/common";
import { StatusBar } from "expo-status-bar";

export const MatchHighlights = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.MATCH_HIGHLIGHTS>) => {
  const { highLightId, fixtureId, data } = route?.params;
  const [videoModalState, setVideoModalState] = useState({
    visible: false,
    videoId: "",
  });
  const {
    getMatchHighLightData,
    getYouTubeVideoData,
    setPlaying,
    playing,
    videoDetails,
    loading,
    setVideoDetails,
    highLightData,
  } = useMatchHighlights(highLightId, fixtureId, data);

  const onStateChange = useCallback((state: any) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  useEffect(() => {
    getMatchHighLightData();
  }, []);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!highLightData?.highLights) return;

      const results = await Promise.all(
        highLightData.highLights.map(async (url) => {
          const res = await getYouTubeVideoData(url);
          return res; // will be { videoId, videoTitle, videoImgUrl, channelTitle }
        })
      );

      // Filter out nulls (in case some fetches failed)
      setVideoDetails(results.filter(Boolean));
      console.log("video res", results.filter(Boolean));
    };

    fetchVideos();
  }, [highLightData]);

  return (
    <>
      <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
        <StatusBar style='light' />
        <AppNavigationHeader
          title='Back'
          onPressActionBtn={() => navigation.goBack()}
          middleText='Match Highlights'
        />
        <View style={styles.ctaContainer}>
          <View style={styles.youtubeContainer}>
            <YoutubePlayer
              height={400}
              play={playing}
              videoId={extractYouTubeVideoId(
                String(highLightData?.highLights[0])
              )}
              onChangeState={onStateChange}
            />
          </View>
          <View
            style={{
              paddingHorizontal: moderateScale(10),
              gap: moderateScale(20),
            }}>
            <CustomText
              type='medium'
              size={14}
              style={{
                color: "#ffffffe2",
              }}>
              {videoDetails[0]?.videoTitle}
            </CustomText>
            <View style={styles.bottomTextContainer}>
              <CustomText type='semi-bold' size={13} lightGrey>
                Chelsea
              </CustomText>
              <CustomText type='semi-bold' size={13} lightGrey>
                |
              </CustomText>
              <CustomText type='semi-bold' size={13} lightGrey>
                4h
              </CustomText>
            </View>
          </View>
        </View>
        {loading ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              gap: moderateScale(10),
            }}>
            {Array.from({ length: 5 }).map((_, index) => (
              <View
                key={index}
                style={{
                  gap: moderateScale(10),
                }}>
                <SkeletonLoader width={45} height={10} />
                <SkeletonLoader width={40} height={2} />
                <SkeletonLoader width={30} height={1} />
              </View>
            ))}
          </View>
        ) : (
          <FlatList
            data={videoDetails}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
              marginBottom: moderateScale(10),
            }}
            contentContainerStyle={{
              gap: moderateScale(5),
              marginTop: moderateScale(10),
            }}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <Animated.View
                  entering={SlideInDown.delay(index * 200).duration(800)}
                  key={index}>
                  <TouchableOpacity
                    onPress={() =>
                      setVideoModalState({
                        ...videoModalState,
                        visible: true,
                        videoId: item?.videoId,
                      })
                    }
                    activeOpacity={0.6}
                    style={{
                      width: DVW(46),
                      paddingVertical: moderateScale(7),
                      borderRadius: moderateScale(10),
                      backgroundColor: "#242222",
                      paddingHorizontal: moderateScale(7),
                      gap: moderateScale(10),
                    }}>
                    <View style={styles.itemImgContainer}>
                      <Image
                        style={styles.itemImg}
                        source={{ uri: item?.videoImgUrl }}
                        contentFit='cover'
                        cachePolicy={"disk"}
                      />
                    </View>
                    <CustomText
                      type='medium'
                      size={9}
                      style={{
                        color: "#ffffffe2",
                      }}>
                      {item?.videoTitle}
                    </CustomText>
                    <View>
                      <View style={styles.bottomTextContainer}>
                        <CustomText type='semi-bold' size={8} lightGrey>
                          Chelsea
                        </CustomText>
                        <CustomText type='semi-bold' size={8} lightGrey>
                          |
                        </CustomText>
                        <CustomText type='semi-bold' size={8} lightGrey>
                          4h
                        </CustomText>
                      </View>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              );
            }}
            maxToRenderPerBatch={2}
            initialNumToRender={2}
            windowSize={2}
            updateCellsBatchingPeriod={100}
          />
        )}
      </AppWrapper>
      <VideoModal
        visible={videoModalState?.visible}
        videoId={videoModalState.videoId}
        onCloseModal={() =>
          setVideoModalState({
            ...videoModalState,
            visible: false,
            videoId: "",
          })
        }
      />
    </>
  );
};

const styles = StyleSheet.create({
  appWrapper: {
    paddingHorizontal: moderateScale(10),
    paddingVertical: moderateScale(0),
  },
  ctaContainer: {
    width: "100%",
    paddingBottom: moderateScale(20),
    overflow: "hidden",
    backgroundColor: "#242222",
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(10),
    gap: moderateScale(10),
  },
  youtubeContainer: {
    width: "100%",
    alignSelf: "center",
    borderRadius: moderateScale(10),
    height: DVH(25),
    overflow: "hidden",
  },
  itemImgContainer: {
    width: "100%",
    height: DVH(12),
    overflow: "hidden",
    borderRadius: moderateScale(7),
  },
  itemImg: {
    width: "100%",
    height: "100%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: moderateScale(20),
  },
});
