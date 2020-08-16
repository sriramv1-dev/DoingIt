import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
const ListingDetailsScreen = () => {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{"Red jacket for sale"}</AppText>
        <AppText style={styles.price}>{"$100"}</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/profilePic.jpg")}
            title={"Ram V"}
            subTitle={"3 Listings "}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    marginBottom: 7,
  },
  userContainer: {
    marginVertical: 20,
  },
});

export default ListingDetailsScreen;
