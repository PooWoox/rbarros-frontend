import React, { useState, useEffect } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel, { consts } from 'react-elastic-carousel';
import { MdPlayCircleFilled } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import ReactPlayer from 'react-player';

import api from '../../services/api';
import timelineEventsBase from '../../services/timeline';
import Navbar from '../Navbar';
import Galery from '../Galery';

import News from '../News';

import {
  BannerMain,
  Container,
  SectionTitle,
  SectionImage1,
  SectionImage2,
  SectionText,
  HistoryButton,
  TimeLineTitle,
  TimeLineSubtitle,
  TimeLineArea,
  TimeLineEvent,
  VideoGalery,
  StyledReactModal,
  GaleryItem,
  GaleryButton
} from './styles';

import portrait1 from '../../assets/portrait1.png';
import portrait2 from '../../assets/portrait2.png';

export default function Body() {
  const initialDescription = {
    year: 1989,
    title: 'DEPUTADO FEDERAL',
    duration: '1989-1993',
    description: `Em 1988 Ricardo Barros colocou seu nome pela primeira vez á disposição da sua cidade, elegendo-se prefeito de Maringá, no dia 15 de novembro, com apenas 28 anos. Ricardo Barros foi o primeiro prefeito nascido na cidade e o mais jovem da história.

  Principais realizações da Administração de Ricardo Barros:
  
  - Integração do Transporte Urbano, criando o “Passe Integrado”, após construir o Terminal Urbano.
  - Criação do programa “Escola Cooperativa”, que reduziu custos e elevou a qualidade do ensino público municipal.
  - Criação da figura do “administrador municipal”, gerente profissional encarregado da direção executiva da equipe.
  - A administração de Maringá, por iniciativa do prefeito Ricardo Barros, foi uma das primeiras do país a implantar o Conselho Municipal e Tutelar da Criança e do Adolescente.
  
  A primeira campanha para Deputado Federal
  
  Após realizar 400 obras em 4 anos como prefeito de Maringá. Ricardo Barros disputou pela primeira vez sua candidatura como Deputado Federal, conquistando 54 mil votos em todo o Estado. Foi o oitavo Deputado mais votado no Paraná, na campanha que contou também com o apoio da filha Maria Victoria ainda pequena.`
  }
  
  const [videos, setVideos] = useState([]);
  const [activeVideo, setActiveVideo] = useState([]);
  const [timelineEvents, setTimelineEvents] = useState([]);
  const [activeEvent, setActiveEvent] = useState(1989);
  const [activeDescription, setActiveDescription] = useState(initialDescription);
  const [position, setPosition] = useState(7.7);
  const [ modalIsOpen, setModalIsOpen] = useState(false);
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 100, itemsToShow: 2, itemsToScroll: 2 },
    { width: 550, itemsToShow: 3, itemsToScroll: 3 },
    { width: 850, itemsToShow: 4 },
    { width: 1000, itemsToShow: 4, itemsToScroll: 4 }
  ]

  async function loadVideos() {
    const response = await api.get('videos');

    setVideos([...videos, ...response.data.docs]);
  }

  useEffect(() => {
    loadVideos();
    setTimelineEvents(timelineEventsBase);
  }, []);


  function handleSetActiveDescription(description) {
    setActiveDescription(description);
  }

  function handleSetActiveEvent(year) {
    setActiveEvent(year);
  }

  function checkEventHistory(year) {
    if (year <= activeEvent) {
      return true
    }
  }

  function checkActiveEvent(year) {
    if (year === activeEvent) {
      return true
    }
  }

  function handleSetPosition(position) {
    if (position === 12) {
      setPosition(100)
    } else {
      setPosition(position * 7.7)
    }
  }

  async function handleOpenModal(video_id, title) {
    await setActiveVideo({video_id, title})

    await setModalIsOpen(true)
  }

  const bioText = `Ricardo José Magalhães Barros é Engenheiro Civil formado pela Universidade Estadual de Maringá, em 1981. Possui 30 anos de experiência na vida pública.

Em 1988, com 28 anos, foi eleito prefeito de Maringá, sua cidade natal. O mais novo prefeito da história do município. Realizou mais de 400 obras de 1989 a 1993.
  
Deputado Federal, exerce o sexto mandato (1995-1998, 1999-2002, 2003-2006, 2007-2010, 2015-2018, 2019-2022). Foi líder e vice-líder de todos os governos no Congresso.
  
Entre 2016 e 2018, foi Ministro da Saúde, quando realizou uma gestão eficiente e realizadora alcançando a economia de R$ 5 bilhões, recursos que foram reinvestidos na saúde dos brasileiros. Além disso, foi secretário de Indústria, Comércio e Assuntos do Mercosul do Paraná (2011-2014), quando liderou um grande processo de industrialização, sobretudo, do interior do Estado.
  
Na Câmara Federal é reconhecido como um parlamentar articulador especialista em orçamento público. Foi Relator Geral do Orçamento 2016 e participou como presidente e membro de várias comissões durante os seis mandatos. É autor do livro “De olho no dinheiro do Brasil – Orçamento da União, agora você pode participar” publicado em 2007.
  
Foi membro do Conselho Superior de Infraestrutura da Federação das Indústrias do Estado de São Paulo (FIESP), entre o período de 2008 a 2010. E presidente do Conselho Nacional dos Secretários Desenvolvimento Econômico (Conserdic) entre 2011 e 2012.`

  const ministerText = `Quando ministro da Saúde, Ricardo Barros, com a sua formação em engenharia civil, cercado de uma equipe multidisciplinar de alta qualificação, focou em uma gestão corajosa, enfrentando os inúmeros vícios e problemas do sistema.

A sua gestão à frente do Ministério foi pautada na eficiência. Foi assim que ele conseguiu economizar R$ 4 bilhões, dinheiro que foi reaplicado em serviços de saúde. Recursos que eram mal gastos retornam em remédios, leitos, ambulâncias, máquinas e equipamentos.
  
Os resultados dessa gestão foram evidentes: setores de urgência e emergência dos hospitais brasileiros receberam muito mais recursos federais para dar melhor atendimento. O SUS foi fortalecido. A Frota do Samu foi renovada com mais de 565 ambulâncias entregues.
  
O Brasil nunca viu um programa de informatização como o que foi aplicado em sua gestão, que permitiu muito mais transparência com o dinheiro público. Grandes investimentos aconteceram em campanhas de prevenção, como o combate à sífilis, câncer de mama e em favor dos idosos.
  
Além disso, o ministro foi acessível e recebeu em seu gabinete a maioria de deputados, senadores, governadores e prefeitos do Brasil, chegando em seu gabinete às 7 da manhã e saindo às 23 horas. É reconhecido pelo seu trabalho.
  
Todas as semanas foram anunciados recursos, investimentos e medidas ampliando a eficiência e ampliando o atendimento da saúde pública. Quem duvida, pode conferir no site do Ministério.
  
Não é necessário ser médico para ser um bom gestor. A verdade é que a pasta da Saúde tem uma demanda grande e complexa, que o país ainda não consegue atender. Isto não impediu Ricardo Barros de fazer o muito com pouco e assim começou a mudar a história da saúde pública brasileira.`

  function myArrow({ type, onClick }) {
    const pointer = type === consts.PREV ? <IoIosArrowBack /> : <IoIosArrowForward />
    return <GaleryButton onClick={onClick}>{pointer}</GaleryButton>
  }

  return (
    <>
      <Navbar />
      <BannerMain />
      <Container>
        <SectionTitle name="bio-section">BIOGRAFIA</SectionTitle>
        <SectionImage1>
          <img src={portrait1} alt="Ricardo Barros Deputado Federal"/>
        </SectionImage1>
        <SectionText>
          {bioText}
        </SectionText>
        <HistoryButton
          activeClass="active" to="career-section" smooth={true} offset={-10} duration={700}
        >
          <p>MINHA HISTÓRIA</p>
        </HistoryButton>

        <SectionTitle name="career-section">MANDATOS DE RESULTADO</SectionTitle>
        <TimeLineTitle>30 ANOS DE VIDA PÚBLICA</TimeLineTitle>
        <TimeLineSubtitle>VOCAÇÃO, TRABALHO E SERIEDADE</TimeLineSubtitle>
        <TimeLineArea position={position}>
          {timelineEvents.map((event, index) => (
            <TimeLineEvent 
              key={event.year}
              position={index + 1}
              onClick={() => {
                handleSetActiveEvent(event.year); 
                handleSetPosition(index + 1);
                handleSetActiveDescription({title: event.title, duration: event.duration, description: event.description});
              }}
              history={checkEventHistory(event.year)}
              active={checkActiveEvent(event.year)}
            >
              <h3>{event.year}</h3>
            </TimeLineEvent>
          ))}
        </TimeLineArea>
        <SectionText>
          <h1>{activeDescription.title}</h1>
          <h3>{activeDescription.duration}</h3>
          {activeDescription.description}
        </SectionText>
      
        <SectionTitle name="minister-section">MINISTRO DA SAÚDE</SectionTitle>
        <SectionImage2>
          <img src={portrait2} alt="Ministro da Saúde"/>
        </SectionImage2>
        <SectionText>
          {ministerText}
        </SectionText>

        <SectionTitle name="news-section">ACONTECE</SectionTitle>
        <News />

        <SectionTitle name="videos-section">VÍDEOS</SectionTitle>
        <VideoGalery>
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
                top: '20px',
                left: '20px',
                right: '20px',
                bottom: '20px',
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
          
          <div>
            <h1>{activeVideo.title}</h1>
            <button className="close-button" onClick={() => {setModalIsOpen(false)}}><AiOutlineClose size={24} color='#fff'/></button>
          </div>

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${activeVideo.video_id}`}
            playing 
            light={true} 
            width='100%'
            height='100%'
            />

          <Carousel
            style={{ 
              alignSelf: 'center',
              width: '120%',
              marginTop: '20px',
            }}
            itemPadding={[0, 5]}
            renderArrow={myArrow}
            pagination={false}
            breakPoints={breakpoints}
          >
            {videos.map(video => (
              <li 
                onClick={() => handleOpenModal(video.video_id, video.title)} 
                style={{ backgroundImage: `url('https://img.youtube.com/vi/${video.video_id}/0.jpg')` }}
              >
                <MdPlayCircleFilled />
              </li>
            ))}
          </Carousel>
            
          </StyledReactModal>

          {videos.map(video => (
            <li 
              onClick={() => handleOpenModal(video.video_id, video.title)} 
              style={{ backgroundImage: `url('https://img.youtube.com/vi/${video.video_id}/0.jpg')` }}
            >
              <MdPlayCircleFilled />
            </li>
          ))}

        </VideoGalery>

        <SectionTitle name="contact-section">GALERIA DE FOTOS</SectionTitle>        
      </Container>
        <Galery />
    </>
  );
}
