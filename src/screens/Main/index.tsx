import React, { Component, useState } from "react";
import { Container, Header, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import CardHero from "../../components/CardHero";
import Service from "../../service/api";

import Headers from "../../components/Header";

const Main = (props) => {
  const [heroes, setHeroes] = useState();
  const [load, setLoad] = useState(false);
  const getData = async () => {
    // const dataHeroes = await Service.getCaracters(0, 40);
    // setHeroes(dataHeroes);

    setLoad(true);
    // return dataHeroes;
  };

  if (load == false) {
    getData();
  }

  return (
    <>
      <Headers />

      <CardHero heroes={{ heroes }} />
    </>
  );
};

export default Main;
