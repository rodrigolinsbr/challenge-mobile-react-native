import React, { useState } from "react";
import { Image } from "react-native";
import Modal from "react-native-modal";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from "native-base";

function ModalHero(props) {
  const closeModal = () => {
    props.setModalRender(false);
  };

  const data = {
    name: props.hero.name,
    description: props.hero.description,
    path: props.hero.path,
    favorite: props.hero.favorite,
  };

  return (
    <>
      <Modal
        isVisible={props.modalVisible}
        onBackdropPress={() => props.setModalRender(false)}
      >
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{data.name}</Text>
              </Body>
            </Left>
            <Right>
              {/* <Text>11h ago</Text> */}

              <Icon active name="close" onPress={closeModal} />
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: data.path }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
          <CardItem>
            <Left>
              <Body>
                <Text note>{data.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left></Left>

            <Right>
              {data.favorite ? (
                <Button transparent>
                  <Icon active name="star" />
                  <Text>Torna comum</Text>
                </Button>
              ) : (
                <Button transparent>
                  <Icon active name="star" />
                  <Text>Favoritar</Text>
                </Button>
              )}
            </Right>
          </CardItem>
        </Card>
      </Modal>
    </>
  );
}

export default ModalHero;
