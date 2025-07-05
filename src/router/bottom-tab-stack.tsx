import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useState, useEffect } from "react";
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
import { useNavigation } from "@react-navigation/native";

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
  console.log(`${route?.name} focused:`, focused);

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
        {label}
      </CustomText>
    </TouchableOpacity>
  );
};

export const BottomTabStack = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(bottomTabBarScreen[0].screenName); // Default to first tab

  // Listen to navigation state changes to update activeTab
  useEffect(() => {
    const unsubscribe = navigation.addListener("state", (e) => {
      const currentRoute = e.data.state.routes[e.data.state.index]?.name;
      if (currentRoute && currentRoute !== activeTab) {
        setActiveTab(currentRoute);
      }
    });

    return unsubscribe; // Cleanup listener on unmount
  }, [navigation, activeTab]);

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
                    setActiveTab(screen.screenName); // Update active tab
                    defaultOnPress?.(event); // Pass the event to defaultOnPress
                    console.log(`Pressed tab: ${screen.screenName}`);
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
    minWidth: moderateScale(40),
  },
});
