import React, { useEffect, useState } from "react";
import request from "../../config/request";
import { PUBLIC_KEY, createHash } from "../../config";

import { Content } from "../../global/styles.global";
import { Container } from "./styles";
import {
  Header,
  Banner,
  Title,
  Search,
  Card,
  Loading,
} from "../../components/common";

import bannerImg from "../../assets/images/banner-comics.png";

const Comics = () => {
  const [loading, setLoading] = useState(true);
  const [comics, setComics] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(true);

  const findComics = async () => {
    // const timestamp = Number(new Date());
    //  const hash = createHash(timestamp);

    try {
      const timestamp = Number(new Date());
      const hash = createHash(timestamp);

      const { data } = await request.get(
        `/comics?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setComics(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log("ERROR: ", err);
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
        `/comics?ts=${timestamp}&titleStartsWith=${search}&orderBy=title&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setComics(data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findComics();
  }, []);

  const resetCharacters = () => {
    findComics();
    setSearch("");
    setIsSearch(true);
  };

  if (loading) {
    return <Loading title="Carregando Quadrinhos..." bg="#0F2034" />;
  }

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#0F2034">Quadrinhos</Title>
      <Search
        color="#08436C"
        btnTitle={isSearch ? `Pesquisar` : `Resetar`}
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        onClick={() =>
          isSearch ? findCharactersByFilter() : resetCharacters()
        }
      />

      <Content>
        {comics.map((comic, index) => (
          <Card
            key={index}
            bg="#0F2034"
            name={comic.title}
            photo={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Comics };
