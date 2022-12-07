import { createContext, useContext, useState, useEffect } from 'react';

const NewsContext = createContext();

function NewsProvider(props) {
  const [news, setNews] = useState([]);
  const baseURL = 'https://api.spaceflightnewsapi.net/v3';

  useEffect(() => {
    doFetch();
  }, []);

  async function doFetch() {
    const articlesRes = await fetch(`${baseURL}/articles?_limit=100`);
    const articles = await articlesRes.json();
    const blogsRes = await fetch(`${baseURL}/blogs?_limit=100`);
    const blogs = await blogsRes.json();
    setNews([articles, blogs]);
  }
  return <NewsContext.Provider value={[news, setNews]} {...props} />;
}

function useNews() {
  const context = useContext(NewsContext);
  if (!context) throw new Error('Issue with the Provider');
  return context;
}

export { useNews, NewsProvider };
