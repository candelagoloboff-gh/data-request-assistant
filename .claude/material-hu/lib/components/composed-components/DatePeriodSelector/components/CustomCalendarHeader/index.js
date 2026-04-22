import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Button, IconButton, Stack } from '@mui/material';
import { useLocalizationContext } from '@mui/x-date-pickers-v6/internals/hooks/useUtils';
import { IconChevronDown, IconChevronLeft, IconChevronRight, } from '@tabler/icons-react';
import { format } from 'date-fns';
const CustomCalendarHeader = props => {
    const { onMonthChange, ...headerProps } = props;
    const { t } = useTranslation('material_hu_only');
    const localeContext = useLocalizationContext();
    const formattedMonth = format(headerProps.currentMonth, 'MMMM yyyy', {
        locale: localeContext.utils.locale,
    });
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
        }, children: [_jsx(IconButton, { "aria-label": t('date_period_selector.previous_month'), onClick: handlePreviousMonthClick, children: _jsx(IconChevronLeft, { size: 24 }) }), _jsx(Button, { variant: "tertiary", onClick: handleMonthButtonClick, endIcon: _jsx(IconChevronDown, { size: 16 }), children: formattedMonth }), _jsx(IconButton, { "aria-label": t('date_period_selector.next_month'), onClick: handleNextMonthClick, children: _jsx(IconChevronRight, { size: 24 }) })] }));
};
export default CustomCalendarHeader;
