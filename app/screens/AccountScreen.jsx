import React from "react";
import { Text, StyleSheet, Platform, View, FlatList } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppScreen from "../components/AppScreen";
import AppIcon from "../components/AppIcon";
import colors from "../config/colors";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";

const menuItems = [
  {
    id: 1,
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    id: 2,
    title: "My Messages",
    icon: {
      name: "mail",
      backgroundColor: colors.secondary,
    },
  },
];

const AccountScreen = () => {
  return (
    <AppScreen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Sriram Voonna"
          subTitle="sriramv1@mail.usf.edu"
          image={require("../assets/profilePic.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<AppIcon name="logout" backgroundColor="#ffe66d" />}
      />
    </AppScreen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
  container: {
    marginVertical: 20,
    backgroundColor: "tomato",
  },
});
export default AccountScreen;
