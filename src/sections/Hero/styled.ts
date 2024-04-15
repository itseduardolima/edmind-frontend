import styled from "styled-components";

export const HeroSection = styled.div`
  background: linear-gradient(to bottom, #151515, #1e1e1e);
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;

  > img {
    width: 40vw;
    padding: 0 30px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    height: 90vh;
    flex-direction: column;
  }
`;

export const HeroContent = styled.div`
  width: 50vw;
  padding: 0 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;

  @media (max-width: 768px) {
    width: 100%;
    padding: 0 20px;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-in-out;
  color: var(--primaryColor);
  @keyframes fadeInDown {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  > span {
    color: var(--bs-green);
  }
`;

export const Subtitle = styled.p`
  animation: fadeInUp 1s ease-in-out;
  color: var(--secendaryColor);
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const BtnWhatsapp = styled.a`
  gap: 5px;
  padding: 10px;
  width: 40%;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 20px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  background-color: var(--bs-green);
  color: var(--boxColor);

  > i {
    font-size: 20px;
  }

  @media (max-width: 768px) {

    width: 100%;
  }
`;
