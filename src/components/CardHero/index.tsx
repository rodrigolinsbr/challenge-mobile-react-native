import React, { Component, Fragment, useState, useEffect } from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import Modal from "../../components/Modal";

import {
  Container,
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
  Item,
} from "native-base";
import Search from "../Search";

const CardHero = (props) => {
  const [modalRender, setModalRender] = useState(false);
  const [modalData, setModalData] = useState({});
  const [heroesData, setHeroesData] = useState([]);

  useEffect(() => {
    setHeroesData(props.heroes.heroes);
  }, []);

  const handleClick = (item) => {
    setModalRender(true);
    setModalData({
      name: item.name,
      description: item.description,
      path: item.thumbnail.path + "." + item.thumbnail.extension,
      favorite: item.favorite,
    });
  };

  const renderLocal = ({ item }) => {
    return (
      <>
        <ListItem avatar onPress={() => handleClick(item)}>
          <Left>
            <Thumbnail
              source={{
                uri: item.thumbnail.path + "." + item.thumbnail.extension,
              }}
            />
          </Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.description}</Text>
          </Body>
          <Right>
            {item.favorite ? (
              <Icon
                style={{
                  fontSize: 20,
                  paddingTop: 10,
                  color: "red",
                }}
                active
                name="star"
              />
            ) : (
              <></>
            )}
          </Right>
        </ListItem>
      </>
    );
  };

  const loadHeroes = () => {
    
    if (!props.load.load) {      
      props.renderLoad.renderLoad();
      props.paginatorOffset.paginatorOffset(props.offset.offset + 45);
      props.getDataHeroes.getDataHeroes(
      props.limit.limit,
      props.offset.offset + 45
      );
    }
  };

  return (
    <Fragment>
      <Modal
        hero={modalData}
        modalVisible={modalRender}
        setModalRender={setModalRender}
      />
      <List>
        <FlatList
          ListHeaderComponent={<></>}
          data={heroesData}
          keyExtractor={(item) => item.name}
          renderItem={renderLocal}
          onEndReached={loadHeroes}
          onEndReachedThreshold={0.1}
        />
      </List>
    </Fragment>
  );
};



export default CardHero;
