import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import colors from "../config/colors";

const AppButton = ({ title, onPress, color = "primary" }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});
export default AppButton;
