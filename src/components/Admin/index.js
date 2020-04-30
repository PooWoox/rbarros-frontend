import React, { useState } from 'react';
import api from '../../services/api';

import { Container } from './styles';

export default function Admin() {
  const [videoTitle, setVideoTitle] = useState('');
  const [videoId, setVideoId] = useState('');
  const [photo, setPhoto] = useState();
  const [legend, setLegend] = useState('');
  const [article, setArticle] = useState('');
  const [articlePreview, setArticlePreview] = useState('');
  const [articleImage, setArticleImage] = useState();

  async function handleNewVideo(e) {
    e.preventDefault();

    const data = { title: videoTitle, video_id: videoId };

    try {
      await api.post('videos', data);

      return alert('Vídeo cadastrado com sucesso');
    } catch (err) {
      alert('Erro ao cadastrar video, tente novamente.');
    };
  }

  async function handleNewArticle(e) {
    e.preventDefault();

    const fd = new FormData();

    fd.append('brief', articlePreview);
    fd.append('body', article);
    fd.append('newsImage', articleImage);

    try {
      await api.post('news', fd);

      return alert('Notícia cadastrada com sucesso');
    } catch (err) {
      alert('Erro ao cadastrar notícia, tente novamente.');
    };
  }

  async function handleNewPhoto(e) {
    e.preventDefault();

    const fd = new FormData();

    fd.append('galeryImage', photo);
    fd.append('legend', legend);

    try {
      await api.post('galery', fd);

      return alert('Foto adicionada com sucesso');
    } catch (err) {
      alert('Erro ao enviar foto, tente novamente.');
    };
  }

  return (
    <Container>
      <h1>Nova Notícia</h1>
      <form onSubmit={handleNewArticle}>
          <textarea 
            placeholder="Prévia da notícia"
            value={articlePreview}
            onChange={e => setArticlePreview(e.target.value)}
          />
          <textarea 
            placeholder="Texto da notícia"
            value={article}
            onChange={e => setArticle(e.target.value)}
          />
          <input 
            type="file"
            onChange={e => setArticleImage(e.target.files[0])}
          />
          <button className="button" type="submit">Enviar</button>
      </form>

      <h1>Novo Vídeo</h1>
      <form onSubmit={handleNewVideo}>
          <input 
            placeholder="Título do vídeo"
            value={videoTitle}
            onChange={e => setVideoTitle(e.target.value)}
          />
          <textarea 
            placeholder="ID do Vídeo"
            value={videoId}
            onChange={e => setVideoId(e.target.value)}
          />
          <span>O ID do vídeo pode ser encontrado ao fim da URL no Youtube: </span>
          <span>https://www.youtube.com/watch?v=<p>ue0YoEihQUk</p></span>
          <button className="button" type="submit">Enviar</button>
      </form>

      <h1>Nova Foto</h1>
      <form onSubmit={handleNewPhoto}>
          <input 
            type="file"
            onChange={e => setPhoto(e.target.files[0])}
          />
          <textarea 
            placeholder="Legenda da foto"
            value={legend}
            onChange={e => setLegend(e.target.value)}
          />
          <button className="button" type="submit">Enviar</button>
      </form>
    </Container>
  );
}
