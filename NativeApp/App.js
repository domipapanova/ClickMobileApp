import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Sidebar from "./src/drawer/Sidebar";
import Home from "./src/screens/Home";
import VictoryScreen from "./src/screens/VictoryScreen";

const Stack = createNativeStackNavigator();

function HeaderLogo() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 30, height: 30 }}
        source={require("./src/images/logo.png")}
      />
    </View>
  );
}

export default function App() {
  return (
    /*<NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "chartreuse",
          },
        }}
      >
        <Stack.Screen
          name="Screen 1"
          component={Home}
          options={{ headerTitle: () => <HeaderLogo /> }}
        />
        <Stack.Screen name="Screen 2" component={VictoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>*/
    <Sidebar />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
