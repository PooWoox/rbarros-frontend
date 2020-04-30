import styled, { css } from 'styled-components';
import { Link } from 'react-scroll';

export const NavigationMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px;
  background: #718591;

  @media (max-width: 650px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  a {
    svg {
      margin: 0 5px;
      color: #fff;

      &:hover {
        color: #24587f;
        cursor: pointer;
      }

      @media (max-width: 650px) {
        margin: 0;
      }
    }

    @media (max-width: 650px) {
      margin: 0;
      background: #718591;
      width: 30%;
      border: 2px solid #718591;
    }
  }
  
  a.navigationBurger {
    svg {
      margin: 0 5px;
      color: #fff;

      &:hover {
        color: #24587f;
        cursor: pointer;
      }

      @media (max-width: 650px) {
        margin: 0;
      }
    }

    @media (max-width: 650px) {
      display: none;
      margin: 0;
      background: #718591;
      width: 30%;
      border: 2px solid #718591;
    }
  }

  a.stackBurger {
    display: none;
    margin-top: 10px;
    margin-left: 10px;

    @media (max-width: 650px) {
      display: block;
    }
  }
`;

export const NavigationText = styled(Link)`
  color: #fff;
  font-family: 'Gotham Medium';
  font-size: 16px;
  padding: 0 20px;

  &:hover {
    color: #24587f;
    cursor: pointer;
  }

  @media (max-width: 900px) {
    font-size: 13px;
  }

  @media (max-width: 715px) {
    padding: 5px;
    font-size: 12px;
  }

  @media (max-width: 650px) {
    padding: 2px;
    font-size: 9px;
    width: 20%;
    background: #718591;
  }
`;