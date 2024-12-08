'use client';

import { ARTICLES } from '../../_mocks';
import { useParams } from 'next/navigation';
import ArticleCard from './ArticleCard';

export default function ArticleContent() {
  const { category } = useParams();

  return (
    <div className='flex flex-col gap-[20px]'>
      {category === '1' ? (
        ARTICLES.map((article) => <ArticleCard key={article.id} article={article} />)
      ) : (
        <div>준비중 입니다.</div>
      )}
    </div>
  );
}
