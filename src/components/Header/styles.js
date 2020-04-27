import styled from 'styled-components';

import topBannerImg from '../../assets/topo_1.png';

export const Container = styled.div`
  background: #ccc;
  display: flex;
  flex-direction: column;
`;

export const TopBanner = styled.div`
  height: 130px;
  background-image: url(${topBannerImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 715px) {
    height: 80px;
  }
`;
