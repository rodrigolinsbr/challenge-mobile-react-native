import React from "react";
import { View, Linking, Text, StyleSheet, Image } from "react-native";
import Search from "../../components/Search";

const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/MarvelLogo.png")}
      />
      <Search />
      {/* <img src={marvelLogo}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "column",
    backgroundColor: "#eb2b26",
    height: 250,
  },
  image: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
});

export default Header;
