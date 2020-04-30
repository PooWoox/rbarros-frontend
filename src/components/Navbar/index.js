import React, { useState } from 'react';
import { 
  FaFacebookF, 
  FaTwitter, 
  FaYoutube, 
  FaInstagram, 
  FaFlickr 
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import { NavigationMenu, NavigationText, } from './styles';

export default function Navbar() {
  const [showBurger, setShowBurger] = useState(false);

  function handleShowBurger() {
    setShowBurger(!showBurger);
  }

  return (
    <NavigationMenu>
      <a className="stackBurger" onClick={() => handleShowBurger()} ><GiHamburgerMenu size={20}/></a>
      {showBurger ? (
        <>
        <NavigationText 
        visibleBurger={showBurger} activeClass="active" to="bio-section" smooth={true} offset={-10} duration={700}
      >
        BIO RICARDO BARROS
      </NavigationText>

      <NavigationText
        visibleBurger={showBurger} activeClass="active" to="career-section" smooth={true} offset={-10} duration={700}
      >
        MANDATOS DE RESULTADO
      </NavigationText>

      <NavigationText
        visibleBurger={showBurger} activeClass="active" to="minister-section" smooth={true} offset={-10} duration={700}
      >
        MINISTRO DA SAÚDE
      </NavigationText>

      <NavigationText
        visibleBurger={showBurger} activeClass="active" to="news-section" smooth={true} offset={-10} duration={700}
      >
        ACONTECE
      </NavigationText>

      <NavigationText
        visibleBurger={showBurger} activeClass="active" to="contact-section" smooth={true} offset={-10} duration={700}
      >
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
        </>
      ) : null}
      <NavigationText 
        className="navigationBurger" activeClass="active" to="bio-section" smooth={true} offset={-10} duration={700}
      >
        BIO RICARDO BARROS
      </NavigationText>

      <NavigationText
        className="navigationBurger" activeClass="active" to="career-section" smooth={true} offset={-10} duration={700}
      >
        MANDATOS DE RESULTADO
      </NavigationText>

      <NavigationText
        className="navigationBurger" activeClass="active" to="minister-section" smooth={true} offset={-10} duration={700}
      >
        MINISTRO DA SAÚDE
      </NavigationText>

      <NavigationText
        className="navigationBurger" activeClass="active" to="news-section" smooth={true} offset={-10} duration={700}
      >
        ACONTECE
      </NavigationText>

      <NavigationText
        className="navigationBurger" activeClass="active" to="contact-section" smooth={true} offset={-10} duration={700}
      >
        CONTATO
      </NavigationText>
        <a href="https://www.facebook.com/RicardoBarrosOficial/" 
          target="_blank"
          rel="noopener noreferrer"
          className="navigationBurger"  
        ><FaFacebookF size={16} /></a>
        <a href="https://twitter.com/ricardobarrospp" 
          target="_blank"
          rel="noopener noreferrer"
          className="navigationBurger"  
        ><FaTwitter size={18} /></a>
        <a href="https://www.youtube.com/channel/UCoBS1VEMMQL1vVgdA0K7WrQ" 
          target="_blank"
          rel="noopener noreferrer"
          className="navigationBurger"  
        ><FaYoutube size={18} /></a>
        <a href="https://www.instagram.com/ricardobarros.oficial/" 
          target="_blank"
          rel="noopener noreferrer"
          className="navigationBurger"  
        ><FaInstagram size={18} /></a>
        <a href="https://www.flickr.com/photos/ricardobarrosoficial" 
          target="_blank"
          rel="noopener noreferrer"
          className="navigationBurger"  
        ><FaFlickr size={18} /></a>
    </NavigationMenu>
  );
}
