import React from "react";

import { Container, Top, Bottom } from "./styles";

const Card = ({ bg, photo, name }) => {
  return (
    <Container color={bg}>
      <Top src={photo} />
      <Bottom>
        <p>{name}</p>
      </Bottom>
    </Container>
  );
};

export { Card };
