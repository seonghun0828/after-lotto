'use client';

import { getDrawNumberColor } from '../_utils/get-draw-number-color';

interface DrawNumberProps {
  drwNo: number;
}

export default function DrawNumber({ drwNo }: DrawNumberProps) {
  return (
    <span
      className={`rounded-full bg-slate-600 p-[6px] h-[40px] w-[40px] flex justify-center items-center text-[24px] ${getDrawNumberColor(drwNo)}`}
    >
      {drwNo}
    </span>
  );
}
