'use client';

import { ARTICLES } from '../../_mocks';
import { useParams } from 'next/navigation';
import ArticleCard from './ArticleCard';

export default function ArticleContent() {
  const { category = '1' } = useParams();
  const articles = ARTICLES[Number(category) - 1];

  return (
    <div className='flex flex-col gap-[20px]'>
      {articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
