import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';
import { composeSx } from '../../../../../utils/components';
import { isToday } from '../../../../../utils/time';
const DatePickerDay = ({ timezone, day, ...dayProps }) => {
    const theme = useTheme();
    const today = isToday(day, timezone);
    return (_jsx(PickersDay, { ...dayProps, day: day, today: today, sx: composeSx({
            color: theme.palette.new.text.neutral.brand,
            borderRadius: '8px',
            '&.Mui-selected': {
                backgroundColor: theme.palette.new.action.button.background.primary.default,
            },
            '&.MuiPickersDay-today': {
                borderColor: theme.palette.new.border.neutral.brand,
            },
        }, dayProps.sx ?? {}) }));
};
export default DatePickerDay;
