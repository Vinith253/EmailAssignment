import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import Icon from "react-native-vector-icons/Ionicons";
import SettingsNavigator from "./SettingsNavigator";

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      headerShown: false,
      tabBarIcon: ({ color, size }) => {
        let iconName =
          route.name === "Profile" ? "home-outline" : "settings-outline";
        return <Icon name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Profile" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);

export default BottomTabs;
