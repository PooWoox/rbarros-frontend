import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

import { Container, NewsGrid } from './styles';

export default function News() {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [offset, setOffset] = useState(5);

  async function loadNews() {
    if (page === 1) {
      const response = await api.get('news', {
        params: { page, limit }
      });

      setNews([...news, ...response.data.docs]);
      setPage(page + 1);
      setLimit(3);
    } else {
      const response = await api.get('news', {
        params: { page, limit, offset }
      });

      setNews([...news, ...response.data.docs]);
      setPage(page + 1);
      setLimit(3);
      setOffset(offset + 3);
    }
  }

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <Container> 
      <NewsGrid>
        {news.map(article => (
          <Link key={article._id} to={`/acontece/${article._id}`}>
            <li style={{backgroundImage: `url(${article.imageUrl})`}}>
              <p>{article.brief}</p>
            </li>
          </Link>
        ))}
      </NewsGrid>
      <button onClick={loadNews}>CARREGAR MAIS NOTÍCIAS</button>
    </Container>
  );
}
