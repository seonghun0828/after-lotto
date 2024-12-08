'use client';
import arrowLeftIcon from '@/public/report/icon/chevron-left.svg';
import computerIcon from '@/public/report/icon/code-computer.svg';
import Image from 'next/image';
import Link from 'next/link';
import ReportChart from '../../components/charts/ReportChart';
import { useRef } from 'react';
import html2canvas from 'html2canvas';

export interface Item {
  id: number;
  category: string;
  icon: string;
  title: string;
  price: number;
}

let num = 0;
const listItem: Item[] = [
  {
    id: num++,
    category: 'developer',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: 'house',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 4000000,
  },
  {
    id: num++,
    category: 'car',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: 'shopping',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 5000000,
  },
  {
    id: num++,
    category: 'beauty',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 5000000,
  },
  {
    id: num++,
    category: 'travel',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 5000000,
  },
];

const ReportPage = () => {
  const lottoPrice = 1433132976; // 14억
  const totalPrice = listItem.reduce((acc, cur) => acc + cur.price, 0);
  const captureRef = useRef<HTMLDivElement>(null);

  const handleCapture = async () => {
    if (captureRef.current) {
      try {
        const canvas = await html2canvas(captureRef.current, { useCORS: true });
        const imgData = canvas.toDataURL('image/png', 1);

        const link = document.createElement('a');
        link.href = imgData;
        link.download = '로또1등소비계획보고서.png';
        link.click();
      } catch (error) {
        console.error('캡처 실패:', error);
      }
    }
  };

  return (
    <main className='bg-black pb-[140px] text-white'>
      {/* 헤더? 탑? */}
      <div className='px-[40px] pt-[36px]'>
        <div className='mb-[24px] flex items-center gap-2'>
          <Image src={arrowLeftIcon} alt='뒤로가기 아이콘' />
          <p>뒤로가기</p>
        </div>
      </div>

      <div ref={captureRef} className='bg-black'>
        <div className='font mb-[24px] px-[40px] text-[32px] font-bold'>
          내 로또1등 소비계획 보고서
        </div>
        {/* 아이템 리스트 */}
        <ul className='bg-[#383838] px-[40px]'>
          {listItem.map((item, index) => {
            const itemPercentage = Math.max((item.price / lottoPrice) * 100, 0.1).toFixed(1);

            return (
              <li
                key={item.title + index}
                className='border-b pb-[24px] pt-[24px] last:border-none'
              >
                <div className='mb-[8px] inline-block rounded-full bg-[#222] px-[16px] py-[8px] text-white'>
                  <Image
                    src={computerIcon}
                    alt={item.title}
                    className='w-[16px]" mr-1 inline-block h-auto'
                  />
                  <span className='text-[16px] leading-normal text-white'>{item.category}</span>
                </div>
                <div className='flex items-center gap-4 text-white'>
                  <p className='flex-1 text-[20px] font-bold'>{item.title}</p>
                  <div className='flex items-center gap-[26px] text-[20px]'>
                    <p>{item.price.toLocaleString()} 원</p>
                    <p className='min-w-[40px]'>{itemPercentage}%</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/** 총액 / 퍼센트 */}
        <div className='px-[40px] py-[24px]'>
          <div className='flex items-center justify-end gap-[30px]'>
            <div className='text-[20px]'>총액: {totalPrice.toLocaleString()}원</div>
            <div className='p-[8px] text-[20px]'>
              {((totalPrice / lottoPrice) * 100).toFixed(1)}%
            </div>
          </div>
        </div>

        {/* 차트 */}
        <ReportChart listItem={listItem} />

        {/* AI 한줄평 */}
        <div className='flex flex-col gap-[20px] bg-[#383838] px-[40px] py-[24px]'>
          <div className='text-[24px]'>AI 한줄평</div>
          <div>좋은 계획입니다 ! </div>
        </div>
      </div>

      {/* 공유 */}
      <div className='flex flex-col gap-[24px] px-[62px] pt-[96px] text-center text-[24px] font-semibold'>
        <button
          onClick={handleCapture}
          className='rounded-[20px] border-[1px] border-[#FF7C78] px-[8px] py-[24px]'
        >
          이미지 저장하기
        </button>
        <Link href={''} className='rounded-[20px] border-[1px] border-[#FF7C78] px-[8px] py-[24px]'>
          URL 복사하기
        </Link>
      </div>
    </main>
  );
};

export default ReportPage;
