import { Container } from "react-bootstrap";
import { ServiceCard, ServiceGrid } from "./styled";
import { DescriptionWrapper, Pretitle, SubTitle, Text } from "../../styles/DescripitionTitle";

const Services = () => {
  return (
    <Container>
      <DescriptionWrapper>
        <Pretitle>Nossos Serviços</Pretitle>
        <SubTitle>O que estamos oferecendo?</SubTitle>
        <Text>
          Uma gama completa de serviços para impulsionar sua presença online.
          Desde o desenvolvimento web de alta qualidade até o design gráfico
          impactante e estratégias de SEO personalizadas, estamos aqui para
          ajudar você a alcançar seus objetivos digitais. Transforme sua marca,
          aumente sua visibilidade e conquiste o sucesso online conosco.
        </Text>
      </DescriptionWrapper>

      <ServiceGrid>
        <ServiceCard>
          <i className="las la-code"></i>
          <h2>Desenvolvimento Web</h2>
          <p>
            Transforme suas ideias em realidade digital com nosso
            desenvolvimento web personalizado. Criamos websites que não apenas
            impressionam visualmente, mas também oferecem uma experiência
            excepcional ao usuário, garantindo que sua marca se destaque online.
          </p>
          <a href="#">
            Ler mais <i className="las la-arrow-right"></i>
          </a>
        </ServiceCard>
        <ServiceCard>
          <i className="las la-marker"></i>
          <h2>Design Gráfico</h2>
          <p>
            Dê vida à sua marca com nosso design gráfico de ponta. Desde
            logotipos e identidades visuais até materiais de marketing e
            gráficos para redes sociais, nossa equipe criativa está aqui para
            transmitir a essência da sua marca de forma memorável e impactante.
          </p>
          <a href="#">
            Ler mais <i className="las la-arrow-right"></i>
          </a>
        </ServiceCard>
        <ServiceCard>
          <i className="las la-search"></i>
          <h2>Serviços SEO</h2>
          <p>
            Seja encontrado quando importa! Nossos serviços de SEO são
            projetados para melhorar sua classificação nos mecanismos de busca,
            aumentar sua autoridade online e direcionar o tráfego qualificado
            para o seu website. Alcance seu público-alvo onde eles estão
            procurando.
          </p>
          <a href="#">
            Ler mais <i className="las la-arrow-right"></i>
          </a>
        </ServiceCard>
      </ServiceGrid>
    </Container>
  );
};

export default Services;
