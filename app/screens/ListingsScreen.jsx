import React from "react";
import { Text, StyleSheet, Platform, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppScreen from "../components/AppScreen";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import AppCard from "../components/AppCard";

const listings = [
  {
    id: 1,
    title: "Red Jacket for sale",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: 2,
    title: "Couch in great condition",
    price: 100,
    image: require("../assets/couch.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        ItemSeparatorComponent={ListItemSeparator}
        renderItem={({ item }) => (
          <AppCard
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
