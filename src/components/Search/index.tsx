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

  const [search, setSearch] = useState(null);
  const [clear, setClear] = useState(false);

  const handleChange = (event) => {
    setSearch(event);
  };

  async function getData() {    
    if (search == " " || search == "") {
      props.data.getSearchData(false);
    } else {
      console.log(search);
      let data = await Service.getHeroesName(search);
      props.data.getSearchData(data);
    }
  }
  return (
    <>
      <Header searchBar rounded style={styles.container}>
        <Item>
          <Input
            placeholder="Pesquisar"
            value={search}
            onChangeText={handleChange}
          />

          <Button transparent onPress={getData}>
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
