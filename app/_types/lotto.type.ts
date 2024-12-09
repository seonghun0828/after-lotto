export interface LottoType {
  totSellamnt: number; // 총 판매금액
  returnValue: 'success' | 'fail'; // 결과
  drwNoDate: string; // 추첨일
  firstWinamnt: number; // 1등 당첨금
  firstPrzwnerCo: number; // 1등 당첨 인원
  bnusNo: number; // 보너스 번호
  firstAccumamnt: number; // 1등 당첨금 총액
  drwNo: number; // 회차
  drwtNo1: number; // 당첨번호 1
  drwtNo2: number; // 당첨번호 2
  drwtNo3: number; // 당첨번호 3
  drwtNo4: number; // 당첨번호 4
  drwtNo5: number; // 당첨번호 5
  drwtNo6: number; //
}
