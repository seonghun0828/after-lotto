export const formatDateToKorean = (date: string) => {
  const [year, month, day] = date.split('-');
  return `${year}년 ${parseInt(month, 10)}월 ${parseInt(day, 10)}일`;
};
