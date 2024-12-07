import arrowLeftIcon from '@/public/report/icon/chevron-left.svg';
import computerIcon from '@/public/report/icon/code-computer.svg';
import Image from 'next/image';
import ReportChart from '../../components/charts/ReportChart';
import Link from 'next/link';
import { Test } from '../../components/charts/Test';

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
    price: 400000,
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

  return (
    <main className='bg-black pb-[140px] text-white'>
      {/* 헤더? 탑? */}
      <div className='px-[40px] pt-[36px]'>
        <div className='mb-[24px] flex items-center gap-2'>
          <Image src={arrowLeftIcon} alt='뒤로가기 아이콘' />
          <p>뒤로가기</p>
        </div>
        <div className='font mb-[24px] text-[32px] font-bold'>내 로또1등 소비계획 보고서</div>
      </div>

      {/* 아이템 리스트 */}
      <div>
        <ul className='bg-[#383838] px-[40px]'>
          {listItem.map((item, index) => {
            const itemPercentage = ((item.price / totalPrice) * 100).toFixed(1);

            return (
              <li
                key={item.title + index}
                className='border-b pb-[24px] pt-[24px] last:border-none'
              >
                <div className=''>
                  <p className='mb-[8px] inline-flex items-center gap-[4px] rounded-full bg-[#222] px-[16px] py-[8px]'>
                    <Image
                      src={computerIcon}
                      alt={item.title}
                      className='h-auto w-[16px] text-[]'
                    />
                    <span className='text-[16px]'>{item.category}</span>
                  </p>
                  <div className='flex items-center gap-4 text-white'>
                    <p className='flex-1 text-[20px] font-bold'>{item.title}</p>
                    <div className='flex items-center gap-[26px] text-[20px]'>
                      <p>{item.price.toLocaleString()} 원</p>
                      <p className='min-w-[40px]'>{itemPercentage}%</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/** 총액 / 퍼센트 */}
      <div className='px-[40px] py-[24px]'>
        <div className='flex items-center justify-end gap-[30px]'>
          <div className='text-[20px]'>총액: {totalPrice.toLocaleString()}원</div>
          <div className='p-[8px] text-[20px]'>{((totalPrice / lottoPrice) * 100).toFixed(1)}%</div>
        </div>
      </div>

      {/* 차트 */}
      <Test />
      <ReportChart listItem={listItem} />

      {/* AI 한줄평 */}
      <div className='flex flex-col gap-[20px] bg-[#383838] px-[40px] py-[24px]'>
        <div className='text-[24px]'>AI 한줄평</div>
        <div>좋은 계획입니다 ! </div>
      </div>

      {/* 공유 */}
      <div className='flex flex-col gap-[24px] px-[62px] pt-[96px] text-center text-[24px] font-semibold'>
        <Link href={''} className='rounded-[20px] border-[1px] border-[#FF7C78] px-[8px] py-[24px]'>
          이미지 저장하기
        </Link>
        <Link href={''} className='rounded-[20px] border-[1px] border-[#FF7C78] px-[8px] py-[24px]'>
          URL 복사하기
        </Link>
      </div>
    </main>
  );
};

export default ReportPage;
