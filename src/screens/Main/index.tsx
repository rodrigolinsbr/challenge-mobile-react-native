import React, { Component, useState, useEffect } from "react";
import { Container, Header, Text } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import CardHero from "../../components/CardHero";
import Service from "../../service";

import Headers from "../../components/Header";
import { Spinner } from "native-base";
import { parseJsonText } from "typescript";

const Main = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [load, setLoad] = useState(false);
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    // code to run on component mount
    setLoad(true);
    getDataHeroes(limit, offset);
  }, []);

  async function getDataHeroes(limit, offset) {
    let data = await Service.getHeroes(limit, offset);
    
    setHeroes(data)
    setLoad(false);
  }

  const renderLoad = () => {
    setLoad(true);
  };

  const paginatorLimit = (limit) => {
    setLimit(limit);
  };

  const paginatorOffset = (offset) => {
    setOffset(offset);
  };

  const renderCardHero = () => {
    if (load) {
      return <Spinner color="red" />;
    } else {
      return (
        <CardHero
          heroes={{ heroes }}
          getDataHeroes={{ getDataHeroes }}
          renderLoad={{ renderLoad }}
          load={{ load }}
          paginatorLimit={{ paginatorLimit }}
          limit={{ limit }}
          paginatorOffset={{ paginatorOffset }}
          offset={{ offset }}
        />
      );
    }
  };

  return (
    <>
      <Headers />
      {renderCardHero()}

      {/* <CardHero
          heroes={{ heroes }}
          getDataHeroes={{ getDataHeroes }}
          renderLoad={{ renderLoad }}
          load={{load}}
        /> */}
    </>
  );
};

export default Main;
