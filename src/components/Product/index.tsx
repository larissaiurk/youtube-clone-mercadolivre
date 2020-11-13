import React from "react";

import ProductAction from "../ProductAction";
import paoItaliano from "../../assets/pao-Italiano.jpg";

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from "./styles";

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Carrinho</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={paoItaliano} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o produto que está esperando ou devolvemos seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
      Pão de origem européia de longa fermentação, propiciando casca rústica, miolo alveolado  e sabor característico.
      <br />
      <br />
      <h4>Validade</h4>
      8 meses<br />
      <br />
      <h4>Ingredientes</h4> <br />
      Farinha de trigo especial enriquecida com ferro e ácido fólico, amido modificado, sal refinado, gordura vegetal, ácido acético, soro de leite, amido pré gelatinizado, extrato de malte, estabilizante estearoil-2-lactil lactato de sódio, polisorbato, emulsificante poliglicerol de ácido ricinoleico, melhoradores de farinha ácido ascórbico e enzima alfa amilase.	 CONTÉM GLÚTEN. CONTÉM LACTOSE.<br/>


      <h4>Indicação de uso</h4> <br />
Produto indicado para o preparo de pão italiano
<br />
1) Colocar na masseira 1kg de mistura, 500ml de água gelada e por último, acrescentar 30g de fermento biológico fresco;
<br />
2) Misturar tudo até obter uma massa lisa e homogênea ou até ponto de véu;
<br />
3) Cortar no tamanho desejado;
<br />
4) Bolear, dando três descansos de 40 minutos (total de descanso 1h e 20min). Bolear a cada intervalo de 40 minutos;
<br />
5) Assar a 180ºC por 35 a 40 minutos, com vapor.

<br />
<br />

OBSERVAÇÕES
<br />
1) O tempo de amassamento pode variar em função de cada masseira. É importante bater a massa até seu completo desenvolvimento ou ponto de véu;
<br />
2) Temperatura recomendada para a massa durante mistura: 26°C a 30°C. Utilizar água gelada no preparo;
<br />
3) Os volumes de água a utilizar podem variar de acordo com consistência desejada;
<br />

Opção: para 24 h de descanso colocar 20g de fermento e colocar na câmara fria.
    </p>
  </Description>
);

export default Product;
