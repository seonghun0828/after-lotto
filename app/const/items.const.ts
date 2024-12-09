import { Category } from './categories.const';

export interface IItem {
  id: number;
  name: string;
  category: Category;
  price: number;
}

export const ITEMS: IItem[] = [
  // developer 카테고리
  {
    id: 1,
    name: 'Apple 2025 MacBook Pro 16 (M4)',
    category: 'developer',
    price: 3200000,
  },
  {
    id: 2,
    name: 'ChatGPT Pro 1년 구독료',
    category: 'developer',
    price: 3360000,
  },
  {
    id: 3,
    name: '허먼밀러 뉴 에어론',
    category: 'developer',
    price: 2540000,
  },
  {
    id: 4,
    name: '데스커 모션데스크',
    category: 'developer',
    price: 800000,
  },
  {
    id: 5,
    name: '삼성전자 오디세이 Neo G9 57인치',
    category: 'developer',
    price: 2690000,
  },
  {
    id: 6,
    name: 'LG 힐링미 오브제 컬렉션 안마의자',
    category: 'developer',
    price: 5290000,
  },
  // real-estate 카테고리
  {
    id: 7,
    name: '서울 아파트(전용면적 59m²)',
    category: 'real-estate',
    price: 1000000000,
  },
  {
    id: 8,
    name: '수도권 구축 아파트(전용면적 85m²)',
    category: 'real-estate',
    price: 500000000,
  },
  {
    id: 9,
    name: '제주 아파트(에어비앤비용)',
    category: 'real-estate',
    price: 700000000,
  },
  {
    id: 10,
    name: '광역 도시 신축 아파트(전용면적 85m²)',
    category: 'real-estate',
    price: 600000000,
  },
  {
    id: 11,
    name: '광역 도시 꼬마 빌딩',
    category: 'real-estate',
    price: 1200000000,
  },
  {
    id: 12,
    name: '오피스텔 원룸',
    category: 'real-estate',
    price: 200000000,
  },
  // car 카테고리
  {
    id: 13,
    name: '페라리 SF90 Stradale',
    category: 'car',
    price: 1000000000,
  },
  {
    id: 14,
    name: '벤츠 S-Class (S 580 4MATIC)',
    category: 'car',
    price: 200000000,
  },
  {
    id: 15,
    name: '제네시스 GV80 풀옵션',
    category: 'car',
    price: 100000000,
  },
  {
    id: 16,
    name: '테슬라 모델 Y Long Range',
    category: 'car',
    price: 75000000,
  },
  {
    id: 17,
    name: '더 뉴 아반떼 풀옵션',
    category: 'car',
    price: 27800000,
  },
  {
    id: 18,
    name: '현대 포터2 풀옵션',
    category: 'car',
    price: 23930000,
  },
  // shopping 카테고리
  {
    id: 19,
    name: '해스텐스 침대 CK사이즈',
    category: 'shopping',
    price: 1200000000,
  },
  {
    id: 20,
    name: '롤렉스 서브마리너',
    category: 'shopping',
    price: 100000000,
  },
  {
    id: 21,
    name: 'Band & Olufsen Beolab 스피커',
    category: 'shopping',
    price: 30000000,
  },
  {
    id: 22,
    name: '중형 파워 요트',
    category: 'shopping',
    price: 465000000,
  },
  {
    id: 23,
    name: '골프 회원권(5년)',
    category: 'shopping',
    price: 120000000,
  },
  {
    id: 24,
    name: '로또 100만 장',
    category: 'shopping',
    price: 1000000000,
  },
  // beauty 카테고리
  {
    id: 25,
    name: '미국 배당주',
    category: 'beauty',
    price: 1000000000,
  },
  {
    id: 26,
    name: '비트코인 1개',
    category: 'beauty',
    price: 100000000,
  },
  {
    id: 27,
    name: '금 1kg',
    category: 'beauty',
    price: 140000000,
  },
  {
    id: 28,
    name: '눈 성형 풀 패키지(쌍커풀+눈매교정+트임)',
    category: 'beauty',
    price: 12000000,
  },
  {
    id: 29,
    name: '에스테틱 VIP 연간 멤버십',
    category: 'beauty',
    price: 15000000,
  },
  {
    id: 30,
    name: '자영업(카페, 음식점) 창업',
    category: 'beauty',
    price: 300000000,
  },
  // travel 카테고리
  {
    id: 31,
    name: '1년 세계 일주(실속형)',
    category: 'travel',
    price: 80000000,
  },
  {
    id: 32,
    name: '아프리카 사파리 여행',
    category: 'travel',
    price: 40000000,
  },
  {
    id: 33,
    name: '남미 탐험 패키지(마추픽추 + 우유니 사막)',
    category: 'travel',
    price: 25000000,
  },
  {
    id: 34,
    name: '북극 오로라 관광',
    category: 'travel',
    price: 20000000,
  },
  {
    id: 35,
    name: '일본 1달 살기(호텔)',
    category: 'travel',
    price: 15000000,
  },
  {
    id: 36,
    name: '유럽 여행(비즈니스 클래스 항공권)',
    category: 'travel',
    price: 12000000,
  },
];
