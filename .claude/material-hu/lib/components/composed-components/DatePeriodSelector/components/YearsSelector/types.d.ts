import { type DateViewRendererProps } from '@mui/x-date-pickers-v6';
export type YearsSelectorProps = DateViewRendererProps<Date, 'year' | 'day'> & {
    customDates: Date[];
    setCustomDates: (dates: Date[]) => void;
};
