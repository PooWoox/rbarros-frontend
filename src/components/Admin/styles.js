import styled from 'styled-components';

export const Container = styled.div`
  background: #222;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  h1 {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    input {
      border: none;
      padding: 5px;
      margin-bottom: 5px;
      text-justify: center;
    }

    textarea {
      border: none;
      padding: 5px;
      text-justify: center;
      width: 500px;
      margin-bottom: 5px;
    }

    span {
      color: #fff;
      display: flex;

      p {
        color: red;
        flex: 1;
      }
    }

    button {
      border: none;
      color: #fff;
      font-size: 14px;
      padding: 5px;
      background: #0e3f71;
    }
  }
`;
