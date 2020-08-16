import React from "react";
import { View, Image, StyleSheet, SafeAreaView } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ViewImageScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
        <MaterialCommunityIcons
          name="close-circle"
          size={40}
          color={colors.primary}
        />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={40}
          color={colors.secondary}
        />
      </View>

      {
        <View>
          <Image
            resizeMode="contain"
            style={styles.image}
            source={require("../assets/chair.jpg")}
          />
        </View>
      }
      <View style={styles.customTextContainer}>
        <AppText>Starting here.!!!</AppText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 20,
    left: 20,
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  customTextContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "50%",
    height: "50%",
  },
  deleteIcon: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
