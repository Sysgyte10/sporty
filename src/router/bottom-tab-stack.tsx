import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect } from "react";
import { BottomTabBarStackParamList } from "./types";
import { bottomTabBarScreen } from "@src/navigation";
import {
  StyleSheet,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import { moderateScale } from "@src/resources/responsiveness";
import { colors } from "@src/resources/color/color";
import { Ionicons } from "@expo/vector-icons";
import { CustomText } from "@src/components/shared";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useActiveBottomTabStore } from "store";

const Tab = createBottomTabNavigator<BottomTabBarStackParamList>();

interface ICustomButtonProps {
  focused: boolean;
  onPress?: (event: GestureResponderEvent) => void; // Update type to include event
  route: { name: string };
}

const CustomTabBarButton = ({
  focused,
  onPress,
  route,
}: ICustomButtonProps) => {
  const { tabName } = useActiveBottomTabStore();
  let iconName: "football" | "heart" | "document" = "football";
  let label = "";
  switch (route?.name) {
    case "FootballStack":
      iconName = "football";
      label = "Football";
      break;
    case "FavoritesStack":
      iconName = "heart";
      label = "Favorite";
      break;
    case "ForYouStack":
      iconName = "document";
      label = "For You";
      break;
  }

  return (
    <TouchableOpacity
      onPress={onPress} // Pass the event implicitly
      style={[
        styles.btn,
        {
          backgroundColor: focused ? colors.purple : "transparent",
        },
      ]}>
      <Ionicons
        name={iconName}
        size={moderateScale(20)}
        color={focused ? colors.white : "#9C9C9C"}
      />
      <CustomText
        type='medium'
        size={12}
        style={{ color: focused ? colors.white : "#9C9C9C" }}>
        {label === "Favorite" || label === "For You" ? label : tabName || label}
      </CustomText>
    </TouchableOpacity>
  );
};

export const BottomTabStack = () => {
  const insets = useSafeAreaInsets();
  const { activeTab, setActiveTab } = useActiveBottomTabStore();

  useEffect(() => {
    setActiveTab(String(bottomTabBarScreen[0]?.screenName));
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#242222",
          height: 60 + insets.bottom,
          paddingBottom: insets.bottom,
          borderTopWidth: moderateScale(0),
          shadowColor: "transparent",
          elevation: 0,
          paddingHorizontal: moderateScale(15),
          paddingTop: moderateScale(15),
        },
      }}>
      {bottomTabBarScreen.map((screen, index) => (
        <Tab.Screen
          name={screen.screenName}
          component={screen.component}
          key={index}
          options={{
            tabBarButton: ({ onPress: defaultOnPress }) => {
              const isFocused = screen.screenName === activeTab;
              return (
                <CustomTabBarButton
                  focused={isFocused}
                  onPress={(event: GestureResponderEvent) => {
                    setActiveTab(String(screen.screenName)); // Update active tab
                    defaultOnPress?.(event); // Pass the event to defaultOnPress
                    // console.log(`Pressed tab: ${screen.screenName}`);
                  }}
                  route={{ name: screen.screenName }}
                />
              );
            },
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: moderateScale(50),
    padding: moderateScale(8),
    minWidth: moderateScale(70),
  },
});
