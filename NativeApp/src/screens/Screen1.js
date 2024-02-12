import { View, SafeAreaView, Text, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

const generateRandomNumber = () => {
  return Math.floor(Math.random() * 11);
};

const Screen1 = ({ navigation }) => {
  const [pressCount, setPressCount] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [targetCount, setTargetCount] = useState(0);

  useEffect(() => {
    setTargetCount(generateRandomNumber());
  }, []);

  const handleButtonPress = () => {
    const newCount = pressCount + 1;
    setPressCount(newCount);

    if (!gameOver && newCount >= targetCount) {
      setGameOver(true);
      navigation.navigate("Screen2", { pressCount: newCount, gameOver: true });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.counter}>
        <Text style={styles.textCounter}>Počet stlačení: {pressCount}</Text>
      </View>
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text>Stlačiť</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Screen2", { pressCount, gameOver })}
        style={styles.buttonWhite}
      >
        <Text>Prejsť na screen 2</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: "mediumslateblue",
    backgroundColor: "lavender",
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

export default Screen1;
