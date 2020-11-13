import React from "react";

import ListProducts from "../ListProducts";

import { Container, Wrapper } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <ListProducts />
      </Wrapper>
    </Container>
  );
};

export default Home;
