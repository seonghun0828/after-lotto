import arrowLeftIcon from '@/public/report/icon/chevron-left.svg';
import computerIcon from '@/public/report/icon/code-computer.svg';
import Image from 'next/image';

let num = 0;
const listItem = [
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 400000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 5000000,
  },
];

const ReportPage = () => {
  const lottoPrice = 1433132976; // 14억
  const totalPrice = listItem.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <main className='text-white'>
      {/* 헤더? 탑? */}
      <div className='px-[40px] pt-[36px]'>
        <div className='flex items-center gap-2 mb-[24px]'>
          <Image src={arrowLeftIcon} alt='뒤로가기 아이콘' />
          <p>뒤로가기</p>
        </div>
        <div className='text-[32px] font-bold font mb-[24px]'>내 로또1등 소비계획 보고서</div>
      </div>

      {/* 아이템 리스트 */}
      <div>
        <ul className='bg-[#383838] px-[40px]'>
          {listItem.map((item, index) => {
            const itemPrecentage = ((item.price / totalPrice) * 100).toFixed(1);

            return (
              <li
                key={item.title + index}
                className='border-b pb-[24px] pt-[24px] last:border-none'
              >
                <div className=''>
                  <p className='inline-flex items-center bg-[#222] rounded-full px-[16px] py-[8px] mb-[8px] gap-[4px] '>
                    <Image
                      src={computerIcon}
                      alt={item.title}
                      className='w-[16px] h-auto text-[]'
                    />
                    <span className='text-[16px]'>{item.category}</span>
                  </p>
                  <div className='flex items-center text-white gap-4'>
                    <p className='flex-1 font-bold text-[20px]'>{item.title}</p>
                    <div className='flex gap-[26px] items-center text-[20px]'>
                      <p>{item.price.toLocaleString()} 원</p>
                      <p className='min-w-[40px]'>{itemPrecentage}%</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/* 차트 */}
      <div></div>
      <div className='px-[40px] py-[24px]'>
        <div className='flex items-center justify-end gap-[30px]'>
          <div className='text-[20px]'>총액: {totalPrice.toLocaleString()}원</div>
          <div className='text-[20px] p-[8px]'>{((totalPrice / lottoPrice) * 100).toFixed(1)}%</div>
        </div>
      </div>
    </main>
  );
};

export default ReportPage;
