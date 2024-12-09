'use client';
import ArrowLeftIcon from '@/public/report/icon/chevron-left.svg';
import ComputerIcon from '@/public/report/icon/code-computer.svg';
import html2canvas from 'html2canvas';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRef } from 'react';
import ReportChart from '../../components/charts/ReportChart';
import { useLottoContext } from '../_contexts/LottoProvider';
import { useItems } from '../_hooks/useItems';

const ReportPage = () => {
  const { getItems } = useItems();
  const { lottoData } = useLottoContext();
  const captureRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();
  const itemsParam = searchParams.get('items');
  const filteredItems = getItems().filter((item) =>
    itemsParam?.split(',').includes(item.id.toString()),
  );

  const lottoPrice = lottoData?.firstAccumamnt ?? 0;
  const totalPrice = filteredItems.reduce((acc, cur) => acc + cur.price, 0);
  const percentage = totalPrice / lottoPrice;

  const getCategory = (category?: string): string => {
    switch (category) {
      case 'developer':
        return '개발자';
      case 'real-estate':
        return '부동산';
      case 'beauty':
        return '뷰티/미용';
      case 'car':
        return '자동차';
      case 'shopping':
        return '쇼핑';
      case 'travel':
        return '여행/숙박';
    }
    return '';
  };

  const handleCapture = async () => {
    if (captureRef.current) {
      try {
        const canvas = await html2canvas(captureRef.current, { useCORS: true });
        const link = document.createElement('a');
        link.href = canvas.toDataURL('image/png', 1);
        link.download = '로또1등소비계획보고서.png';
        link.click();
      } catch {
        throw new Error('이미지 다운로드에 실패했습니다.');
      }
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      console.log('클립 보드에 복사되었습니다.');
      alert('URL이 복사되었습니다.');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className='bg-black pb-[140px] text-white'>
      {/* 헤더 */}
      <div className='px-[40px] pt-[36px]'>
        <Link
          href={searchParams ? `/plan?${searchParams.toString()}` : '/plan'}
          className='mb-[24px] flex items-center gap-2'
        >
          <ArrowLeftIcon />
          <p>뒤로가기</p>
        </Link>
      </div>

      <div ref={captureRef} className='bg-black'>
        <div className='mb-[24px] px-[40px] text-[32px] font-bold'>내 로또1등 소비계획 보고서</div>
        {/* 아이템 리스트 */}
        <div className='bg-[#383838] px-[40px] py-[0px]'>
          {filteredItems.map((item, index) => {
            const itemPercentage = Math.max((item.price / lottoPrice) * 100, 0.1).toFixed(1);

            return (
              <div
                key={item.name + index}
                className='border-b pb-[24px] pt-[24px] last:border-none'
              >
                <div className='mb-[8px] inline-block rounded-full bg-[#222] px-[16px] py-[8px] text-white'>
                  <ComputerIcon className='w-[16px]" mr-1 inline-block h-auto' />
                  <span className='text-[16px] leading-normal text-white'>
                    {getCategory(item.category)}
                  </span>
                </div>
                <div className='flex items-center justify-between gap-4 text-white text-[20px]'>
                  <div className='flex flex-col gap-[8px]'>
                    <p className='font-bold'>{item.name}</p>
                    <p className=''>{item.price.toLocaleString()} 원</p>
                  </div>
                  <p className='min-w-[40px]'>{itemPercentage}%</p>
                </div>
              </div>
            );
          })}
        </div>

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
        <ReportChart listItem={filteredItems} />

        {/* 한줄평 */}
        <div className='flex flex-col gap-[20px] bg-[#383838] px-[40px] py-[24px]'>
          <div className='text-[24px]'>한줄평</div>
          <div>
            계획대로라면 로또 금액 대비 <span className='font-bold'>{percentage.toFixed(5)}</span>
            %를 소비할 것입니다!
          </div>
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
        <button
          onClick={handleCopy}
          className='rounded-[20px] border-[1px] border-[#FF7C78] px-[8px] py-[24px]'
        >
          URL 복사하기
        </button>
      </div>
    </main>
  );
};

export default ReportPage;
