import React from "react";
import { StyleSheet, Image } from "react-native";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text,
} from "native-base";

const Search = () => {
  return (
    <>
      <Header searchBar rounded style={styles.container}>
        <Item>
          {/* <Icon name="ios-search" /> */}
          <Input placeholder="Pesquisar" />
          
          <Button transparent>
            <Text>Buscar</Text>
          </Button>
        </Item>
      </Header>
      
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#eb2b26",
  },
});

export default Search;
