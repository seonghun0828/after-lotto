import { useLottoContext } from '@/app/_contexts/LottoProvider';
import { formatToDotDate } from '../_utils/format-to-dot-date';
import NumberFlow from '@number-flow/react';
import { useEffect, useState } from 'react';

export default function DrawingContent() {
  const [amnt, setAmnt] = useState(0);

  const { lottoData } = useLottoContext();
  const { drwNo = 0, drwNoDate = '', firstWinamnt = 0 } = lottoData ?? {};

  useEffect(() => {
    setAmnt(firstWinamnt);
  }, [firstWinamnt]);

  return (
    <>
      <div className='text-white text-[24px] font-medium flex justify-between'>
        <p>{drwNo}회</p>
        <p>{formatToDotDate(drwNoDate)}</p>
      </div>
      <div className='relative aspect-square flex justify-center items-center text-white text-[10vw] font-semibold'>
        <NumberFlow value={amnt} suffix='원' trend={0} transformTiming={{ duration: 1500 }} />
      </div>
    </>
  );
}
