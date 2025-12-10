import { FixtureCard } from "@src/cards";
import { moderateScale } from "@src/resources/responsiveness";
import React from "react";
import { FlatList, View } from "react-native";
import { footballFixtures } from "@src/constants/fixtures";
// import { useFixturesStore } from "store";

interface IFootBallProps {
  onPress: (id: any) => void;
  onPressMatchCard: () => void;
}

export const FootballSport: React.FC<IFootBallProps> = ({
  onPress,
  onPressMatchCard,
}) => {
  // const { fixtures } = useFixturesStore();

  console.log(footballFixtures);

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
            <View key={index}>
              <FixtureCard
                data={item}
                onPress={(fixtureId) => onPress(fixtureId)}
                onPressMatchCard={() => onPressMatchCard()}
              />
            </View>
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
