import { Container } from "react-bootstrap";
import styled from "styled-components";

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
