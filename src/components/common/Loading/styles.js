import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${(props) => props.color || "#FFF"};
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    color: #fff;
  }
`;
