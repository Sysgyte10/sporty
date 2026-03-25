import { FixtureCard } from "@src/cards";
import { moderateScale } from "@src/resources/responsiveness";
import { fixtureDataType } from "@src/types/types";
import React from "react";
import { FlatList, View } from "react-native";
// import { useFixturesStore } from "store";

interface IFootBallProps {
  data: fixtureDataType[];
  onPress: (fixtureId: any, leagueId: any) => void;
  onPressMatchCard: (firstClubId: string, secondClubId: string) => void;
}

export const FootballSport: React.FC<IFootBallProps> = ({
  data,
  onPress,
  onPressMatchCard,
}) => {
  // const { fixtures } = useFixturesStore();

  return (
    <>
      <FlatList
        data={data}
        contentContainerStyle={{
          gap: moderateScale(5),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View key={index}>
              <FixtureCard
                data={item}
                onPress={(fixtureId, leagueId) => onPress(fixtureId, leagueId)}
                onPressMatchCard={(firstClubId, secondClubId) =>
                  onPressMatchCard(firstClubId, secondClubId)
                }
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
