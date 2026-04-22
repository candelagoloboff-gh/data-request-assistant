import { type PickersCalendarHeaderProps } from '@mui/x-date-pickers-v6/PickersCalendarHeader';
import { type CustomRangePickerProps } from '../../types';
export type CustomCalendarHeaderProps = PickersCalendarHeaderProps<Date> & {
    slotProps: CustomRangePickerProps['slotProps']['CalendarHeader'];
};
