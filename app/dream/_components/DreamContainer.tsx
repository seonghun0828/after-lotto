'use client';

import Spline from '@splinetool/react-spline';
import { Suspense, useState } from 'react';

const HEADER_TEXT = '대박꿈 기운받기';
const BUTTON_TEXT = '다른 꿈 꾸기';
const DREAMS = [
  'https://prod.spline.design/q9y7poovEoUdxpsk/scene.splinecode',
  'https://prod.spline.design/xALCz5FJA16oicyL/scene.splinecode',
];

export default function DreamContainer() {
  const [dream, setDream] = useState(DREAMS[Math.floor(Math.random() * DREAMS.length)]);

  const handleClick = () => {
    const currentIndex = DREAMS.indexOf(dream);
    const otherDreams = DREAMS.filter((_, index) => index !== currentIndex);
    const randomDream = otherDreams[Math.floor(Math.random() * otherDreams.length)];
    setDream(randomDream);
  };

  return (
      <div className='pt-[84px] flex flex-col gap-[40px]'>
        <h1 className='text-white text-[32px] font-bold pl-[40px]'>{HEADER_TEXT}</h1>
        <div className='aspect-[3/4]'>
          <Suspense fallback={<div className='animate-pulse w-full h-full bg-gray' />}>
            <Spline scene={dream} />
          </Suspense>
        </div>
        <div className='max-w-[524px] h-[72px] px-[24px]'>
          <button
            className=' w-full h-full font-semibold text-[24px] text-[#222222] rounded-[20px] bg-gradient-to-r from-[#FFAEAC] to-[#FF7C78]'
            type='button'
            onClick={handleClick}
          >
            {BUTTON_TEXT}
          </button>
        </div>
      </div>
  );
}
