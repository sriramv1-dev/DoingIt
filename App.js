import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import LoginScreen from "./app/screens/LoginScreen";
import AppCard from "./app/components/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import AppIcon from "./app/components/AppIcon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";

// export default function App() {
//   return <WelcomeScreen />;
//   // return <ViewImageScreen />;
// }

// export default function App() {
//   return <ViewImageScreen />;
// }

// export default function App() {
//   return <MessagesScreen />;
// }

// export default function App() {
//   return <AccountScreen />;
// }

export default function App() {
  return <ListingsScreen />;
}

// export default function App() {
//   return (
//     <ListItem
//       title="Sheldon Cooper"
//       IconComponent={
//         <AppIcon
//           backgroundColor="black"
//           iconColor="cyan"
//           name="corn"
//           size={50}
//         />
//       }
//     />
//   );
// }

// export default function App() {
//   return <ListingDetailsScreen />;
// }

// export default function App() {
//   return (
//     <View
//       style={{
//         backgroundColor: "#f8f4f4",
//         padding: 20,
//         paddingTop: 100,
//       }}
//     >
//       <AppCard
//         title="Red jacket for sale"
//         subTitle="$100"
//         image={require("./app/assets/jacket.jpg")}
//       />
//     </View>
//   );
// }

// export default function App() {
//   return <LoginScreen />;
// }

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
