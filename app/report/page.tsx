'use client';
import arrowLeftIcon from '@/public/report/icon/chevron-left.svg';
import computerIcon from '@/public/report/icon/code-computer.svg';
import Image from 'next/image';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, LabelList, Pie, PieChart } from 'recharts';

let num = 0;
const listItem = [
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 400000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 3200000,
  },
  {
    id: num++,
    category: '개발자',
    icon: '',
    title: 'Apple 2025 맥북프로 16 (M4)',
    price: 5000000,
  },
];

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#ff0',
  },
  mobile: {
    label: 'Mobile',
    color: '#ff0000',
  },
} satisfies ChartConfig;

const chartConfig2 = {
  visitors: {
    label: 'Visitors',
  },
  chrome: {
    label: 'Chrome',
    color: 'hsl(var(--chart-1))',
  },
  safari: {
    label: 'Safari',
    color: 'hsl(var(--chart-2))',
  },
  firefox: {
    label: 'Firefox',
    color: 'hsl(var(--chart-3))',
  },
  edge: {
    label: 'Edge',
    color: 'hsl(var(--chart-4))',
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))',
  },
} satisfies ChartConfig;

const chartData = [
  { month: 'January', desktop: 186, mobile: 80 },
  { month: 'February', desktop: 305, mobile: 200 },
  { month: 'March', desktop: 237, mobile: 120 },
  { month: 'April', desktop: 73, mobile: 190 },
  { month: 'May', desktop: 209, mobile: 130 },
  { month: 'June', desktop: 214, mobile: 140 },
];

const chartData2 = [
  { browser: 'chrome', visitors: 275, fill: 'var(--color-chrome)' },
  { browser: 'safari', visitors: 200, fill: '' },
  { browser: 'firefox', visitors: 187, fill: 'var(--color-firefox)' },
  { browser: 'edge', visitors: 173, fill: 'var(--color-edge)' },
  { browser: 'other', visitors: 90, fill: 'var(--color-other)' },
];

const ReportPage = () => {
  const lottoPrice = 1433132976; // 14억
  const totalPrice = listItem.reduce((acc, cur) => acc + cur.price, 0);

  return (
    <main className='text-white'>
      {/* 헤더? 탑? */}
      <div className='px-[40px] pt-[36px]'>
        <div className='flex items-center gap-2 mb-[24px]'>
          <Image src={arrowLeftIcon} alt='뒤로가기 아이콘' />
          <p>뒤로가기</p>
        </div>
        <div className='text-[32px] font-bold font mb-[24px]'>내 로또1등 소비계획 보고서</div>
      </div>

      {/* 아이템 리스트 */}
      <div>
        <ul className='bg-[#383838] px-[40px]'>
          {listItem.map((item, index) => {
            const itemPrecentage = ((item.price / totalPrice) * 100).toFixed(1);

            return (
              <li
                key={item.title + index}
                className='border-b pb-[24px] pt-[24px] last:border-none'
              >
                <div className=''>
                  <p className='inline-flex items-center bg-[#222] rounded-full px-[16px] py-[8px] mb-[8px] gap-[4px] '>
                    <Image
                      src={computerIcon}
                      alt={item.title}
                      className='w-[16px] h-auto text-[]'
                    />
                    <span className='text-[16px]'>{item.category}</span>
                  </p>
                  <div className='flex items-center text-white gap-4'>
                    <p className='flex-1 font-bold text-[20px]'>{item.title}</p>
                    <div className='flex gap-[26px] items-center text-[20px]'>
                      <p>{item.price.toLocaleString()} 원</p>
                      <p className='min-w-[40px]'>{itemPrecentage}%</p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      {/** 총액 / 퍼센트 */}
      <div className='px-[40px] py-[24px]'>
        <div className='flex items-center justify-end gap-[30px]'>
          <div className='text-[20px]'>총액: {totalPrice.toLocaleString()}원</div>
          <div className='text-[20px] p-[8px]'>{((totalPrice / lottoPrice) * 100).toFixed(1)}%</div>
        </div>
      </div>

      {/* 차트 */}
      <div>
        <div>
          <ChartContainer config={chartConfig} className='min-h-[200px] w-full'>
            <BarChart accessibilityLayer data={chartData}>
              <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
              <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
            </BarChart>
          </ChartContainer>
        </div>
        <div>
          <ChartContainer
            config={chartConfig2}
            className='mx-auto aspect-square max-h-[250px] [&_.recharts-text]:fill-background'
          >
            <PieChart>
              <ChartTooltip content={<ChartTooltipContent nameKey='visitors' hideLabel />} />
              <Pie data={chartData2} dataKey='visitors'>
                <LabelList
                  dataKey='browser'
                  className='fill-background'
                  stroke='none'
                  fontSize={12}
                  formatter={(value: keyof typeof chartConfig2) => chartConfig2[value]?.label}
                />
              </Pie>
            </PieChart>
          </ChartContainer>
        </div>
      </div>
    </main>
  );
};

export default ReportPage;
