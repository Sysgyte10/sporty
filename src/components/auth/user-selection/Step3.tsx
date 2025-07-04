import { TeamCard } from "@src/cards";
import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import { ScrollContainer } from "@src/screens/ScrollContainer";
import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IStep3Props {
  useFormProps: any;
  teamsData: any[];
}

export const Step3: React.FC<IStep3Props> = ({ useFormProps, teamsData }) => {
  const [addedPushNot, addPushNot] = useState<string[]>([]);
  const [addedNews, addNews] = useState<string[]>([]);
  const props = useFormProps;

  // Sync form state back into local state on mount
  useEffect(() => {
    //for push notification sync
    const existingPushNot = props?.getValues("pushNotifications");
    if (existingPushNot?.length) {
      addPushNot(existingPushNot);
    }
  }, []);

  // Sync form state back into local state on mount
  useEffect(() => {
    //for news sync
    const existingNews = props?.getValues("news");
    if (existingNews?.length) {
      addNews(existingNews);
    }
  }, []);

  useEffect(() => {
    //add selected push-not to rhf state
    if (addedPushNot) {
      props?.setValues("pushNotifications", addedPushNot);
      return;
    }
  }, [addedPushNot]);

  useEffect(() => {
    //add selected news to rhf state
    if (addedNews) {
      props?.setValues("news", addedNews);
      return;
    }
  }, [addedNews]);

  return (
    <ScrollContainer
      style={{
        gap: moderateScale(20),
      }}>
      <View style={styles.container}>
        <CustomText type='semi-bold' size={17} white>
          Match Alerts
        </CustomText>
        <FlatList
          data={teamsData && teamsData?.slice(0, 1)}
          contentContainerStyle={{
            gap: moderateScale(10),
          }}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            const selectedPushNot = addedPushNot.some(
              (pushNot) => pushNot.toLowerCase() === item?.club?.toLowerCase()
            );
            return (
              <Animated.View entering={FadeIn.delay(index * 200)}>
                <TeamCard
                  selected={selectedPushNot}
                  key={index}
                  club={item?.club}
                  country={item?.country}
                  image={item?.image}
                  onSelectItem={(selectedPushNot) => {
                    const isPushNotExisting = addedPushNot.some(
                      (pushNot) =>
                        pushNot.toLowerCase() === selectedPushNot.toLowerCase()
                    );
                    if (!isPushNotExisting) {
                      //update with new selected team if not existing
                      const updatedPushNot = [...addedPushNot, selectedPushNot];
                      addPushNot(updatedPushNot);
                    } else {
                      //remove from selected team if existing
                      const removedPushNot = addedPushNot.filter(
                        (pushNot) =>
                          pushNot.toLowerCase() !==
                          selectedPushNot.toLowerCase()
                      );
                      addPushNot(removedPushNot);
                    }
                  }}
                />
              </Animated.View>
            );
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </View>
      {/* News component */}
      <View style={styles.container}>
        <CustomText type='semi-bold' size={17} white>
          News
        </CustomText>
        <FlatList
          data={teamsData}
          ListFooterComponent={
            <View
              style={{
                paddingVertical: Platform.OS === "ios" ? DVH(35) : DVH(40),
              }}
            />
          }
          contentContainerStyle={{
            gap: moderateScale(10),
          }}
          keyExtractor={(__, index) => index.toString()}
          renderItem={({ item, index }) => {
            const selectedNews = addedNews.some(
              (news) => news.toLowerCase() === item?.club?.toLowerCase()
            );
            return (
              <Animated.View entering={FadeIn.delay(index * 200)}>
                <TeamCard
                  selected={selectedNews}
                  key={index}
                  club={item?.club}
                  country={item?.country}
                  image={item?.image}
                  onSelectItem={(selectedNews) => {
                    const isNewsExisting = addedNews.some(
                      (news) =>
                        news.toLowerCase() === selectedNews.toLowerCase()
                    );
                    if (!isNewsExisting) {
                      //update with new selected team if not existing
                      const updatedNews = [...addedNews, selectedNews];
                      addNews(updatedNews);
                    } else {
                      //remove from selected team if existing
                      const removedNews = addedNews.filter(
                        (news) =>
                          news.toLowerCase() !== selectedNews.toLowerCase()
                      );
                      addNews(removedNews);
                    }
                  }}
                />
              </Animated.View>
            );
          }}
          horizontal={false}
          showsVerticalScrollIndicator={false}
          maxToRenderPerBatch={2}
          initialNumToRender={2}
          windowSize={2}
          updateCellsBatchingPeriod={100}
        />
      </View>
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(10),
  },
});
