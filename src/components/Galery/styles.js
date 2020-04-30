import styled from 'styled-components';
import Carousel from 'react-elastic-carousel';
import ReactModal from 'react-modal';

export const StyledCarousel = styled(Carousel)`
  padding: 0 calc(23% - 85px);
  align-self: center;
  margin-bottom: 20px;

  @media (max-width: 1400px) {
    padding: 0 calc(10% - 85px);
  }
`;

export const StyledReactModal = styled(ReactModal)`
  display: flex;
  position: relative;

  img {
    height: 600px;

    @media (max-width: 1200px) {
      height: 500px;
    }    

    @media (max-width: 1100px) {
      height: 400px;
    }
    
    @media (max-width: 715px) {
      height: 300px;
    }
    
    @media (max-width: 515px) {
      height: 250px;
    }
  }

  p {
    justify-self: flex-end;
    width: 100%;
    line-height: 560%;
    color: #000;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
    padding-left: 10px;
    height: 100px;
    background: rgba(0, 0, 0, 0.3);
  }

  button.close-button {
    background: #003c70;
    position: absolute;
    bottom: 95%;
    align-self: flex-end;
    color: #fff;
    border: none;
    border-radius: 50%;
    height: 36px;
    width: 36px;
  }
`;


export const GaleryButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;

  svg {
    height: 70px;
    width: 70px;
    color: #999;
    margin: 0;
  }
`;

export const GaleryItem = styled.li`
  height: 250px;
  flex: 1;
  display: flex;
  align-items: flex-end;
  background-position: center;
  background-size: cover;

  &:hover {
    cursor: pointer;
  }

  p {
    flex: 1;
    background: rgba(0, 0, 0, 0.3);
    color: #fff;
    font-weight: bold;
    margin-top: -3px;
    padding: 10px;
    text-align: center;
    transition: all 0.2s;
  }

  &:hover {
    p {
      background: rgba(0, 0, 0, 0.6);
    }
  }
`