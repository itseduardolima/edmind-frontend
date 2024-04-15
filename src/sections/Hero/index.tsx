
import { BubbleText } from "../../components/BubbleText";
import { BtnWhatsapp, HeroContent, HeroImg, HeroSection } from "./styled";

const Hero = () => {
  return (
    <HeroSection>
      <HeroImg />
      <HeroContent>
        <BubbleText />

        <BtnWhatsapp
          href="https://api.whatsapp.com/send?phone=5592991887687&text=Ol%C3%A1!"
          target="_blank"
        >
          Entre em contato <i className="lab la-whatsapp"></i>{" "}
        </BtnWhatsapp>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
