import Image from 'next/image';
import { ARTICLES } from '../../_mocks';
import { formatDateToKorean } from '../../_utils/format-date-to-korean';

interface ArticleDetailPageProps {
  params: Promise<{ detail: string; category: string }>;
}

export default async function ArticleDetailPage({ params }: ArticleDetailPageProps) {
  const { detail, category: categoryParams } = await params;
  const { image, title, category, createdAt, contents } =
    ARTICLES[Number(categoryParams) - 1][Number(detail) - 1];

  return (
    <>
      <div className='aspect-video w-full relative'>
        <Image src={image} fill alt='article image' />
      </div>
      <div className='p-[40px] flex flex-col gap-[64px]'>
        <div className='flex flex-col gap-[24px]'>
          <h1 className='font-bold text-[48px]'>{title}</h1>
          <div className='flex items-center gap-[24px]'>
            <span className='rounded-[100px] font-bold text-[20px] bg-[#383838] py-[4px] px-[12px]'>
              {category}
            </span>
            <p className='font-bold text-[20px]'>{formatDateToKorean(createdAt)}</p>
          </div>
        </div>
        <div className='flex flex-col gap-[32px]'>
          {contents ? (
            contents.map(({ heading, body }, index) => (
              <div key={index} className='flex flex-col gap-[20px]'>
                <h1 className='text-[24px] font-bold'>{heading}</h1>
                <p className='text-[24px] font-normal'>{body}</p>
              </div>
            ))
          ) : (
            <div>준비중 입니다.</div>
          )}
        </div>
      </div>
    </>
  );
}
