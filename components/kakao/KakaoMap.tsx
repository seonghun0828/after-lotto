'use client';
import { Map, ZoomControl } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  return (
    <>
      <div className='w-full h-[600px]'>
        <Map
          center={{
            lat: 37.5642135,
            lng: 127.0,
          }}
          className='h-full w-full'
          level={8}
          minLevel={8.5}
        >
          {/* <MapMarker position={{ lat: 34.7997168, lng: 128.0386376 }}>
            <p className="text-center">남해 독일마을</p>
          </MapMarker> */}
          {/* {tourData.map((data, index) => (
            <Fragment key={index}>
              <MapMarker
                key={data.title}
                position={{
                  lat: data.kakaoLatitude!,
                  lng: data.kakaoLongitude!,
                }}
                image={{
                  src: data.mapIcon!,
                  size: { width: 52, height: 52 },
                }}
                onClick={() => {
                  router.push(`/tour/${data.name}`);
                }}
              />
              <CustomOverlayMap
                position={{
                  lat: data.kakaoLatitude!,
                  lng: data.kakaoLongitude!,
                }}
                yAnchor={1}
              >
                <div className='whitespace-nowrap bg-amber-100 px-1 text-xs'>{data.title}</div>
              </CustomOverlayMap>
            </Fragment>
          ))} */}
          <ZoomControl />
        </Map>
      </div>
    </>
  );
};

export default KakaoMap;
