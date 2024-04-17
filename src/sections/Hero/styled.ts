import styled from "styled-components";
import Image from "../../assets/log-in-girl.svg";

export const HeroSection = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100vh;

  @media (max-width: 768px) {
    background-image: url(${Image});
    background-size: cover;
    background-position: right;
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
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
  animation: fadeInDown 1s ease-in-out;
  color: white;
  text-align: center;


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
`;

export const Subtitle = styled.p`
  cursor: pointer;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
  animation: fadeInUp 1s ease-in-out;
  color: var(--title-2-color);
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

  > i {
    font-size: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroImg = styled.svg`
  width: 40vw;
  padding: 0 30px;

  background-image: url(${Image});
  background-size: cover;
  background-position: center;

  @media (max-width: 768px) {
    display: none;
  }
`;
