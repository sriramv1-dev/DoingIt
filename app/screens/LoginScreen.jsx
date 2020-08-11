import React from "react";
import { View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <AppButton
        title="LOGIN"
        onPress={() => {
          console.log("Login Clicked....!");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default LoginScreen;
