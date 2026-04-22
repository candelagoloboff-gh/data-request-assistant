export type LegendItem = {
    title?: string;
    description: string;
    onClick?: () => void;
    highlighted?: boolean;
};
export type NavigableLabelTicksProps = {
    items: LegendItem[];
};
