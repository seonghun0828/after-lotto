const AMOUNT = 1422132976;

const PriceInfo = () => {
  return (
    <>
      <div>
        <div>당첨금액</div>
        <div className='text-xlarge'>{AMOUNT.toLocaleString()}원</div>
      </div>
      <div>
        <div>프로그래스바</div>
        <div>계획 0원</div>
        <div>남은 예산 {AMOUNT.toLocaleString()}원</div>
      </div>
    </>
  );
};

export default PriceInfo;
