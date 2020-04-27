import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

export const Container = styled.div`
  padding: 0 23%;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    color: #0e3f71;
    margin: 15px 0;
  }

  img {
    width: 100%;
  }

  p {
    margin: 15px 0;
    white-space: pre-wrap;
  }
`;

export const BackButton = styled(Link)`
  margin: 15px 0;
  background: #0e3f71;
  color: #fff;
  align-self: center;
  text-decoration: none;
  padding: 5px 10px;
  font-family: 'Gotham Medium';
`;

// Navbar

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background: #718591;

  a {
    svg {
      margin: 0 5px;
      color: #fff;

      &:hover {
        color: #24587f;
        cursor: pointer;
      }
    }
  }
`;

export const NavigationText = styled(Link)`
  color: #fff;
  font-family: 'Gotham Medium';
  font-size: 16px;
  padding: 0 20px;
  text-decoration: none;

  &:hover {
    color: #24587f;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 14px;
  }

  @media (max-width: 715px) {
    padding: 5px;
    font-size: 12px;
  }

  @media (max-width: 600px) {
    padding: 2px;
    font-size: 9px;
  }
`;