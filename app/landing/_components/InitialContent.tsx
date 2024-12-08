import LottoNumbers from '@/public/svgs/lotto-numbers.svg';
import Image from 'next/image';

const LANDING_TEXT = '애프터로또';

export default function InitialContent() {
  return (
    <>
      <span className='text-[#FF7C78] text-[32px] font-medium'>{LANDING_TEXT}</span>
      <div className='relative aspect-square'>
        <Image src={LottoNumbers} fill alt='lotto numbers image' />
      </div>
    </>
  );
}
