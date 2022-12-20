import React from 'react';
import { useParams } from 'react-router-dom';
import article_content from './ArticleContent';
//Pages
import NotFound from './NotFound';
//Components
import Articles from '../components/Articles';

const Article = (props) => {
  const { name } = useParams();

  const article = article_content.find((article) => article.name === name);

  if (!article) return <NotFound />;

  const otherArticles = article_content.filter(article => article.name !== name)

  return (
    <div className='mb-20'>
      <h1 className='font-bold sm:text-4xl text-2xl mb-4'>
        {article.title}
      </h1>
      {article.content.map((paragraph, index) => (
        <p className='mx-auto leading-relaxed text-base mb-4' key={index}>
          {paragraph}
        </p>
      ))}
      <h1 className="text-2xl font-bold" text-gray-900>Others Articles</h1>
      <div className="flex flex-wrap">
        <Articles articles={otherArticles} />
      </div>
    </div>
  );
};
export default Article;