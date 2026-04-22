import { type PickersDayProps } from '@mui/x-date-pickers-v6';
import { type SelectedDate } from '../../types';
export type PickerDayProps = {
    customDates: Date[];
    currentSelection: SelectedDate;
    hoveredDate: Date | null;
    setHoveredDate: (date: Date | null) => void;
    setCustomDates: (dates: (Date | null)[]) => void;
    setCurrentSelection: (selection: SelectedDate) => void;
} & PickersDayProps<Date>;
