import LottoNumbers from '@/public/svgs/lotto-numbers.svg';

const LANDING_TEXT = '로또, 그 이후를 위한 나만의 플랜';

export default function InitialContent() {
  return (
    <>
      <span className='text-white text-[24px] font-medium'>{LANDING_TEXT}</span>
      <div className='relative aspect-square'>
        <LottoNumbers />
      </div>
    </>
  );
}
