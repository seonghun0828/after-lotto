import { useLottoContext } from '@/app/contexts/LottoProvider';
import { useTotalBudget } from '../_hooks/useBudget';

const PriceInfo = () => {
  const { lottoData } = useLottoContext();
  const firstWinamnt = lottoData?.firstWinamnt ?? 0;

  const { totalBudget, remainingBudget } = useTotalBudget(firstWinamnt);

  return (
    <>
      <div>
        <div>당첨금액</div>
        <div className='text-xlarge'>{firstWinamnt.toLocaleString()}원</div>
      </div>
      <div>
        <div>프로그래스바</div>

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
