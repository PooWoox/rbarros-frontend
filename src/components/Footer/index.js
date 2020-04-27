import React from 'react';

import { Container, MainArea, ContactArea, FormArea } from './styles';

import Navbar from '../Navbar';

import logo from '../../assets/ricardo_barros.png';

export default function Footer() {
  return (
    <Container>
      <MainArea>
        <ContactArea>
          <h2>Filie-se</h2>
          <h1>FAÇA PARTE</h1>
          <p>Escritório Político</p>
          <p>Avenida Prudente de Morais, 750 - Zona 7</p>
          <p>CEP: 87010-020 - Maringá/PR</p>
          <p>Fone: (44) 3225.1151</p>
        </ContactArea>
        <FormArea>
          <input type="text" placeholder="E-MAIL"/>
          <div>
            <input type="text" placeholder="TELEFONE"/>
            <button>PARTICIPAR</button>
          </div>
          <img src={logo} alt="Ricardo Barros"/>
        </FormArea>
      </MainArea>
      <Navbar />
    </Container>
  );
}
