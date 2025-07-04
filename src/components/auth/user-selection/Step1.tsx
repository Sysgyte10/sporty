import { TeamCard } from "@src/cards";
import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IStep1Props {
  useFormProps: any;
  teamsData: any[];
}

export const Step1: React.FC<IStep1Props> = ({ useFormProps, teamsData }) => {
  const [addedTeams, addTeams] = useState<string[]>([]);
  const props = useFormProps;

  // Sync form state back into local state on mount
  useEffect(() => {
    const existingTeams = props?.getValues("pickedMatches");
    if (existingTeams?.length) {
      addTeams(existingTeams);
    }
  }, []);

  useEffect(() => {
    if (addedTeams) {
      props?.setValues("pickedMatches", addedTeams);
    }
  }, [addedTeams]);

  return (
    <View style={styles.container}>
      <CustomText type='semi-bold' size={17} white>
        All
      </CustomText>
      <FlatList
        data={teamsData}
        ListFooterComponent={
          <View
            style={{
              paddingVertical: Platform.OS === "ios" ? DVH(25) : DVH(30),
            }}
          />
        }
        contentContainerStyle={{
          gap: moderateScale(10),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          const selectedTeam = addedTeams.some(
            (team) => team.toLowerCase() === item?.club?.toLowerCase()
          );
          return (
            <Animated.View entering={FadeIn.springify().delay(index * 300)}>
              <TeamCard
                selected={selectedTeam}
                key={index}
                club={item?.club}
                country={item?.country}
                image={item?.image}
                onSelectItem={(selectedTeam) => {
                  const isTeamExisting = addedTeams.some(
                    (team) => team.toLowerCase() === selectedTeam.toLowerCase()
                  );
                  if (!isTeamExisting) {
                    //update with new selected team if not existing
                    const updatedTeams = [...addedTeams, selectedTeam];
                    addTeams(updatedTeams);
                  } else {
                    //remove from selected team if existing
                    const removedTeam = addedTeams.filter(
                      (team) =>
                        team.toLowerCase() !== selectedTeam.toLowerCase()
                    );
                    addTeams(removedTeam);
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
  );
};

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(10),
  },
});
