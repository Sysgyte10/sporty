import { ButtonList } from "@src/common";
import React, { useState } from "react";
import { View } from "react-native";

export const TeamTableTab: React.FC<{}> = () => {
  const [selectedSport, setSelectedSport] = useState<string>("All");
  return (
    <View>
      <ButtonList
        data={["All", "Home", "Away", "Form"]}
        onButtonPress={(text) => setSelectedSport(text)}
        selectedBtn={selectedSport}
      />
    </View>
  );
};
