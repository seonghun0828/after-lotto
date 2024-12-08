import KakaoMap from '@/components/kakao/KakaoMap';

const mock = [
  {
    name: '명당1',
    address: '서울시 강남구',
    lat: 37.566826,
    lng: 126.9786567,
  },
  {
    name: '명당2',
    address: '서울시 강남구',
    lat: 37.566826,
    lng: 126.9786567,
  },
  {
    name: '명당3',
    address: '서울시 강남구',
    lat: 37.566826,
    lng: 126.9786567,
  },
  {
    name: '명당4',
    address: '서울시 강남구',
    lat: 37.566826,
    lng: 126.9786567,
  },
  {
    name: '명당5',
    address: '서울시 강남구',
    lat: 37.566826,
    lng: 126.9786567,
  },
];

const MapPage = () => {
  return (
    <main className='text-white pt-[84px]'>
      <h2 className='text-[32px] font-bold px-[40px] mb-[28px]'>명당 지도</h2>
      <div className='bg-gray'>
        <KakaoMap />
      </div>
      <div>
        <ul>
          {mock.map((item, index) => (
            <li key={index}>
              <div>{item.name}</div>
              <div>{item.address}</div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MapPage;
