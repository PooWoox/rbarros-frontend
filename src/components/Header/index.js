import React from 'react';

import {
  Container,
  TopBanner,
} from './styles';

import banner_top from '../../assets/topo_1.png';

export default function Header() {
  return (
    <Container>
      <TopBanner>
        <img src={banner_top} alt="rbarros_banner"/>
      </TopBanner>
    </Container>
  );
}
