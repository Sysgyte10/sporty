import { FixtureCard } from "@src/cards";
import { iceHockeyFixtures } from "@src/constants/fixtures";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { FlatList, ImageSourcePropType, View } from "react-native";

interface IIceHockeyProps {
  onPress: (
    id: any,
    icon?: ImageSourcePropType,
    title?: string,
    desc?: string
  ) => void;
  onPressMatchCard: () => void;
}

export const IceHockey: React.FC<IIceHockeyProps> = ({
  onPress,
  onPressMatchCard,
}) => {
  return (
    <>
      <FlatList
        data={iceHockeyFixtures}
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
                onPress={(fixtureId, icon, title, desc) =>
                  onPress(fixtureId, icon, title, desc)
                }
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
