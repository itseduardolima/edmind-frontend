import { Container } from "react-bootstrap";
import { GridCard, Grid, GridLink } from "../../styles/Grid";
import {
  DescriptionWrapper,
  Pretitle,
  SubTitle,
} from "../../styles/DescripitionTitle";

import KaduFitness from "../../assets/kadu-fitness.jpeg";
import PerolaLanche from "../../assets/perola-lanches.jpeg";
import PortfolioDev from "../../assets/portfolio-dev.jpeg";

const Portfolio = () => {
  return (
    <Container>
      <DescriptionWrapper>
        <Pretitle>Portfólio</Pretitle>
        <SubTitle>Nosso Portfólio</SubTitle>
      </DescriptionWrapper>

      <Grid>
        <GridCard style={{ padding: "0" }}>
          <img src={KaduFitness} alt="" />
          <GridLink>
            <h5>Kadu Fitnesss</h5>
            <a href="https://kadufitness.netlify.app/" target="_blank">
              Acessar Projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
        <GridCard style={{ padding: "0" }}>
          <img src={PerolaLanche} alt="" />
          <GridLink>
            <h5>Pérola Lanches</h5>
            <a href="https://perola-lanches.netlify.app/" target="_blank">
              Acessar projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
        <GridCard style={{ padding: "0" }}>
          <img src={PortfolioDev} alt="" />
          <GridLink>
            <h5>Portófio Desenvolvedor</h5>
            <a href="https://eduardolima.netlify.app/" target="_blank">
              Acessar Projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
      </Grid>
    </Container>
  );
};

export default Portfolio;
