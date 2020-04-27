import React, { useState, useEffect } from 'react';
import { consts } from 'react-elastic-carousel';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { AiOutlineClose } from 'react-icons/ai';

import api from '../../services/api';

import { StyledCarousel, StyledReactModal, GaleryButton, GaleryItem } from './styles';

export default function Galery() {
  const [galery, setGalery] = useState([]);
  const [activeImage, setActiveImage] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const breakpoints = [
    { width: 200, itemsToShow: 1, itemsToScroll: 1 },
    { width: 400, itemsToShow: 2, itemsToScroll: 2 },
    { width: 600, itemsToShow: 3, itemsToScroll: 3 },
    { width: 800, itemsToShow: 4, itemsToScroll: 4 },
  ]

  async function loadGalery() {
    const response = await api.get('galery');

    setGalery([...galery, ...response.data.docs]);
  }

  useEffect(() => {
    loadGalery();
  }, []);

  async function handleOpenModal(imageUrl, legend) {
    await setActiveImage({imageUrl, legend});

    await setModalIsOpen(true);
  } 

  function myArrow({ type, onClick }) {
    const pointer = type === consts.PREV ? <IoIosArrowBack /> : <IoIosArrowForward />
    return <GaleryButton onClick={onClick}>{pointer}</GaleryButton>
  }

  return (
    <>
      <StyledCarousel
        itemPadding={[0, 5]}
        renderArrow={myArrow}
        pagination={false}
        itemsToScroll={4}
        breakPoints={breakpoints}
      >
        {galery.map(image => (
          <GaleryItem 
            key={image.id} 
            style={{backgroundImage: `url(${image.imageUrl})`}}
            onClick={() => handleOpenModal(image.imageUrl, image.legend)}  
          >
            <p>{image.legend}</p>
          </GaleryItem>
        ))}
      </StyledCarousel>

      <StyledReactModal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(120, 120, 120, 0.5)'
          },
          content: {
            position: 'absolute',
            top: '40px',
            left: '40px',
            right: '40px',
            bottom: '40px',
            border: 'none',
            background: 'rgba(0, 0, 0, 0)',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center'
          }
        }}
      >
        <button className="close-button" onClick={() => setModalIsOpen(false)}>
          <AiOutlineClose size={24} color='#fff'/>
        </button>
        <img src={activeImage.imageUrl} alt="Galery Image"/>
        <p>{activeImage.legend}</p>
      </StyledReactModal>
    </>
  );
}
