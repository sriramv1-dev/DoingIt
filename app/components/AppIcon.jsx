import React from "react";
import { Text, StyleSheet, Platform, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const AppIcon = ({
  name,
  size = 40,
  backgroundColor = "black",
  iconColor = "white",
}) => {
  return (
    <View
      style={{
        height: size,
        width: size,
        borderRadius: size / 2,
        backgroundColor: backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons
        name={name}
        color={iconColor}
        backgroundColor={backgroundColor}
        size={size * 0.5}
      />
    </View>
  );
};

export default AppIcon;
