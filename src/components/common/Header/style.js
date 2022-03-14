import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
`;

export const Menu = styled.nav`
  ul {
    display: flex;
  }
  li {
    margin: 0 20px;
    list-style: none;
    font-size: 14px;
  }
  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }
`;
