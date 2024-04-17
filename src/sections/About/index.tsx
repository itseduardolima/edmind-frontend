import { Container } from "react-bootstrap";
import ImgAbout from "../../assets/About us.svg";
import styled from "styled-components";
import { Pretitle, SubTitle, Text } from "../../styles/DescripitionTitle";

export const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const TextWrapper = styled.div`
  gap: 10px;
  width: 50vw;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Img = styled.img`
  width: 40vw;

  @media (max-width: 768px) {
    padding: 20px;
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <TextWrapper>
        <Pretitle>Sobre nós</Pretitle>
        <SubTitle>Construindo Sua Presença Digital</SubTitle>
        <Text>
          Estamos aqui para ajudar você a alcançar o sucesso online. Nossa
          equipe dedicada e criativa trabalha incansavelmente para criar
          soluções digitais que não apenas impressionam, mas também geram
          resultados tangíveis. Desde a criação de websites cativantes até a
          otimização para os mecanismos de busca e a criação de identidades
          visuais marcantes, estamos comprometidos em elevar sua marca a novos
          patamares de excelência. Junte-se a nós nesta jornada digital e
          descubra como podemos impulsionar o seu sucesso online.
        </Text>
      </TextWrapper>
      <Img src={ImgAbout} alt="About us" />
    </AboutContainer>
  );
};

export default About;
