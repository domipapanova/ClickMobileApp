import { View, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import CustomHeader from "./CustomHeader";
import Ionicons from "@expo/vector-icons/Ionicons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Screen1 from "../screens/Screen1";
import Screen2 from "../screens/Screen2";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={({ navigation, route }) => ({
            header: () => (
              <CustomHeader navigation={navigation} route={route} />
            ),
            drawerStyle: {
              width: "50%",
            },
            drawerInactiveTintColor: "black",
            drawerActiveTintColor: "black",
          })}
          drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
          <Drawer.Screen
            key="screen1"
            name="Screen1"
            component={Screen1}
            options={{
              drawerIcon: HomeIcon,
              drawerItemStyle: styles.logoutDrawerItem,
            }}
          />
          <Drawer.Screen
            key="screen2"
            name="Screen2"
            component={Screen2}
            options={{
              drawerIcon: SettingsIcon,
              drawerItemStyle: styles.logoutDrawerItem,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

function CustomDrawerContent(props) {
  return (
    <SafeAreaView
      style={{ flex: 1 }}
      forceInset={{ top: "always", horizontal: "never" }}
    >
      <View>
        <DrawerItem
          label="Home"
          icon={HomeIcon}
          inactiveTintColor="black"
          activeTintColor="black"
          style={styles.drawerItem}
          onPress={() => console.log("Home pressed!")}
        />
        <DrawerItem
          label="Settings"
          icon={SettingsIcon}
          inactiveTintColor="black"
          activeTintColor="black"
          style={styles.drawerItem}
          onPress={() => console.log("Settings pressed!")}
        />
      </View>
      <View style={{ marginTop: "auto" }}>
        <DrawerItem
          label="Logout"
          icon={LogoutIcon}
          inactiveTintColor="black"
          activeTintColor="black"
          style={styles.drawerItem}
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
    borderRadius: 0,
    marginTop: "auto",
    color: "black",
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Sidebar;
