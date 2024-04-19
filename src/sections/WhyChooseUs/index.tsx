import { Container } from "react-bootstrap";
import { GridCard, Grid } from "../../styles/Grid";
import {
  DescriptionWrapper,
  Pretitle,
  SubTitle,
  Text,
} from "../../styles/DescripitionTitle";

const WhyChooseUs = () => {
  return (
    <Container>
      <DescriptionWrapper>
        <Pretitle>PORQUE ESCOLHER-NOS</Pretitle>
        <SubTitle>Por que nossos clientes nos escolhem?</SubTitle>
        <Text>
          Descubra agora as três principais razões pelas quais nossos clientes
          confiam em nós:
        </Text>
      </DescriptionWrapper>

      <Grid>
        <GridCard>
          <h1>01.</h1>
          <h2>Rapidez</h2>
          <p>
            Entregamos soluções digitais com agilidade, garantindo que seus
            projetos sejam concluídos no prazo e dentro do orçamento, sem
            comprometer a qualidade.
          </p>
        </GridCard>
        <GridCard>
          <h1>02.</h1>
          <h2>Melhores Tecnologias</h2>
          <p>
            Utilizamos as melhores tecnologias para
            desenvolvimento web, design gráfico e SEO, garantindo que sua
            presença online esteja sempre à frente da concorrência..
          </p>
        </GridCard>
        <GridCard>
          <h1>03.</h1>
          <h2>Experiência</h2>
          <p>
            Com anos de experiência, nossa equipe tem o conhecimento e a
            habilidade necessários para enfrentar os desafios, garantindo
            resultados excepcionais para sua marca.
          </p>
        </GridCard>
      </Grid>
    </Container>
  );
};

export default WhyChooseUs;
