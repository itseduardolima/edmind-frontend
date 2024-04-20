import { useRef } from "react";
import { FooterColumn, FooterContact, FooterContainer, FooterGrid, FooterTitle, SocialMedia } from "./styled";

type ContactProps = {
  id?: string;
};

const Footer: React.FC<ContactProps> = ({ id }) => {
  const ref = useRef(null);

  return (
    <FooterContainer id={id} ref={ref}>
      <FooterGrid>
        <FooterColumn>
          <FooterTitle>Saiba mais sobre nós</FooterTitle>
          <p>
            Obtenha seu orçamento <br /> ou ligue: +55 (92) 991887687
          </p>
          <a
            href="https://api.whatsapp.com/send?phone=5592991887687&text=Ol%C3%A1!"
            target="_blank"
          >
            Whatsapp <i className="lab la-whatsapp"></i>
          </a>
        </FooterColumn>
        <FooterColumn>
          <h4>Contate-nos</h4>
          <FooterContact>
            <p className="footer-link">edmindsoluctions@gmail.com</p>
            <p className="footer-link">+55 (92) 99188-7687</p>
            <p className="footer-link">+55 (92) 98445-3980</p>
          </FooterContact>
        </FooterColumn>
        <FooterColumn>
          <h4>Redes Sociais</h4>
          <SocialMedia>
            <i className="lab la-twitter"></i>
            <i className="lab la-instagram"></i>
            <i className="lab la-facebook"></i>
            <i className="lab la-telegram"></i>
          </SocialMedia>
        </FooterColumn>
      </FooterGrid>
    </FooterContainer>
  );
};

export default Footer;
