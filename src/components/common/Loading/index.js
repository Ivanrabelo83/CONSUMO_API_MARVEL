import React from "react";

import { Container } from "./styles";

const Loading = ({ title, bg }) => {
  return (
    <Container color={bg}>
      <h1>{title}</h1>
    </Container>
  );
};

export { Loading };
