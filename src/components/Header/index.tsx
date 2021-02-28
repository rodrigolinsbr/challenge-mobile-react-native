import React, { Fragment } from "react";
import { View, Linking, Text, StyleSheet, Image } from "react-native";
import Search from "../../components/Search";
import Service from "../../service";
import { Thumbnail } from "native-base";

const Header = () => {
  return (
    <View style={styles.container}>
      {/* <Image
        style={styles.image}
        source={require("../../assets/MarvelLogo.png")}
      /> */}

      <Thumbnail
        style={styles.image}
        square
        source={require("../../assets/marvel-logo.jpg")}
      />

      <Search />
      {/* <img src={marvelLogo}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // width: "100%",
    flexDirection: "column",
    backgroundColor: "#ed2c21",
    height: 200,
  },
  image: {
    width: "100%",

    // flexDirection: "row",
    flex: 1,
  },
});

export default Header;
