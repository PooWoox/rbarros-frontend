import React from 'react';

import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <Header />
      <Routes />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
