import React from "react";

import paoItaliano from "../../assets/pao-Italiano.jpg";
import redirectTo from '../../routes/redirectTo';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Menu,
  Product,
} from "./styles";

const ListProducts: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Carrinho</a>
      </Row>
      <Panel>
        <Menu>
          <section>
            <h3 className="title">Ordenar anúncios</h3>
            <select>
              <option selected value="relevante">Mais relevante</option>
              <option value="menorpreco">Menor preço</option>
              <option value="maiorpreco">Maior preço</option>
            </select>
          </section>

          <section>
            <h3 className="title">Categorias</h3>
            <strong className="sub-title">Panificação</strong>
            <div className="categories">
              <a href="#">Pães Especiais</a>
              <a href="#">Panetones</a>
              <a href="#">Salgados</a>
            </div>
            <strong className="sub-title">Confeitaria</strong>
            <div className="categories">
              <a href="#">Bolos tradicionais</a>
              <a href="#">Cakes</a>
              <a href="#">Recheios</a>
            </div>
          </section>
        </Menu>


        <Column>
          <Product onClick={ () => {redirectTo.produto.lista()}}>
            <Gallery>
              <img alt="Pão italiano" src={paoItaliano} />
            </Gallery>
            <h3 className="title">Pão Italiano</h3>
            <h3>R$ 37,99</h3>
            <p>em 6x 6,96</p>

            <p>Pão de origem européia de longa fermentação, propiciando casca rústica, miolo alveolado  e sabor característico</p>
          </Product>
          <Product>
            <Gallery>
              <img alt="T-Shirt" src={paoItaliano} />
            </Gallery>
            <h3 className="title">Pão Italiano</h3>
            <h3>R$ 37,99</h3>
            <p>em 6x 6,96</p>

            <p>Pão de origem européia de longa fermentação, propiciando casca rústica, miolo alveolado  e sabor característico</p>
          </Product>
          <Product>
            <Gallery>
              <img alt="T-Shirt" src={paoItaliano} />
            </Gallery>
            <h3 className="title">Pão Italiano</h3>
            <h3>R$ 37,99</h3>
            <p>em 6x 6,96</p>

            <p>Pão de origem européia de longa fermentação, propiciando casca rústica, miolo alveolado  e sabor característico</p>
          </Product>
        </Column>
      </Panel>
    </Container>
  );
};

export default ListProducts;
