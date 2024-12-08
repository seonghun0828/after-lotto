import KakaoMap from '@/components/kakao/KakaoMap';
import { winnerStore } from '../const/winner-store';

const MapPage = async () => {
  return (
    <main className='pb-[140px] pt-[84px] text-white'>
      <h2 className='mb-[28px] px-[40px] text-[32px] font-bold'>명당 지도</h2>
      <div className='mb-[24px] bg-gray'>
        <KakaoMap />
      </div>
      <ul className='bg-[#383838] px-[40px] pb-[20px]'>
        {winnerStore.map((store) => (
          <li key={store.id} className='border-b border-[#555] pb-[20px] pt-[20px]'>
            <div className='mb-[18px] flex items-center gap-[12px]'>
              <h3 className='text-[24px] font-bold'>{store.title}</h3>
              <p className='rounded-full bg-[#222] px-[12px] py-[4px] text-[14px] font-bold'>
                1등 {store.winsCount}회 배출
              </p>
            </div>
            <p>{store.address}</p>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default MapPage;
