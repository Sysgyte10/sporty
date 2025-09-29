import { FixtureCard } from "@src/cards";
import { footballFixtures } from "@src/constants/fixtures";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { FlatList, View } from "react-native";

interface IFootBallProps {
  onPress: (id: any) => void;
  onPressMatchCard: () => void;
}

export const FootballSport: React.FC<IFootBallProps> = ({
  onPress,
  onPressMatchCard,
}) => {
  return (
    <>
      <FlatList
        data={footballFixtures}
        contentContainerStyle={{
          gap: moderateScale(1),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            // <Animated.View
            //   entering={ZoomIn.delay(index * 200).duration(800)} // increase to 800ms or more
            //   key={index}>
            <View key={index}>
              <FixtureCard
                data={item}
                onPress={(fixtureId) => onPress(fixtureId)}
                onPressMatchCard={() => onPressMatchCard()}
              />
            </View>
            //  </Animated.View>
          );
        }}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        maxToRenderPerBatch={2}
        initialNumToRender={2}
        windowSize={2}
        updateCellsBatchingPeriod={100}
      />
    </>
  );
};
