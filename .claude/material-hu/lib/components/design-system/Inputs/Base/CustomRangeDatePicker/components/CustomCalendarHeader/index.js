import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useFormatDate from '../../../../../../../hooks/useFormatDate';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconChevronDown, IconChevronLeft, IconChevronRight, } from '@tabler/icons-react';
const CustomCalendarHeader = (props) => {
    const { onMonthChange, slotProps, ...headerProps } = props;
    const { previousMonthText, nextMonthText, changeMonthText } = slotProps;
    const { formatDate } = useFormatDate({ useV6Provider: true });
    const theme = useTheme();
    const formattedMonth = formatDate(headerProps.currentMonth, 'MMMM yyyy');
    const handlePreviousMonthClick = () => {
        const newDate = new Date(headerProps.currentMonth);
        newDate.setMonth(newDate.getMonth() - 1);
        onMonthChange(newDate, 'right');
    };
    const handleNextMonthClick = () => {
        const newDate = new Date(headerProps.currentMonth);
        newDate.setMonth(newDate.getMonth() + 1);
        onMonthChange(newDate, 'left');
    };
    const handleMonthButtonClick = () => {
        // This triggers the year selection view
        headerProps.onViewChange?.('year');
    };
    return (_jsxs(Stack, { sx: {
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
        }, children: [_jsx(IconButton, { "aria-label": previousMonthText, onClick: handlePreviousMonthClick, children: _jsx(IconChevronLeft, { size: 24 }) }), _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "globalS", sx: {
                            color: theme.palette.new.text.neutral.default,
                            fontWeight: 'fontWeightSemiBold',
                        }, children: formattedMonth }), _jsx(IconButton, { onClick: handleMonthButtonClick, "aria-label": changeMonthText, "aria-haspopup": "true", sx: {
                            p: 0.5,
                            color: theme.palette.new.text.neutral.default,
                            '& svg': {
                                stroke: theme.palette.new.text.neutral.default,
                            },
                        }, children: _jsx(IconChevronDown, { size: 16 }) })] }), _jsx(IconButton, { "aria-label": nextMonthText, onClick: handleNextMonthClick, children: _jsx(IconChevronRight, { size: 24 }) })] }));
};
export default CustomCalendarHeader;
