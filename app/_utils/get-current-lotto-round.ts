const BASE_ROUND = 1148;
const BASE_DATE = new Date('2024-11-30T12:00:00Z');
const KST_OFFSET = 9 * 60 * 60 * 1000;
const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

export const getCurrentLottoRound = () => {
  const now = new Date();
  const nowKST = new Date(now.getTime() + KST_OFFSET);

  const timeDifference = nowKST.getTime() - BASE_DATE.getTime();
  const elapsedWeeks = Math.floor(timeDifference / ONE_WEEK_MS);

  return BASE_ROUND + elapsedWeeks;
};
