'use client';
import { winnerStore } from '@/app/const/winner-store';
import { Fragment, useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker, ZoomControl } from 'react-kakao-maps-sdk';

interface MarkerData {
  position: { lat: number; lng: number };
  title: string;
}

const KakaoMap = () => {
  const [markers, setMarkers] = useState<MarkerData[]>([]);

  useEffect(() => {
    const loadKakaoMaps = () => {
      if (!window.kakao) return;
      window.kakao.maps.load(() => {
        const geocoderInstance = new window.kakao.maps.services.Geocoder();

        // 각 주소에 대해 좌표를 검색하여 마커 데이터 생성
        winnerStore.forEach(({ address, title }) => {
          geocoderInstance.addressSearch(address, (result, status) => {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = {
                lat: parseFloat(result[0].y),
                lng: parseFloat(result[0].x),
              };
              setMarkers((prev) => [...prev, { position: coords, title }]);
            } else {
              console.error(`Address search failed for ${address}:`, status);
            }
          });
        });
      });
    };

    if (!window.kakao) {
      console.error('Kakao Maps SDK is not loaded!');
      return;
    }

    loadKakaoMaps();
  }, []);

  return (
    <>
      <div className='h-[600px] w-full'>
        <Map
          center={{
            lat: 36.4997168,
            lng: 127.6386376,
          }} // 첫 번째 마커 기준 중심 좌표
          className='h-full w-full'
          level={13}
        >
          {markers.map((marker, index) => (
            <Fragment key={index}>
              <MapMarker key={index} position={marker.position} />
              <CustomOverlayMap position={marker.position} yAnchor={1}>
                <div className='mb-[40px] whitespace-nowrap rounded-md bg-[#FF7C78] px-2 py-1 text-xs'>
                  {marker.title}
                </div>
              </CustomOverlayMap>
            </Fragment>
          ))}
          <ZoomControl />
        </Map>
      </div>
    </>
  );
};

export default KakaoMap;
