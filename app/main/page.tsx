'use client';

import NumberFlow from '@number-flow/react';
import { useLottoContext } from '../_contexts/LottoProvider';
import { useEffect, useState } from 'react';
import DrawNumber from './_components/DrawNumber';
import Link from 'next/link';

const purchaseOptions = [
  '🏢 수도권 아파트 3채 구매 가능',
  '📈 엔비디아 주식 7,954개 구매 가능',
  '🪙 도지코인 2,482,238개 구매 가능',
  '🍗 치킨 80,669마리 구매 가능',
  '🍜 마라탕 134,448명에게 쏘기 가능',
];

export default function MainPage() {
  const { lottoData } = useLottoContext();
  const {
    firstWinamnt = 0,
    drwtNo1 = 0,
    drwtNo2 = 0,
    drwtNo3 = 0,
    drwtNo4 = 0,
    drwtNo5 = 0,
    drwtNo6 = 0,
    bnusNo = 0,
  } = lottoData ?? {};

  const [amnt, setAmnt] = useState(0);
  const [drwNumbers, _] = useState([drwtNo1, drwtNo2, drwtNo3, drwtNo4, drwtNo5, drwtNo6]);

  useEffect(() => {
    if (lottoData) {
      setAmnt(firstWinamnt);
    }
  }, [lottoData]);

  return (
    <div className='px-[40px] pt-[40px] flex flex-col gap-[40px]'>
      <div className='flex flex-col gap-[24px]'>
        <div className='py-[16px] px-[24px] bg-[#383838] font-medium text-[20px] sm:text-[32px] rounded-[20px]'>
          <span className='text-[#ff7c78]'>1등</span> 당첨! 축하드립니다 🎉
        </div>
        <div className='flex flex-col gap-[8px]'>
          <h2 className='text-[20px] font-medium'>당첨금액</h2>
          <NumberFlow
            className='text-[36px] md:text-[48px] font-normal'
            value={amnt}
            suffix='원'
            trend={0}
            spinTiming={{ duration: 1500 }}
          />
        </div>
      </div>
      <div className='flex flex-col gap-[24px]'>
        <div className='flex flex-col gap-[16px]'>
          <h2 className='font-medium text-[20px]'>이번주 당첨 번호</h2>
          <div className='flex items-center gap-[6px] sm:gap-[12px]'>
            {drwNumbers.map((drwNo, i) => (
              <DrawNumber key={i} drwNo={drwNo} />
            ))}
            <span>+</span>
            <DrawNumber drwNo={bnusNo} />
          </div>
        </div>
        <div className='flex flex-col gap-[16px]'>
          <h2 className='font-medium text-[20px]'>내 번호</h2>
          <div className='flex items-center gap-[6px] sm:gap-[12px]'>
            {drwNumbers.map((drwNo, index) => (
              <DrawNumber key={index} drwNo={drwNo} />
            ))}
          </div>
        </div>
      </div>
      <div className='p-[40px] bg-[#383838] flex flex-col gap-[48px]'>
        <h2 className='font-medium text-[20px]'>당첨금으로 뭘 할 수 있을까</h2>
        <div className='flex flex-col gap-[24px]'>
          {purchaseOptions.map((option, index) => (
            <p key={index} className='text-[24px] font-medium'>
              {option}
            </p>
          ))}
        </div>
      </div>
      <div className='flex flex-col px-[24px] gap-[28px] items-center'>
        <h2 className='font-medium text-[20px]'>나는 뭘 살 수 있을까?</h2>
        <Link
          className='w-full h-[72px] font-semibold text-[24px] text-[#222222] rounded-[20px] bg-gradient-to-r from-[#FFAEAC] to-[#FF7C78] flex justify-center items-center'
          href={'/plan'}
        >
          계획 세우러 가기
        </Link>
        <div className='flex items-center w-full h-[72px] gap-[16px]'>
          <Link
            className='w-full border-white border-2 rounded-[20px] h-full flex justify-center items-center'
            href={'/article'}
          >
            당첨 행동강령
          </Link>
          <Link
            className='w-full border-white border-2 rounded-[20px] h-full flex justify-center items-center'
            href={'/article'}
          >
            당첨금 수령방법
          </Link>
        </div>
      </div>
    </div>
  );
}
