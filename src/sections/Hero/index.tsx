import software from "../../assets/Software integration-bro.svg";
import {
  BtnWhatsapp,
  HeroContent,
  HeroSection,
  Subtitle,
  Title,
} from "./styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Title>
          Excelentes <span>soluções</span> de TI <br /> para o seu sucesso
        </Title>
        <Subtitle>
          Transformando visões em realidade digital com design inovador,
          desenvolvimento de websites personalizados, estratégias de SEO sob
          medida e uma gama completa de soluções para impulsionar o seu sucesso
          online.
        </Subtitle>
        <BtnWhatsapp href="https://api.whatsapp.com/send?phone=5592991887687&text=Ol%C3%A1!" target="_blank" >
          Entre em contato <i className="lab la-whatsapp"></i>{" "}
        </BtnWhatsapp>
      </HeroContent>

      <img src={software} alt="hero image" />
    </HeroSection>
  );
};

export default Hero;
