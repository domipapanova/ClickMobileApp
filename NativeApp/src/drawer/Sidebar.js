import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import VictoryScreen from "../screens/VictoryScreen";
import CustomHeader from "./CustomHeader";
import Ionicons from "@expo/vector-icons/Ionicons";

const Drawer = createDrawerNavigator();

const HomeIcon = ({ focused, color, size }) => (
  <Ionicons name="home-outline" size={size} color={color} />
);

const SettingsIcon = ({ focused, color, size }) => (
  <Ionicons name="settings-outline" size={size} color={color} />
);

const Sidebar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation, route }) => ({
          header: () => <CustomHeader navigation={navigation} route={route} />,
          drawerStyle: { width: "45%" },
        })}
      >
        <Drawer.Screen
          key="home"
          name="Screen1"
          component={Home}
          options={{ drawerIcon: HomeIcon }}
        />
        <Drawer.Screen
          key="victory"
          name="Screen2"
          component={VictoryScreen}
          options={{ drawerIcon: SettingsIcon }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Sidebar;
