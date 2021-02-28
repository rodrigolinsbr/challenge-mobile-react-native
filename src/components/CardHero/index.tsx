import React, { Component, Fragment, useState, useEffect } from "react";
import { StyleSheet, Image } from "react-native";

import Modal from "../../components/Modal";
import Service from ".././../service/api";
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Left,
  CardItem,
  Body,
  Right,
  Thumbnail,
  Text,
  Card,
  View,
  Icon,
  Spinner,
} from "native-base";

const CardHero = (props) => {
  const [modalRender, setModalRender] = useState(false);
  const [modalData, setModalData] = useState({});
  const [heroesData, setHeroesData] = useState([]);
  const [loadRender, setLoadRender] = useState(false);

  useEffect(() => {
    // code to run on component mount
    setLoadRender(true);
    getDataHeroes();
  }, []);

  async function getDataHeroes() {
    let data = await Service.getHeroes();
    setHeroesData(data);
    setLoadRender(false);
  }

  const handleSpinner = () => {
    console.log(loadRender);
    if (loadRender) {
      return (
        
          <Spinner color="red" />
        
      );
    }
  };


  return (
    <>
      {
        <Fragment>
          <Modal
            hero={modalData}
            modalVisible={modalRender}
            setModalRender={setModalRender}
          />

          <Content>
            {handleSpinner()}

            <List>
              {heroesData.map((person, name) => {
                const handleClick = (person) => {
                  setModalRender(true);
                  setModalData({
                    name: person.name,
                    description: person.description,
                    path:
                      person.thumbnail.path + "." + person.thumbnail.extension,
                    favorite: person.favorite,
                  });
                };
                return (
                  <ListItem avatar onPress={() => handleClick(person)}>
                    <Left>
                      <Thumbnail
                        source={{
                          uri:
                            person.thumbnail.path +
                            "." +
                            person.thumbnail.extension,
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>{person.name}</Text>
                      <Text note>{person.description}</Text>
                    </Body>
                    <Right>
                      {person.favorite ? (
                        <Icon
                          style={{ fontSize: 20, paddingTop: 10, color: "red" }}
                          active
                          name="star"
                        />
                      ) : (
                        <ListItem></ListItem>
                      )}
                    </Right>
                  </ListItem>
                );
              })}
            </List>
          </Content>
        </Fragment>
      }
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "50%",
    flexDirection: "column",
    // backgroundColor: "#eb2b26",
    // marginHorizontal: 2,
    // height: 200,
  },
  image: {
    width: "100%",
    flexDirection: "row",
    flex: 1,
  },
});

export default CardHero;
