export type SatisfactionChartProps = {
    promoters: number;
    detractors: number;
    neutrals: number;
    size?: ChartSize;
    getTooltipTitle?: (key: 'promoters' | 'detractors' | 'neutrals', value: number) => string;
};
export type ChartSize = 'small' | 'large';
