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
      <div className='flex justify-between text-[32px] font-medium text-white'>
        <p>{drwNo}회</p>
        <p>{formatToDotDate(drwNoDate)}</p>
      </div>
      <div className='relative flex aspect-square items-center justify-center text-[64px] font-semibold text-white'>
        <NumberFlow value={amnt} suffix='원' trend={0} transformTiming={{ duration: 1500 }} />
      </div>
    </>
  );
}
