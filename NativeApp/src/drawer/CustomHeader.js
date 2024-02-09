import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { DrawerActions } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome6";

const CustomHeader = ({ navigation, route }) => {
  const { name } = route;

  return (
    <View style={styles.header}>
      <Image style={styles.logo} source={require("../images/logo.png")} />
      <Text style={styles.screenName}>{name}</Text>
      <TouchableOpacity
        style={styles.menuButton}
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      >
        <Icon name="bars" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "chartreuse",
    height: 70,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  menuButton: {
    color: "black",
    padding: 10,
  },
  screenName: {
    fontSize: 18,
  },
  logo: {
    width: 40,
    height: 30,
  },
  icon: {
    fontSize: 23,
  },
});

export default CustomHeader;
