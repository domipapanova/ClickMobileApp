import { View, Text, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";

import React, { useState, useEffect } from "react";

const Screen2 = ({ navigation, route }) => {
  const [visitCount, setVisitCount] = useState(0);
  const { gameOver, pressCount } = route.params;
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      setVisitCount((prevCount) => prevCount + 1);
    }
  }, [isFocused]);

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

      {gameOver && (
        <Text style={styles.victoryText}>
          Vyhral si hru. Počítadlo stlačenia bolo aktivované {pressCount} krát
        </Text>
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
  victoryText: {
    fontSize: 10,
    marginBottom: 20,
    color: "black",
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
