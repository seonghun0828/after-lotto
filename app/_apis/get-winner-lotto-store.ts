// const BASE_URL = 'https://api.odcloud.kr/api'; // 공공데이터 API URL
// const PAGE = 1; // 페이지
// const PER_PAGE = 1000; // 페이지 당 데이터 수

// export const getWinnerLottoStore = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}/15059963/v1/uddi:76bba8dc-16b6-4898-96af-e3c056854ec3?page=${PAGE}&perPage=${PER_PAGE}&serviceKey=${process.env.LOTTO_WINNING_AREA_API_KEY}`,
//     );

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error('API 요청 중 오류 발생:', error);
//     throw error;
//   }
// };
