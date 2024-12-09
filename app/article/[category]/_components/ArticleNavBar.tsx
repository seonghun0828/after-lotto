'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';

const ARTICLE_CATEGORIES = [
  { category: '행동강령', params: '1' },
  { category: '세금', params: '2' },
  { category: '투자', params: '3' },
  { category: '생활', params: '4' },
  { category: '부동산', params: '5' },
  { category: '보험', params: '6' },
];

export default function ArticleNavBar() {
  const { category: categoryId } = useParams();

  return (
    <nav className='border-b-2 border-[#383838] flex gap-[24px]'>
      {ARTICLE_CATEGORIES.map(({ category, params }, index) => (
        <Link
          key={params + index}
          className={`h-[32px] hover:border-b-2 border-white flex-shrink-0 ${categoryId == params && 'border-b-2 border-white'}`}
          href={params}
          type='button'
        >
          {category}
        </Link>
      ))}
    </nav>
  );
}
