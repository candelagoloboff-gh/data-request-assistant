export type BaseDatum = {
    label: string;
    value: number;
    type: 'POSITIVE' | 'NEGATIVE' | 'NEUTRAL';
};
export type ScaleQuestionChartProps<TDatum extends BaseDatum> = {
    data: TDatum[];
    onSelectItem: (item: TDatum) => void;
    noDataText?: string;
    helperText?: string;
};
