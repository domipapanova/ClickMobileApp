import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet, Touchable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";
import CustomHeader from "./src/drawer/CustomHeader";
import Sidebar from "./src/drawer/Sidebar";
const Stack = createNativeStackNavigator();

const VyhernyScreen = ({ route }) => {
  const { pressCount } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Gratulujem! Dosiahol si požadovaný počet stlačení: {pressCount}
      </Text>
    </View>
  );
};

export default function App() {
  return (
    <Sidebar />
    /*<GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen
            name="Screen2"
            component={Screen2}
            options={{ gestureEnabled: false }} // Zabraňuje používateľovi vrátiť sa späť na Screen 1
          />
          <Stack.Screen
            name="VyhernyScreen"
            component={VyhernyScreen}
            options={{ gestureEnabled: false }} // Zabraňuje používateľovi vrátiť sa späť na Screen 1
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>*/
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});
