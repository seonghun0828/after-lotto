export const getDrawNumberColor = (drwNo: number) => {
  if (drwNo < 11) return 'bg-[#FBC400]';
  if (drwNo < 21) return 'bg-[#67C3EF]';
  if (drwNo < 31) return 'bg-[#FD7371]';
  if (drwNo < 41) return 'bg-[#AAAAAA]';
  if (drwNo < 51) return 'bg-[#2CBE41]';
};
