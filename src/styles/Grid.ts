import styled from "styled-components";

export const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 30px;
  margin-top: 2rem;
  padding-bottom: 30px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 998px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const GridCard = styled.div`
  text-align: justify;
  margin: auto;
  background-color: var(--boxColor);
  padding: 20px;
  border-radius: 5px;
  cursor: pointer;
  width: 350px;
  transition: transform 0.4s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  @media (min-width: 414px) {
    width: 390px;
  }

  @media (min-width: 768px) {
    width: 370px;
  }

  > h1 {
    margin: 1.5rem 0;
    font-size: 50px;
    color: var(--brand-color);
    font-weight: bold;
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

  > img {
    margin: 0 auto;
    width: 100%;
    border-radius: 5px 5px 0px 0px;
    margin-bottom: 1rem;
  }
`;

export const GridLink = styled.div`
  padding: 10px;
  > a {
    font-size: 13px;
    text-decoration: none;
    color: var(--brand-color);
  }

  > h5 {
    color: var(--title-2-color);
    font-weight: bold;
  }
`;
