import React, { Component } from 'react';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram, FaFlickr } from 'react-icons/fa'

import api from '../../services/api';

import { Container, BackButton, NavigationMenu, NavigationText } from './styles';

export default class Article extends Component {
  state = {
    brief: '',
    body: '',
    imageUrl: '',
  }

  async componentDidMount() {
    const { match } = this.props;

    const article = match.params.article;

    const response = await api.get(`/news/${article}`);

    this.setState({
      brief: response.data.brief,
      body: response.data.body,
      imageUrl: response.data.imageUrl,
    })
  }

  render() {
    const { brief, body, imageUrl } = this.state

    return (
      <>
        <NavigationMenu>
          <NavigationText to={'/'} >
            BIO RICARDO BARROS
          </NavigationText>

          <NavigationText to={'/'} >
            MANDATOS DE RESULTADO
          </NavigationText>

          <NavigationText to={'/'} >
            MINISTRO DA SAÚDE
          </NavigationText>

          <NavigationText to={'/'} >
            ACONTECE
          </NavigationText>

          <NavigationText to={'/'} >
            CONTATO
          </NavigationText>
            <a href="https://www.facebook.com/RicardoBarrosOficial/" 
              target="_blank"
              rel="noopener noreferrer"  
            ><FaFacebookF size={16} /></a>
            <a href="https://twitter.com/ricardobarrospp" 
              target="_blank"
              rel="noopener noreferrer"  
            ><FaTwitter size={18} /></a>
            <a href="https://www.youtube.com/channel/UCoBS1VEMMQL1vVgdA0K7WrQ" 
              target="_blank"
              rel="noopener noreferrer"  
            ><FaYoutube size={18} /></a>
            <a href="https://www.instagram.com/ricardobarros.oficial/" 
              target="_blank"
              rel="noopener noreferrer"  
            ><FaInstagram size={18} /></a>
            <a href="https://www.flickr.com/photos/ricardobarrosoficial" 
              target="_blank"
              rel="noopener noreferrer"  
            ><FaFlickr size={18} /></a>
        </NavigationMenu>
        <Container>
          <h1>{brief}</h1>
          <img src={imageUrl} alt="Artigo"/>
          <p>{body}</p>
          <BackButton to={'/'}>VOLTAR</BackButton>
        </Container>
      </>
    );
  }  
}
