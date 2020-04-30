import styled from 'styled-components';

import topBannerImg from '../../assets/topo_1.png';

export const Container = styled.div`
  background: #ccc;
`;

export const TopBanner = styled.div`
  display: flex;
  justify-content: center;
  background: #222;
  background-image: url(${props => props.backgroundImg});
  background-position: center;
  background-size: cover;

  img {
    width: 100%;
  }
`;
