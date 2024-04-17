import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

export const Pretitle = styled.h4`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  color: var(--brand-color);
`;

export const SubTitle = styled.h1`
  color: var(--primaryColor);
  font-size: 45px;
  font-weight: bold;
  position: relative;
  text-transform: capitalize;
`;

export const Text = styled.p`
  color: var(--secendaryColor);
  font-size: 16px;
  line-height: 32px;
  font-weight: 400;
`;

export const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 998px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ServiceCard = styled.div`
  text-align: justify;
  margin: auto;
  background-color: var(--boxColor);
  padding: 20px;
  border-radius: 5px;
  width: 350px;

  @media (min-width: 414px) {
    width: 390px;
  }

  @media (min-width: 768px) {
    width: 400px;
  }

  > i {
    color: var(--brand-color);
    font-size: 2.5rem;
    margin-bottom: 20px;

    @media (min-width: 768px) {
      font-size: 4rem;
    }
  }

  > h2 {
    color: var(--title-2-color);
    font-size: 26px;
    font-weight: bold;
    position: relative;
    text-transform: capitalize;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  > p {
    color: var(--secendaryColor);
    font-size: 16px;
    line-height: 32px;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 1rem;
  }

  > a {
    text-decoration: none;
    text-transform: capitalize;
    color: var(--brand-color);
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;
    gap: 5px;
  }
`;
