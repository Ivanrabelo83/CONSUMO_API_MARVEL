import React from "react";
import { Link } from "react-router-dom";

import { Container, Menu } from "../Header/style";

const Header = () => {
  return (
    <Container>
      <Menu>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>

          <li>
            <Link to="/personagens">Personagens</Link>
          </li>

          <li>
            <Link to="/quadrinhos">Quadrinhos</Link>
          </li>

          <li>
            <Link to="/series">Séries</Link>
          </li>
        </ul>
      </Menu>
    </Container>
  );
};

export { Header };
