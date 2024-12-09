import { getDrawNumberColor } from '../_utils/get-draw-number-color';

interface DrawNumberProps {
  drwNo: number;
}

export default function DrawNumber({ drwNo }: DrawNumberProps) {
  return (
    <span
      className={`rounded-full p-[6px] h-[10vw] w-[10vw] flex flex-shrink-0 justify-center items-center text-[6vw] ${getDrawNumberColor(drwNo)}`}
    >
      {drwNo}
    </span>
  );
}
