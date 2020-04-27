import styled from 'styled-components';
import { Link } from 'react-scroll';

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