import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import { PickersDay } from '@mui/x-date-pickers-v6';
import { isSameUTCDate } from '../../../../../../../utils/time';
import { isAfter, isBefore, isWithinInterval } from 'date-fns';
import { isNil } from 'lodash';
import { SelectedDate } from '../../types';
const PickerDay = (props) => {
    const { day, customDates, currentSelection, hoveredDate, setHoveredDate, setCustomDates, handleRangeChange, ...other } = props;
    const theme = useTheme();
    const { fromDate, toDate } = customDates;
    const isSelectedDay = (!isNil(fromDate) && isSameUTCDate(day, fromDate)) ||
        (!isNil(toDate) && isSameUTCDate(day, toDate));
    const dateRangeSet = !isNil(fromDate) && !isNil(toDate);
    const isDayBetweenSelectedDates = dateRangeSet &&
        isWithinInterval(day, {
            start: fromDate,
            end: toDate,
        });
    const isStartSelected = fromDate !== null;
    const isEndSelected = toDate !== null;
    const isSelectingEnd = currentSelection === SelectedDate.END;
    const isSelectingStart = currentSelection === SelectedDate.START;
    const isHoveringSelectedDate = hoveredDate && isSameUTCDate(day, hoveredDate);
    // Check if day is between start date and hovered date when selecting end
    const isInHoverRangeSelectingEnd = isStartSelected &&
        isSelectingEnd &&
        !isNil(hoveredDate) &&
        !isNil(fromDate) &&
        isAfter(day, fromDate) &&
        isBefore(day, hoveredDate);
    // Check if day is between hovered date and end date when selecting start
    const isInHoverRangeSelectingStart = isEndSelected &&
        isSelectingStart &&
        !isNil(hoveredDate) &&
        !isNil(toDate) &&
        isAfter(day, hoveredDate) &&
        isBefore(day, toDate);
    const isInHoverRange = isInHoverRangeSelectingEnd || isInHoverRangeSelectingStart;
    const hoveredDateIsAfterStart = isSelectingEnd &&
        isHoveringSelectedDate &&
        !isNil(fromDate) &&
        isAfter(day, fromDate);
    const hoveredDateIsBeforeEnd = isSelectingStart &&
        isHoveringSelectedDate &&
        !isNil(toDate) &&
        isBefore(day, toDate);
    const hoveredPickerDayBorder = isDayBetweenSelectedDates ? 'solid' : 'dashed';
    return (_jsx(PickersDay, { ...other, day: day, selected: isSelectedDay, onMouseEnter: () => {
            if ((isStartSelected && isSelectingEnd) ||
                (isEndSelected && isSelectingStart)) {
                setHoveredDate(day);
            }
        }, onClick: () => {
            // Since PickersDay works with a single date, we need to set both dates to the same day if the start date is selected again (daily period)
            if (isSelectingEnd &&
                !isNil(fromDate) &&
                isSameUTCDate(day, fromDate)) {
                setCustomDates({
                    fromDate: day,
                    toDate: day,
                });
            }
            else {
                // Call handleRangeChange directly to ensure it's called even when MUI's StaticDatePicker
                // doesn't trigger onChange (when pickerValue equals the clicked date)
                handleRangeChange(day);
            }
        }, onMouseLeave: () => {
            setHoveredDate(null);
        }, sx: {
            '&.MuiPickersDay-root': {
                backgroundColor: theme.palette.new.background.elements.default,
                borderRadius: 1,
                color: theme.palette.new.action.button.text.tertiary.default,
                fontSize: 14,
                fontWeight: 'semiBold',
                mx: 0,
                width: 41,
                '&.MuiPickersDay-today': {
                    backgroundColor: theme.palette.new.background.secondary.default,
                    borderColor: theme.palette.new.border.neutral.brand,
                },
                '&.Mui-selected': {
                    color: theme.palette.new.action.button.text.primary.default,
                    backgroundColor: theme.palette.new.action.button.background.primary.default,
                    ...(dateRangeSet &&
                        isSameUTCDate(day, fromDate) && {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }),
                    ...(dateRangeSet &&
                        isSameUTCDate(day, toDate) && {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }),
                },
                '&:not(.Mui-selected)': {
                    ...(isDayBetweenSelectedDates && {
                        borderRadius: 0,
                        backgroundColor: theme.palette.new.action.button.background.secondary.hover,
                        border: `1px solid ${theme.palette.new.border.neutral.brand}`,
                        borderLeft: 'unset',
                        borderRight: 'unset',
                    }),
                    ...(isInHoverRange && {
                        borderRadius: 0,
                        backgroundColor: isDayBetweenSelectedDates
                            ? theme.palette.new.action.button.background.secondary.hover
                            : theme.palette.new.background.elements.default,
                        border: `1px ${hoveredPickerDayBorder} ${theme.palette.new.border.neutral.brand}`,
                        borderLeft: 'unset',
                        borderRight: 'unset',
                    }),
                    '&:hover, &:focus': {
                        backgroundColor: () => {
                            if ((isStartSelected && !isSelectingEnd && !isSelectingStart) ||
                                (isSelectingEnd &&
                                    hoveredDate &&
                                    !isNil(fromDate) &&
                                    isBefore(hoveredDate, fromDate)) ||
                                (isSelectingStart &&
                                    hoveredDate &&
                                    !isNil(toDate) &&
                                    isAfter(hoveredDate, toDate))) {
                                return 'inherit';
                            }
                            return theme.palette.new.background.layout.brand;
                        },
                        borderRadius: isInHoverRange ? 0 : 1,
                        border: `1px ${hoveredPickerDayBorder} ${theme.palette.new.border.neutral.brand}`,
                        ...(isInHoverRange && {
                            borderLeft: 'unset',
                            borderRight: 'unset',
                        }),
                        ...(hoveredDateIsAfterStart && {
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }),
                        ...(hoveredDateIsBeforeEnd && {
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }),
                    },
                },
            },
        } }));
};
export default PickerDay;
