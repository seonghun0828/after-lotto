export const getLottoData = async () => {
  const res = await fetch('https://www.dhlottery.co.kr/common.do?method=getLottoNumber&drwNo=1148');
  if (!res.ok) throw new Error('다시 시도해 주세요.');
  const data = await res.json();
  return data;
};
