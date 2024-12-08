import { useLottoContext } from '@/app/_contexts/LottoProvider';
import { useBudget } from '../_hooks/useBudget';

const PriceInfo = () => {
  const { lottoData } = useLottoContext();
  const firstWinamnt = lottoData?.firstWinamnt ?? 0;

  const { totalBudget, remainingBudget, progress } = useBudget(firstWinamnt);

  return (
    <>
      <div>
        <div>당첨금액</div>
        <div className='text-xlarge'>{firstWinamnt.toLocaleString()}원</div>
      </div>

      <div className='flex flex-col gap-4 pt-2'>
        <div className='w-full h-[22px] bg-gray '>
          <div
            className='h-full bg-main transition-all duration-300'
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>

        <div className='flex'>
          <div className='w-24'>계획</div>
          <div>{totalBudget.toLocaleString()}원</div>
        </div>

        <div className='flex'>
          <div className='w-24'>남은 예산</div>
          <div>{remainingBudget.toLocaleString()}원</div>
        </div>
      </div>
    </>
  );
};

export default PriceInfo;
