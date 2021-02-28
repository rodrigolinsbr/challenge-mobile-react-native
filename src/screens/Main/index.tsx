import React, { Component, useState, useEffect } from "react";
import { Container, Header, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import CardHero from "../../components/CardHero";
import Service from "../../service";

import Headers from "../../components/Header";
import { Spinner } from "native-base";

const Main = (props) => {
  const [heroes, setHeroes] = useState();
  const [load, setLoad] = useState(false);

  useEffect(() => {
    // code to run on component mount
    setLoad(true);
    getDataHeroes();
  }, []);

  async function getDataHeroes() {
    let data = await Service.getHeroes();
    
    setHeroes(data);
    setLoad(false);
  }

  const renderCardHero = () => {
    if (load) {
      return <Spinner color="red" />;
    }else{
      return <CardHero heroes={{ heroes }} />
    }
  }

  return (
    <>
      <Headers />
      {renderCardHero()}
      
    </>
  );
};

export default Main;
