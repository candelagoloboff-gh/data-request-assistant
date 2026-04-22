import { type PickersDayProps } from '@mui/x-date-pickers-v6';
import { type DateRange, type SelectedDate } from '../../types';
export type PickerDayProps = {
    customDates: DateRange;
    currentSelection: SelectedDate;
    hoveredDate: Date | null;
    setHoveredDate: (date: Date | null) => void;
    setCustomDates: (dates: DateRange) => void;
    handleRangeChange: (dateValue: Date) => void;
} & PickersDayProps<Date>;
