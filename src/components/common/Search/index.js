import React from "react";

import { Container } from "../../common/Search/styles";
import { Input, Button } from "..";

const Search = ({ btnTitle, color, onClick, onChange, value }) => {
  return (
    <Container>
      <Input
        placeholder="Pesquisar..."
        borderColor={color}
        onChange={onChange}
        value={value}
      />
      <Button backgroundColor={color} type="button" onClick={() => onClick()}>
        {btnTitle}
      </Button>
    </Container>
  );
};

export { Search };
