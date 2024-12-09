import Link from 'next/link';
import { useParams } from 'next/navigation';
import type { ArticleType } from '../../_types';
import Image from 'next/image';

interface ArticleCardProps {
  article: ArticleType;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const { category } = useParams();
  const { id, title, description, image } = article;

  return (
    <Link
      href={`/article/${category}/${id}`}
      key={id}
      className='bg-[#383838] flex aspect-[12/4] gap-[12px] rounded-[20px] p-[12px] justify-between hover:bg-[#4d4d54]'
    >
      <div className='flex flex-col gap-[12px] max-w-[340px]'>
        <h1 className='text-[24px] font-bold text-white text-overflow'>{title}</h1>
        <p className='text-[12px] text-overflow'>{description}</p>
      </div>
      <div className='relative aspect-square w-full max-w-[142px] min-w-[132px]'>
        <Image className='rounded-[20px]' src={image} fill alt={`article image${id}`} />
      </div>
    </Link>
  );
}
