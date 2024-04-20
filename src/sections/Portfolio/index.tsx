import { GridCard, Grid, GridLink } from "../../styles/Grid";
import { DescriptionWrapper, Pretitle, SubTitle } from "../../styles/DescripitionTitle";
import { useRef } from "react";
import { SectionContainer } from "../../styles/Container";

import KaduFitness from "../../assets/kadu-fitness.jpeg";
import PerolaLanche from "../../assets/perola-lanches.jpeg";
import PortfolioDev from "../../assets/portfolio-dev.jpeg";

type PortfolioProps = {
  id?: string;
};

const Portfolio: React.FC<PortfolioProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <SectionContainer id={id} ref={ref}>
      <DescriptionWrapper>
        <Pretitle>Portfólio</Pretitle>
        <SubTitle>Nosso portfólio</SubTitle>
      </DescriptionWrapper>

      <Grid>
        <GridCard style={{ padding: "0" }}>
          <img src={KaduFitness} alt="Kadu Fitness" />
          <GridLink>
            <h5>Kadu Fitness</h5>
            <a href="https://kadufitness.netlify.app/" target="_blank">
              Acessar projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
        <GridCard style={{ padding: "0" }}>
          <img src={PerolaLanche} alt="Perola Lanches" />
          <GridLink>
            <h5>Pérola Lanches</h5>
            <a href="https://perola-lanches.netlify.app/" target="_blank">
              Acessar projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
        <GridCard style={{ padding: "0" }}>
          <img src={PortfolioDev} alt="Portfolio" />
          <GridLink>
            <h5>Portfólio Desenvolvedor</h5>
            <a href="https://eduardolima.netlify.app/" target="_blank">
              Acessar projeto <i className="las la-arrow-right"></i>
            </a>
          </GridLink>
        </GridCard>
      </Grid>
    </SectionContainer>
  );
};

export default Portfolio;
