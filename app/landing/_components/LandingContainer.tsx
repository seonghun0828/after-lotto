'use client';

import LandingContent from './LandingContent';
import LandingLogo from './LandingLogo';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const BUTTON_TEXT = '추첨 시작';

export default function LandingContainer() {
  const [isDrawing, setIsDrawing] = useState(false);
  const router = useRouter();

  const handleDraw = async () => {
    setIsDrawing((prev) => !prev);

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300),
    );

    await new Promise<void>((resolve) =>
      setTimeout(() => {
        router.push('/main');
        resolve();
      }, 2500),
    );
  };

  return (
    <div className='px-[40px] pt-[70px] pb-[60px] h-screen flex flex-col gap-[24px]'>
      <LandingLogo />
      <LandingContent className='flex flex-col gap-[30px]' isDrawing={isDrawing} />

      <div className={`max-w-[524px] h-[72px] px-[24px]  ${isDrawing && 'invisible'}`}>
        <button
          className='w-full h-full font-semibold text-[24px] text-[#222222] rounded-[20px] bg-gradient-to-r from-[#FFAEAC] to-[#FF7C78]'
          type='button'
          onClick={handleDraw}
        >
          {BUTTON_TEXT}
        </button>
      </div>
    </div>
  );
}
