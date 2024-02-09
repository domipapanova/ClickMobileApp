import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <Button title="Stačiť" />
      <Button title="Prejsť na screen 2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
  },
});
export default Home;
