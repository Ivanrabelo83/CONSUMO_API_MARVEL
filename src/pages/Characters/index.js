import React, { useEffect, useState } from "react";

import request from "../../config/request";
import { PUBLIC_KEY, createHash } from "../../config";

import { Content } from "./../../global/styles.global";
import { Container } from "./styles";
import {
  Header,
  Banner,
  Title,
  Search,
  Card,
  Loading,
} from "../../components/common";

import bannerImg from "../../assets/images/banner-characters.png";

const Characters = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(true);

  const findCharacters = async () => {
    // const timestamp = Number(new Date());
    // const hash = createHash(timestamp);

    try {
      const timestamp = Number(new Date());
      const hash = createHash(timestamp);

      const { data } = await request.get(
        `/characters?ts=${timestamp}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setCharacters(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR", err);
      setLoading(false);
    }
  };
  const findCharactersByFilter = async () => {
    if (!search.length) {
      return alert("Digite um nome para pesquisar");
    }
    setIsSearch(false);
    const timestamp = Number(new Date());
    const hash = createHash(timestamp);

    try {
      const { data } = await request.get(
        `/characters?ts=${timestamp}&nameStartsWith=${search}&orderBy=name&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );
      setCharacters(data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findCharacters();
  }, []);

  const resetCharacters = () => {
    findCharacters();
    setSearch("");
    setIsSearch(true);
  };

  if (loading) {
    return <Loading title="Carregando Personagens..." bg="#C51402" />;
  }

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#C51402">Personagens</Title>
      <Search
        color="#C51402"
        btnTitle={isSearch ? `Pesquisar` : `Resetar`}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={() =>
          isSearch ? findCharactersByFilter() : resetCharacters()
        }
      />
      <Content>
        {characters.map((characters, index) => (
          <Card
            key={index}
            bg="#C51402"
            name={characters.name}
            photo={`${characters.thumbnail.path}.${characters.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Characters };
