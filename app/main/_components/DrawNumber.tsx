import { getDrawNumberColor } from '../_utils/get-draw-number-color';

interface DrawNumberProps {
  drwNo: number;
}

export default function DrawNumber({ drwNo }: DrawNumberProps) {
  return (
    <span
      className={`rounded-full p-[6px] h-[10vw] max-h-[40px] w-[10vw] max-w-[40px] flex flex-shrink-0 justify-center items-center text-[20px] ${getDrawNumberColor(drwNo)}`}
    >
      {drwNo}
    </span>
  );
}
