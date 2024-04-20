import ImgAbout from "../../assets/About us.svg";
import { useRef } from "react";
import { Pretitle, SubTitle, Text } from "../../styles/DescripitionTitle";
import { AboutContainer, Img, TextWrapper } from "./styled";

type AboutProps = {
  id?: string;
};

const About: React.FC<AboutProps> = ({ id }) => {
  const ref = useRef(null);
  return (
    <AboutContainer id={id} ref={ref}>
      <TextWrapper>
        <Pretitle>Sobre nós</Pretitle>
        <SubTitle>Construindo sua presença digital</SubTitle>
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
