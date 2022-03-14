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

import bannerImg from "../../assets/images/banner-series.png";

const Series = () => {
  const [loading, setLoading] = useState(true);
  const [series, setSeries] = useState([]);
  const [search, setSearch] = useState("");
  const [isSearch, setIsSearch] = useState(true);

  const findSeries = async () => {
    try {
      const timestamp = Number(new Date());
      const hash = createHash(timestamp);

      const { data } = await request.get(
        `/series?ts=${timestamp}&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setSeries(data.data.results);
      setLoading(false);
    } catch (err) {
      console.log(err);
      console.log(false);
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
        `/series?ts=${timestamp}&titleStartsWith=${search}&orderBy=title&limit=10&apikey=${PUBLIC_KEY}&hash=${hash.hex()}`
      );

      setSeries(data.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findSeries();
  }, []);

  const resetCharacters = () => {
    findSeries();
    setSearch("");
    setIsSearch(true);
  };

  if (loading) {
    return <Loading title="Carregando Séries ..." bg="#061B51" />;
  }

  return (
    <Container>
      <Header />
      <Banner image={bannerImg} />
      <Title color="#061B51">Series</Title>
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
        {series.map((serie, index) => (
          <Card
            Key={index}
            bg="#061b51"
            name={serie.title}
            photo={`${serie.thumbnail.path}.${serie.thumbnail.extension}`}
          />
        ))}
      </Content>
    </Container>
  );
};

export { Series };
