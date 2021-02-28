import React, { useState, useEffect } from "react";
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
import Service from "../../service";

const Search = (props) => {
  console.log(props);

  const [search, setSearch] = useState("a");
  const [clear, setClear] = useState(false);

  const handleChange = (event) => {
    setSearch(event);
  };
  async function clearData() {
    let data = await Service.getHeroes();
    props.data.getSearchData(data);
    setClear(true);
  }
  async function getData() {
    setClear(false);
    if (search == " " || search == "") {
      setSearch("a");
    }
    console.log(search);
    let data = await Service.getHeroesName(search);
    props.data.getSearchData(data);
  }
  return (
    <>
      <Header searchBar rounded style={styles.container}>
        <Item>
          <Input placeholder="Pesquisar" onChangeText={handleChange} />

          <Button transparent onPress={getData}>
            <Text>Buscar</Text>
          </Button>
          <Button transparent onPress={clearData}>
            <Text>Limpar</Text>
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
