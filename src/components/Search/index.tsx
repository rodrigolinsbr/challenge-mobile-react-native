import React, { useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import { Header, Item, Input, Button, Text, Spinner } from "native-base";
import Service from "../../service";

const Search = (props) => {
  const [search, setSearch] = useState(null);
  const [load, setLoad] = useState(false);

  const handleChange = (event) => {
    setSearch(event);
  };

  async function getData() {
    setLoad(true);
    if (search == " " || search == "") {
      props.data.getSearchData(false);
      setLoad(false);
    } else {
      console.log(search);
      let data = await Service.getHeroesName(search);
      props.data.getSearchData(data);
      setLoad(false);
    }
  }
  return (
    <>
      <Header searchBar rounded style={styles.container}>
        <Item>
          <Input placeholder="Pesquisar" onChangeText={handleChange} />
          <Button style={styles.button} onPress={getData}>
            {load ? (
              <Text>
                <Spinner color={"white"} />
              </Text>
            ) : (
              <Text>Buscar</Text>
            )}
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
  button: {
    height: 40,
  },
});

export default Search;
