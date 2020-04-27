import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  button {
    background: #0e3f71;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    align-self: center;
    margin-top: 20px;
    padding: 5px;
    border: none;

    &:hover {
      background: #003c70;
    }
  }
`;

export const NewsGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  a {
    text-decoration: none;

    &:first-child {
      grid-column-start: 1;
      grid-column-end: 3;
    }

    @media (max-width: 700px) {
      &:first-child {
        grid-column-start: 1;
        grid-column-end: 1;
      }
    }

    li {
      list-style: none;
      background: rgba(0, 0, 0, 0.1);
      height: 350px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      background-position: center;
      background-size: cover;

      &:hover {
        cursor: pointer;

        p {
          background: rgba(255, 255, 255, 0.2);
        }
      }

      p {
        flex: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 100%;
        color: #fff;
        font-weight: 700;
        background: rgba(0, 0, 0, 0.2);
        font-size: 14px;
        padding: 10px;
        transition: all 0.2s;
      }
    }

  }
`;
