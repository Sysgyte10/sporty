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
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { extractYouTubeVideoId } from "@src/helper/utils";
import YoutubePlayer from "react-native-youtube-iframe";
import { Image } from "expo-image";
import { VideoModal } from "@src/components/app/match-highlights";
import { useMatchHighlights } from "@src/hooks";

export const MatchHighlights = ({
  navigation,
  route,
}: RootStackScreenProps<appScreenNames.MATCH_HIGHLIGHTS>) => {
  const { highLightId, fixtureId } = route?.params;
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
    setVideoDetails,
    highLightData,
  } = useMatchHighlights(highLightId, fixtureId);

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
    };

    fetchVideos();
  }, [highLightData]);

  return (
    <>
      <AppWrapper safeArea bgColor={colors.black} style={styles.appWrapper}>
        <AppNavigationHeader
          title='Back'
          onPressActionBtn={() => navigation.goBack()}
          middleText='Match Highlights'
        />
        <View style={styles.ctaImgContainer}>
          <YoutubePlayer
            height={400}
            play={playing}
            videoId={extractYouTubeVideoId(
              String(highLightData?.highLights[0])
            )}
            onChangeState={onStateChange}
          />
        </View>
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
              <TouchableOpacity
                onPress={() =>
                  setVideoModalState({
                    ...videoModalState,
                    visible: true,
                    videoId: item?.videoId,
                  })
                }
                activeOpacity={0.6}
                key={index}
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
                    source={item?.videoImgUrl}
                    contentFit='cover'
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
            );
          }}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
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
  ctaImgContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? DVH(24) : DVH(26),
    overflow: "hidden",
    backgroundColor: "#242222",
    borderRadius: moderateScale(10),
    marginBottom: moderateScale(10),
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
