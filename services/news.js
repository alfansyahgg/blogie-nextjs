// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('1a9c1f5b5da94e4ea3299d440940c4dd', {
//   corsProxyUrl: 'https://cors-anywhere.herokuapp.com/',
// });
// export default newsapi;

const getNews = async () => {
  const response = await fetch(
    'https://the-lazy-media-api.vercel.app/api/tech'
  );
  await console.log(response);
};

export default getNews;
