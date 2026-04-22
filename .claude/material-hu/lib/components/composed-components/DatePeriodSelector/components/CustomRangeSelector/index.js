import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Divider, Popover, Stack } from '@mui/material';
import { StaticDatePicker } from '@mui/x-date-pickers-v6';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { addDays, startOfDay } from 'date-fns';
import { Periods, SelectedDate } from '../../types';
import { recognizePeriod } from '../../utils';
import CustomCalendarHeader from '../CustomCalendarHeader';
import PickerDay from '../PickerDay';
import YearsSelector from '../YearsSelector';
const CustomRangeSelector = props => {
    const { anchorElement, fromDate, toDate, handleClose, handleFromDateChange, handleToDateChange, updatePeriodType, minMaxDatesDifference = 0, } = props;
    // IMPORTANT: after updating MUI-X date picker version, the expected type for the value props is Date
    // Since we used it to pass an array of dates, we need to use any as the type avoid type errors
    const [customDates, setCustomDates] = useState([
        startOfDay(fromDate),
        startOfDay(toDate),
    ]);
    const { t } = useTranslation('material_hu_only');
    const [currentSelection, setCurrentSelection] = useState(SelectedDate.END);
    const [hoveredDate, setHoveredDate] = useState(null);
    const applyCustomDates = () => {
        const [start, end] = customDates;
        const onlyCompletedFromDate = start && end === null;
        if (onlyCompletedFromDate) {
            handleFromDateChange(start);
            handleToDateChange(start);
            updatePeriodType(Periods.DAILY);
        }
        else {
            handleFromDateChange(start);
            handleToDateChange(end);
            updatePeriodType(recognizePeriod(start, end));
        }
        handleClose();
    };
    const clearDates = () => {
        setCustomDates([null, null]);
        setCurrentSelection(SelectedDate.START);
    };
    const closeWithoutSaving = () => {
        handleClose();
        setCustomDates([fromDate, toDate]);
        setCurrentSelection(SelectedDate.END);
    };
    const handleRangeChange = (value) => {
        if (currentSelection === SelectedDate.START) {
            setCustomDates([value, value > customDates[1] ? value : customDates[1]]);
            setCurrentSelection(SelectedDate.END);
        }
        else {
            // In case the start date is not set, set it to the end date to avoid errors
            const dateAfterStart = value > customDates[0];
            setCustomDates(dateAfterStart ? [customDates[0], value] : [value, value]);
            setCurrentSelection(dateAfterStart ? SelectedDate.START : SelectedDate.END);
        }
    };
    const selectableDates = (date, range) => {
        if (!range)
            return null;
        return date ? addDays(date, range) : null;
    };
    useEffect(() => {
        setCustomDates([fromDate, toDate]);
    }, [fromDate, toDate]);
    // Clear hovered date when customDates changes
    useEffect(() => {
        setHoveredDate(null);
    }, [customDates]);
    return (_jsx(Popover, { open: Boolean(anchorElement), anchorEl: anchorElement, onClose: closeWithoutSaving, anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
        }, transformOrigin: {
            vertical: 'top',
            horizontal: 'center',
        }, children: _jsxs(Stack, { children: [_jsx(StaticDatePicker, { displayStaticWrapperAs: "desktop", views: ['year', 'day'], slots: {
                        leftArrowIcon: IconChevronLeft,
                        rightArrowIcon: IconChevronRight,
                        day: dayProps => (_jsx(PickerDay, { ...dayProps, customDates: customDates, currentSelection: currentSelection, hoveredDate: hoveredDate, setHoveredDate: setHoveredDate, setCustomDates: setCustomDates, setCurrentSelection: setCurrentSelection })),
                        calendarHeader: CustomCalendarHeader,
                    }, viewRenderers: {
                        year: yearProps => (_jsx(YearsSelector, { customDates: customDates, setCustomDates: setCustomDates, ...yearProps })),
                    }, openTo: "day", value: customDates, referenceDate: fromDate, onChange: handleRangeChange, minDate: selectableDates(customDates[1], -minMaxDatesDifference) ?? undefined, maxDate: selectableDates(customDates[0], minMaxDatesDifference) ?? undefined, sx: {
                        p: 2,
                        '& .MuiDayCalendar-header': {
                            backgroundColor: ({ palette }) => palette.new.background.elements.default,
                            borderBottom: ({ palette }) => `1px solid ${palette.border?.neutralBorder}`,
                            mb: 0.5,
                            '.MuiDayCalendar-weekDayLabel': {
                                fontSize: 14,
                                fontWeight: 600,
                                color: ({ palette }) => palette.new.text.neutral.brand,
                            },
                        },
                    } }), _jsx(Divider, {}), _jsxs(Stack, { sx: {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        p: 3,
                        py: 2,
                    }, children: [_jsx(Button, { onClick: clearDates, children: t('date_period_selector.clear') }), _jsx(Button, { variant: "contained", onClick: applyCustomDates, disabled: customDates.every((date) => date === null), sx: { px: 6 }, children: t('date_period_selector.apply') })] })] }) }));
};
export default CustomRangeSelector;
