import styled from 'styled-components';

import backgroundImg from '../../assets/bg_blue.png';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 100%;
  margin-top: 20px;
  background: #7159c1;
  background-image: url(${backgroundImg});
  background-size: cover;
  background-position: center;
`;

export const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  padding: 0 23%;

  @media (max-width: 1400px) {
    padding: 0 10%;
  }
`;

export const ContactArea = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;

  h1 {
    font-family: 'Gotham Medium';
    margin-bottom: 10px;
  }

  h2 {
    font-family: 'Gotham Medium';
    font-weight: 300;
  }

  p {
    font-family: 'Gotham Light';
  }
`;

export const FormArea = styled.div`
  display: flex;
  flex-direction: column;

  input {
    height: 30px;
    padding: 0 6px;
    font-size: 14px;
    font-family: 'Gotham Light';
  }

  div {
    display: flex;
    margin-top: 5px;

    input {
      flex: 1;
      margin-right: 5px;
    }

    button {
      background: #45b551;
      width: 40%;
      border: none;
      color: #fff;
      font-weight: bold;
      font-family: 'Gotham Medium';
    }
  }

  img {
    width: 300px;
    margin-top: auto;
  }
`;