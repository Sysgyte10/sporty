import { TeamCard } from "@src/cards";
import { CustomText } from "@src/components/shared";
import { DVH, moderateScale } from "@src/resources/responsiveness";
import React, { useEffect, useState } from "react";
import { FlatList, Platform, StyleSheet, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface IStep2Props {
  useFormProps: any;
  teamsData: any[];
}

export const Step2: React.FC<IStep2Props> = ({ useFormProps, teamsData }) => {
  const [addedCompetitions, addCompetitions] = useState<string[]>([]);
  const props = useFormProps;

  // Sync form state back into local state on mount
  useEffect(() => {
    const existingCompetitions = props?.getValues("matchAlerts");
    if (existingCompetitions?.length) {
      addCompetitions(existingCompetitions);
    }
  }, []);

  useEffect(() => {
    if (addedCompetitions) {
      props?.setValues("matchAlerts", addedCompetitions);
    }
  }, [addedCompetitions]);

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
              paddingVertical: Platform.OS === "ios" ? DVH(35) : DVH(40),
            }}
          />
        }
        contentContainerStyle={{
          gap: moderateScale(10),
        }}
        keyExtractor={(__, index) => index.toString()}
        renderItem={({ item, index }) => {
          const selectedCompetition = addedCompetitions.some(
            (team) => team.toLowerCase() === item?.club?.toLowerCase()
          );
          return (
            // <Animated.View entering={FadeIn.delay(index * 200)}>
            <View>
              <TeamCard
                selected={selectedCompetition}
                key={index}
                club={item?.club}
                country={item?.country}
                image={item?.image}
                onSelectItem={(selectedCompetition) => {
                  const isCompetitionExisting = addedCompetitions.some(
                    (competition) =>
                      competition.toLowerCase() ===
                      selectedCompetition.toLowerCase()
                  );
                  if (!isCompetitionExisting) {
                    //update with new selected team if not existing
                    const updatedCompetitions = [
                      ...addedCompetitions,
                      selectedCompetition,
                    ];
                    addCompetitions(updatedCompetitions);
                  } else {
                    //remove from selected team if existing
                    const removedCompetition = addedCompetitions.filter(
                      (competition) =>
                        competition.toLowerCase() !==
                        selectedCompetition.toLowerCase()
                    );
                    addCompetitions(removedCompetition);
                  }
                }}
              />
            </View>
            // </Animated.View>
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
