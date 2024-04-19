import styled from "styled-components";

export const DescriptionWrapper = styled.div`
  margin-top: 3rem;
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
  font-size: 30px;
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
