'use client';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, LabelList, Pie, PieChart, XAxis } from 'recharts';
import { IItem } from '../../app/const/items.const';

interface ReportChartProps {
  listItem: IItem[];
}

const chartConfig = {
  price: {
    label: '가격',
    color: 'hsl(var(--chart-1))',
  },
  developer: {
    label: 'develop',
    color: 'hsl(var(--chart-1))',
  },
  realestate: {
    label: 'real-estate',
    color: 'hsl(var(--chart-2))',
  },
  car: {
    label: 'car',
    color: 'hsl(var(--chart-3))',
  },
  shopping: {
    label: 'shopping',
    color: 'hsl(var(--chart-4))',
  },
  beauty: {
    label: 'beauty',
    color: 'hsl(var(--chart-5))',
  },
  travel: {
    label: 'travel',
    color: 'hsl(var(--chart-6))',
  },
} satisfies ChartConfig;

const ReportChart = ({ listItem }: ReportChartProps) => {
  const chartData = Object.entries(
    listItem.reduce(
      (acc, item) => {
        acc[item.category.split('-').join('')] = (acc[item.category] || 0) + item.price;
        return acc;
      },
      {} as { [key: string]: number },
    ),
  ).map(([category, price]) => ({
    category: category.split('-').join(''),
    price: price,
    fill: chartConfig[category as keyof typeof chartConfig]?.color,
  }));

  return (
    <div className='mb-[12px] flex bg-[#383838] p-[20px]'>
      <div className='flex-1'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (value === 'developer') return '개발';
                if (value === 'realestate') return '부동산';
                if (value === 'car') return '자동차';
                if (value === 'shopping') return '쇼핑';
                if (value === 'beauty') return '뷰티';
                if (value === 'travel') return '여행';
                return value;
              }}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey='price' fill='hsl(var(--chart-1))' radius={8} />
          </BarChart>
        </ChartContainer>
      </div>

      <div className='w-[36%]'>
        <ChartContainer
          config={chartConfig}
          className='[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]'
        >
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey='price' hideLabel />} />
            <Pie data={chartData} dataKey='price'>
              <LabelList
                dataKey='browser'
                className='fill-background'
                stroke='none'
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) => chartConfig[value]?.label}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default ReportChart;
