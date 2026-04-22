import { type TableCellProps } from '@mui/material';
type HeatmapHeaderCellProps = {
    title: string;
    subtitle: string | null;
    participantsAmount: number | null;
    onClick?: () => void;
} & TableCellProps;
declare const HeatmapHeaderCell: ({ title, subtitle, participantsAmount, onClick, ...props }: HeatmapHeaderCellProps) => import("react/jsx-runtime").JSX.Element;
export default HeatmapHeaderCell;
