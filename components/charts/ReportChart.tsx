'use client';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartConfig,
} from '@/components/ui/chart';
import { Bar, BarChart, Rectangle } from 'recharts';
import { Item } from '../../app/report/page';

interface ReportChartProps {
  listItem: Item[]; //Pick<Item, 'category' | 'price'>[];
}
const chartConfig = {
  developer: {
    label: 'developer',
    color: 'hsl(var(--chart-1))',
  },
  house: {
    label: 'house',
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
        acc[item.category] = (acc[item.category] || 0) + item.price;
        return acc;
      },
      {} as { [key: string]: number },
    ),
  ).map(([category, price]) => ({ [category]: price, label: category }));
  console.log(chartData);

  return (
    <div className='mb-[12px] flex bg-[#383838] p-[20px]'>
      <div className='flex-1'>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            {/* <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            /> */}
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar
              dataKey='travel'
              fill='hsl(var(--chart-1))'
              radius={8}
              activeBar={({ ...props }) => {
                return <Rectangle {...props} fillOpacity={0.8} />;
              }}
            />
          </BarChart>
        </ChartContainer>
        {/* <ChartContainer config={itemConfig} className='min-h-[200px]'>
          <BarChart accessibilityLayer data={barChartData}>
            <CartesianGrid vertical={false} />
            <Bar dataKey='developer' fill='hsl(var(--chart-1))' radius={4}>
              <LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
            </Bar>
            <Bar dataKey='house' fill='hsl(var(--chart-2))' radius={4} />
            <Bar dataKey='car' fill='hsl(var(--chart-3))' radius={4}>
              <LabelList position='top' offset={12} className='fill-foreground' fontSize={12} />
            </Bar>
            <Bar dataKey='shopping' fill='hsl(var(--chart-4))' radius={4} />
            <Bar dataKey='beauty' fill='hsl(var(--chart-5))' radius={4} />
            <Bar dataKey='travel' fill='hsl(var(--chart-6))' radius={4} />
          </BarChart>
        </ChartContainer> */}
      </div>

      {/* <div className='w-[50%]'>
        <ChartContainer
          config={chartConfig2}
          className='[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]'
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
      </div> */}
    </div>
  );
};

export default ReportChart;
