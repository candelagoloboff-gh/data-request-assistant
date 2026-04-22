import { type DateViewRendererProps } from '@mui/x-date-pickers-v6';
import { type DateRange } from '../../types';
export type BaseYearsSelectorProps = DateViewRendererProps<Date, 'year' | 'day'>;
export type YearsSelectorProps = BaseYearsSelectorProps & {
    customDates: DateRange;
    setCustomDates: (dates: DateRange) => void;
};
