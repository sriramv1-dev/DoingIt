import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Button,
  View,
  Image,
  Text,
} from "react-native";
import AppButton from "../components/AppButton";

const WelcomeScreen = (props) => {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={10}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <AppButton
          title="Login"
          onPress={() => {
            console.log("Login Clicked....!");
          }}
        />
        <AppButton
          title="Register"
          onPress={() => {
            console.log("Register Clicked....!");
          }}
          color="secondary"
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
