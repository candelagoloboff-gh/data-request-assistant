import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Button, Divider, Popover, Stack } from '@mui/material';
import { StaticDatePicker, } from '@mui/x-date-pickers-v6';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { isSameUTCDate } from '../../../../../../../utils/time';
import { addDays, isAfter, startOfDay } from 'date-fns';
import { isNil } from 'lodash';
import { SelectedDate, } from '../../types';
import CustomCalendarHeader from '../CustomCalendarHeader';
import PickerDay from '../PickerDay';
import YearsSelector from '../YearsSelector';
const areDatesEqual = (a, b) => {
    if (isNil(a) && isNil(b))
        return true;
    if (isNil(a) || isNil(b))
        return false;
    return isSameUTCDate(a, b);
};
const CustomRangeSelector = ({ anchorElement, value, onChange, handleClose, minDate, maxDate, minMaxDatesDifference, disabled, slotProps, }) => {
    const { fromDate: from, toDate: to } = value;
    const { clearDatesText, applyDatesText } = slotProps.RangeSelector;
    /*
      IMPORTANT: In MUI-X date picker v7 onwards, the expected type for the value props is Date.
      Prior to v7 the type is loose (any), we are taking advantage of that in order to pass an object
      representing a range of dates and mimic a range date picker
    */
    const [customDates, setCustomDates] = useState({
        fromDate: from ? startOfDay(from) : null,
        toDate: to ? startOfDay(to) : null,
    });
    const [currentSelection, setCurrentSelection] = useState(SelectedDate.START);
    const [hoveredDate, setHoveredDate] = useState(null);
    const { fromDate, toDate } = customDates;
    const applyCustomDates = () => {
        const onlyCompletedFromDate = fromDate && isNil(toDate);
        onChange({ fromDate, toDate: onlyCompletedFromDate ? fromDate : toDate });
        handleClose();
    };
    const clearDates = () => {
        setCurrentSelection(SelectedDate.START);
        setCustomDates({ fromDate: null, toDate: null });
    };
    const closeWithoutSaving = () => {
        handleClose();
        setCustomDates({
            fromDate: from ? startOfDay(from) : null,
            toDate: to ? startOfDay(to) : null,
        });
        setCurrentSelection(SelectedDate.END);
    };
    const handleRangeChange = (dateValue) => {
        // Prevent infinite loops by checking if the date actually changed
        if (currentSelection === SelectedDate.START && dateValue) {
            const newEndDate = toDate && isAfter(dateValue, toDate) ? dateValue : toDate;
            const newDates = {
                fromDate: dateValue,
                toDate: newEndDate,
            };
            // Only update if dates actually changed
            if (!areDatesEqual(dateValue, fromDate) ||
                !areDatesEqual(newEndDate, toDate)) {
                setCustomDates(newDates);
                setCurrentSelection(SelectedDate.END);
            }
        }
        else {
            // In case the start date is not set, set it to the end date to avoid errors
            const dateAfterStart = fromDate && dateValue ? isAfter(dateValue, fromDate) : false;
            const newDates = dateAfterStart
                ? { fromDate, toDate: dateValue }
                : { fromDate: dateValue, toDate: dateValue };
            // Only update if dates actually changed
            if (!areDatesEqual(newDates.fromDate, fromDate) ||
                !areDatesEqual(newDates.toDate, toDate)) {
                setCustomDates(newDates);
                setCurrentSelection(dateAfterStart ? SelectedDate.START : SelectedDate.END);
            }
        }
    };
    const selectableDates = (date, range) => {
        if (!range)
            return undefined;
        return date ? addDays(date, range) : undefined;
    };
    const effectiveMinDate = useMemo(() => {
        if (minDate)
            return minDate;
        if (minMaxDatesDifference)
            return selectableDates(toDate, -minMaxDatesDifference);
        return undefined;
    }, [minDate, minMaxDatesDifference, toDate]);
    const effectiveMaxDate = useMemo(() => {
        if (maxDate)
            return maxDate;
        if (minMaxDatesDifference)
            return selectableDates(fromDate, minMaxDatesDifference);
        return undefined;
    }, [maxDate, minMaxDatesDifference, fromDate]);
    // Compute a single Date value for StaticDatePicker (for navigation only)
    // When customDates is { fromDate: null, toDate: null }, use referenceDate or last valid date to avoid triggering onChange
    const pickerValue = useMemo(() => {
        if (fromDate)
            return fromDate;
        if (toDate)
            return toDate;
        return from || null; // Fallback to referenceDate
    }, [customDates, from]);
    useEffect(() => {
        setCustomDates({
            fromDate: from ? startOfDay(from) : null,
            toDate: to ? startOfDay(to) : null,
        });
    }, [from, to]);
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
                        day: useCallback((dayProps) => (_jsx(PickerDay, { ...dayProps, customDates: customDates, currentSelection: currentSelection, hoveredDate: hoveredDate, setHoveredDate: setHoveredDate, setCustomDates: setCustomDates, handleRangeChange: handleRangeChange })), [customDates, currentSelection, hoveredDate, handleRangeChange]),
                        calendarHeader: (calendarHeaderProps) => (_jsx(CustomCalendarHeader, { ...calendarHeaderProps, slotProps: slotProps.CalendarHeader })),
                    }, viewRenderers: {
                        year: useCallback((yearProps) => (_jsx(YearsSelector, { customDates: customDates, setCustomDates: setCustomDates, ...yearProps })), [customDates]),
                    }, openTo: "day", value: pickerValue, referenceDate: from || undefined, onChange: handleRangeChange, minDate: effectiveMinDate, maxDate: effectiveMaxDate, disabled: disabled, sx: {
                        p: 2,
                        '& .MuiDayCalendar-header': {
                            backgroundColor: ({ palette }) => palette.new.background.elements.default,
                            borderBottom: ({ palette }) => `1px solid ${palette.border?.neutralBorder}`,
                            mb: 0.5,
                            '.MuiDayCalendar-weekDayLabel': {
                                fontSize: 14,
                                fontWeight: 'semiBold',
                                color: ({ palette }) => palette.new.text.neutral.brand,
                            },
                        },
                    } }), _jsx(Divider, {}), _jsxs(Stack, { sx: {
                        alignItems: 'center',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        p: 3,
                        py: 2,
                    }, children: [_jsx(Button, { onClick: clearDates, children: clearDatesText }), _jsx(Button, { variant: "contained", onClick: applyCustomDates, disabled: isNil(fromDate) && isNil(toDate), sx: { px: 6 }, children: applyDatesText })] })] }) }));
};
export default CustomRangeSelector;
