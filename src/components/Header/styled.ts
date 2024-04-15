import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNavbar = styled(Navbar)`
  background-color: var(--bg-dark);
  color: white;
  padding: 10px;
  position: fixed;
  width: 100%;
  transition: background-color 0.3s ease-in-out;
  z-index: 1000;

  @media (min-width: 761px) {
    background-color: ${(props) =>
      props.scrolled ? "var(--boxColor)" : "transparent"};
    padding: 1rem 5rem;
  }
`;

export const StyledNav = styled(Nav)`
  padding-top: 1rem;
  gap: 20px;

  @media (min-width: 991px) {
    padding-top: 0;
  }
`;

export const StyledBrand = styled.a`
  margin-right: 0;
  font-size: 30px;
  font-weight: 800;
  color: white;
  text-decoration: none;
  color: var(--bs-green);

  @media (min-width: 991px) {
    margin-right: 60%;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: white;
  font-weight: 500;
  border-bottom: 2px solid transparent;
  border-left: 2px solid transparent;
  padding-left: 5px;
  padding-bottom: 10px;
  color: var(--secendaryColor);

  &:hover {
    color: var(--bs-green);
    border-left: 2px solid var(--bg-orange);
  }

  &:focus {
    border-left: 2px solid var(--bg-primary);
  }

  @media (min-width: 991px) {
    padding-bottom: 0;
    &:hover {
      border-bottom: 2px solid var(--bg-orange);
      border-left: 2px solid transparent;
    }

    &:focus {
      border-bottom: 2px solid var(--bg-orange);
      border-left: 2px solid transparent;
    }
  }
`;

export const BurguerButton = styled(Navbar.Toggle)`
  border: none;
  padding: 0;

  &:focus {
    box-shadow: none !important;
  }
`;
