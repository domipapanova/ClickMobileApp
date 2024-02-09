import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
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
const LogoutIcon = ({ focused, color, size }) => (
  <Ionicons name="log-out-outline" size={size} color={color} />
);

const Sidebar = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={({ navigation, route }) => ({
          header: () => <CustomHeader navigation={navigation} route={route} />,
          drawerStyle: {
            width: "50%",
          },
          drawerInactiveTintColor: "black",
          drawerActiveTintColor: "black",
        })}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen
          key="home"
          name="Home"
          component={Home}
          options={{
            drawerIcon: HomeIcon,
            drawerItemStyle: styles.logoutDrawerItem,
          }}
          navigation={dis}
        />
        <Drawer.Screen
          key="settings"
          name="Settings"
          component={VictoryScreen}
          options={{
            drawerIcon: SettingsIcon,
            drawerItemStyle: styles.logoutDrawerItem,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

function CustomDrawerContent(props) {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
        <DrawerItem
          label="Logout"
          icon={LogoutIcon}
          inactiveTintColor="black"
          activeTintColor="black"
          style={styles.logoutDrawerItem}
          onPress={() => console.log("Logout pressed!")}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    marginLeft: 20,
    fontSize: 16,
    color: "black",
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start", // Align the logout button to the start of the container
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: "auto",
  },
  logoutDrawerItem: {
    borderRadius: 0,
    marginTop: "auto",
    color: "black",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Sidebar;
