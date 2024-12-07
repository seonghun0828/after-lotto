'use client';

import Image from 'next/image';
import LottoNumbers from '@/public/svgs/lotto-numbers.svg';
import LandingContent from './LandingContent';
import LandingLogo from './LandingLogo';
import { useState } from 'react';
import { formatToDotDate } from '../_utils/format-to-dot-date';
import NumberFlow from '@number-flow/react';
import { useLottoContext } from '../contexts/LottoProvider';

const LANDING_TEXT = '애프터로또';

export default function LandingContainer() {
  const [isDrawing, setIsDrawing] = useState(false);
  const [amnt, setAmnt] = useState(0);

  const { lottoData } = useLottoContext();
  const { drwNo = 0, drwNoDate = '', firstWinamnt = 0 } = lottoData ?? {};

  const handleDraw = () => {
    setIsDrawing((prev) => !prev);
    setTimeout(() => {
      setAmnt(firstWinamnt);
    }, 300);
  };

  return (
    <>
      <div className='px-[40px] pt-[70px] pb-[60px] h-screen flex flex-col gap-[24px]'>
        <LandingLogo />
        <LandingContent className='flex flex-col gap-[30px]'>
          {isDrawing ? (
            <>
              <div className='text-white text-[32px] font-medium flex justify-between'>
                <p>{drwNo}회</p>
                <p>{formatToDotDate(drwNoDate)}</p>
              </div>
              <div className='relative aspect-square flex justify-center items-center text-white text-[64px] font-semibold'>
                <NumberFlow
                  value={amnt}
                  suffix='원'
                  trend={0}
                  transformTiming={{ duration: 1500 }}
                />
              </div>
            </>
          ) : (
            <>
              <span className='text-[#FF7C78] text-[32px] font-medium'>{LANDING_TEXT}</span>
              <div className='relative aspect-square'>
                <Image src={LottoNumbers} fill alt='lotto numbers image' />
              </div>
            </>
          )}
        </LandingContent>
      </div>

      <div
        className={`max-w-[524px] h-[72px] fixed bottom-[60px] left-0 right-0 mx-auto px-[24px]  ${isDrawing && 'invisible'}`}
      >
        <button
          className=' w-full h-full font-semibold text-[24px] text-[#222222] rounded-[20px] bg-gradient-to-r from-[#FFAEAC] to-[#FF7C78]'
          type='button'
          onClick={handleDraw}
        >
          추첨 시작
        </button>
      </div>
    </>
  );
}
