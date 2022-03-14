import styled from "styled-components";

const Banner = styled.div`
  width: 100%;
  height: 537px;
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
`;

export { Banner };
