import React, { Component, useState, useEffect } from "react";
import CardHero from "../../components/CardHero";
import Service from "../../service";
import Headers from "../../components/Header";
import { Spinner } from "native-base";


const Main = (props) => {
  const [heroes, setHeroes] = useState([]);
  const [load, setLoad] = useState(false);
  const [limit, setLimit] = useState(90);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState(false);
  useEffect(() => {
    setLoad(true);
    getDataHeroes(limit, offset);
  }, []);

  async function getDataHeroes(limit, offset) {
    
    let data = await Service.getHeroes(limit, offset);

    setHeroes(data);
    setLoad(false);
  }

  async function getSearchData(data) {
    setLoad(true);        
    if (data) {
      if (data.length == 0) {
        alert("Herói não encontrado!");
        getDataHeroes(limit, offset);
      } else {
        setSearch(true)
        setHeroes([]);
        setHeroes(data);
        setLoad(false);
      }
    } else {
      setLoad(true)      
      getDataHeroes(limit, offset);
    }
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
          search={{ search }}
        />
      );
    }
  };

  const renderHeader = () => {
    return <Headers getSearchData={{ getSearchData }} />;
  };

  return (
    <>
      {renderHeader()}
      {renderCardHero()}
    </>
  );
};

export default Main;
