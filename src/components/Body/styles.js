import styled, { css } from 'styled-components';
import { Element, Link } from 'react-scroll';
import ReactModal from 'react-modal';

import rcBannerImg from '../../assets/banner_top.png';

export const BannerMain = styled.div`
  height: 500px;
  background-image: url(${rcBannerImg});
  background-position: center;
  background-size: cover;

  @media (max-width: 900px) {
    height: 250px;
  }

  @media (max-width: 400px) {
    height: 200px;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 23%;

  @media (max-width: 1400px) {
    padding: 0 10%;
  }
`;

export const SectionTitle = styled(Element)`
  font-size: 40px;
  font-family: 'Myriad Bold';
  background: #718591;
  box-sizing: border-box;
  border-top: 3px solid #718591;
  line-height: 0.6;
  color: #d7dadc;
  padding-left: 10px;
  margin-bottom: 10px;
  margin-top: 40px;
`;

export const SectionImage1 = styled.div`
  display: flex;
  justify-content: center;
  background: #222;
  margin-top: 5px;
  margin-bottom: 15px;

  img {
    width: 100%;
  }
`;

export const SectionText = styled.div`
  @keyframes renderText {
    from {opacity: 0%}
    to {opacity: 100%}
  } 

  font-size: 16px;
  line-height: 1.4;
  white-space: pre-wrap;
  color: #1c1c1b;
  transition: all 2s ease;
  animation: renderText;
  animation-duration: 1s;

  h1 {
    color: #0e3f71;
    font-size: 40px;
    margin-top: 15px;
    margin-bottom: -5px;
    transition: all 2s ease;
  }

  h3 {
    color: #549ce5;
    font-size: 24px;
    margin-bottom: 10px;
    transition: all 2s ease;
  }

`;

export const SectionImage2 = styled.div`
  display: flex;
  justify-content: center;
  background: #222;
  background-image: url(${props => props.backgroundImg});
  background-position: center;
  background-size: cover;
  margin-top: 5px;
  margin-bottom: 15px;

  img {
    width: 100%;
  }
`;

export const TimeLineTitle = styled.h1`
  font-size: 64px;
  color: #0e3f71;
`;

export const TimeLineSubtitle = styled.h2`
  color: #0e3f71;
`;

export const TimeLineArea = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  position: relative;
  padding: 0 4%;
  margin: 20px 0;

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 4px;
    background: linear-gradient(to left, #0e3f71 50%, #718591 50%);
    background-size: 200% 100%;
    background-position: -${props => props.position}%;
    top: 96%;
    transition: all 0.5s ease;
  }
`

export const TimeLineEvent = styled.li`
  flex: 1;
  text-align: center;
  padding: 10px 0;
  position: relative;
  justify-content: center;

  &:hover {
    cursor: pointer;

    h3 {
      color: #549ce5;
    }
  }

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 87%;
    margin-left: -5px;
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #718591;
    z-index: 1;
    transition: all 1s ease;
  }

  ${props => props.history && css`
    h3 {
      color: #0e3f71;
    }

    &:before {
      background: #0e3f71;
    }
  `}

  ${props => !props.history && css`
    h3 {
      color: #222;
    }
  `}

  ${props => props.active && css`
    h3 {
      color: #549ce5;
    }

    &:before {
      background: #549ce5;
    }
  `}

  h3 {
    font-size: 20px;
    font-weight: 500;
    margin: 10px 0;

    @media (max-width: 700px) {
      font-size: 12px;
    }

    @media (max-width: 450px) {
      font-size: 10px;
    }
  }
`;

export const VideoGalery = styled.ul`
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  list-style: none;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }

  li {
    display: flex;
    height: 200px;
    background: #222;
    background-position: center;
    background-size: cover;
    align-items: center;
    justify-content: center;

    &:hover {
      cursor: pointer;
    }

    svg {
      width: 70px;
      height: 70px;
      color: #fff;
      transition: all 0.1s;
    }

    &:active {
      svg {
        width: 67px;
        height: 67px;
      }
    }
  }
`;

export const HistoryButton = styled(Link)`
  background: #0e3f71;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  width: 160px;
  margin-top: 20px;
  padding: 5px;
  border: none;

  &:hover {
    background: #003c70;
    cursor: pointer;
  }

  p {
    font-size: 18px;
    font-weight: 500;
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
    color: #222;
    margin: 0;
  }
`;

export const StyledReactModal = styled(ReactModal)`
  display: flex;
  padding: 0 calc(20% - 70px);
  
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;

    h1 {
      color: #003c70;
    }

    button.close-button {
    background: #003c70;
    color: #fff;
    border: none;
    border-radius: 50%;
    height: 36px;
    width: 36px;
    margin-bottom: 10px;
  }
  }

    li {
      display: flex;
      height: 180px;
      width: 220px;
      background: #222;
      background-position: center;
      background-size: cover;

      &:hover {
        cursor: pointer;
      }

    svg {
      color: #000;
    }
  }
`;