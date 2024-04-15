import software from "../../assets/Software integration-bro.svg";
import { BubbleText } from "../../components/BubbleText";
import { BtnWhatsapp, HeroContent, HeroImg, HeroSection, Subtitle } from "./styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <BubbleText />

        <BtnWhatsapp
          href="https://api.whatsapp.com/send?phone=5592991887687&text=Ol%C3%A1!"
          target="_blank"
        >
          Entre em contato <i className="lab la-whatsapp"></i>{" "}
        </BtnWhatsapp>
      </HeroContent>

      <HeroImg src={software} alt="hero image" />
    </HeroSection>
  );
};

export default Hero;
