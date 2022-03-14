import styled from "styled-components";

const Button = styled.button`
  width: 170px;
  height: 40px;
  border: none;
  border-radius: 8px;
  background-color: ${(props) => props.backgroundColor};
  color: #fff;
  font-size: 1.6rem;
  font-weight: bold;
  margin: 0 8px;
  cursor: pointer;
`;

export { Button };
