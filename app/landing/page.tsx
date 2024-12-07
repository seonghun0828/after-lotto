import Image from 'next/image';
import Logo from '@/public/svgs/logo.svg';
import LottoNumbers from '@/public/svgs/lotto-numbers.svg';

export default function LandingPage() {
  // TODO : bg 삭제
  return (
    <div className='max-w-[600px] bg-black px-[40px] pt-[70px] pb-[60px] h-screen flex flex-col gap-[24px]'>
      <div className='relative w-full h-[84px]'>
        <Image src={Logo} fill alt='after lotto logo' />
      </div>
      <div className='border-y-[#FF7C78] border-y-2 pt-[24px] pb-[28px]'>
        <span className='text-[#FF7C78] text-[32px] '>애프터로또</span>
        <div className='relative aspect-square'>
          <Image src={LottoNumbers} fill alt='lotto numbers image' />
        </div>
      </div>
      <button className='h-[72px] w-full max-w-[476px] bg-white text-[24px] text-[#222222] rounded-[20px] fixed bottom-[60px] left-0 right-0 mx-auto'>
        추첨 시작
      </button>
    </div>
  );
}
