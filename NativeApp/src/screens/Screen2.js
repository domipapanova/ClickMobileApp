import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";

import React, { useState, useEffect } from "react";

const Screen2 = ({ navigation, route }) => {
  const [visitCount, setVisitCount] = useState(0);
  const { pressCount } = route.params;
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    AsyncStorage.getItem("gameOver").then((value) => {
      if (value !== null) {
        setGameOver(JSON.parse(value));
      }
    });
  }, []);
  // Zvýšiť počet návštev o 1 pri každom zobrazení Screen 2 alebo návrate na Screen 1
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setVisitCount(visitCount + 1);
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.textCounter}>Počet stlačení: {pressCount}</Text>
      </View>

      <Text style={styles.text}>Screen navštívený: {visitCount}x</Text>
      {!gameOver && (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.buttonWhite}
        >
          <Text>Späť</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 15,
    marginBottom: 20,
    color: "red",
    fontWeight: "bold",
  },
  counter: {
    position: "absolute",
    top: 1,
    borderColor: "black",
    borderWidth: 1,
    width: "99%",
    paddingVertical: 50,
  },
  textCounter: {
    textAlign: "center",
    color: "blue",
  },
  buttonWhite: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "black",
  },
});

export default Screen2;
