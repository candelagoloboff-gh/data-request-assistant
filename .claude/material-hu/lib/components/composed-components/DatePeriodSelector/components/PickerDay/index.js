import { jsx as _jsx } from "react/jsx-runtime";
import { PickersDay } from '@mui/x-date-pickers-v6';
import { isSameUTCDate } from '../../../../../utils/time';
import { SelectedDate } from '../../types';
const PickerDay = (props) => {
    const { day, customDates, currentSelection, hoveredDate, setHoveredDate, setCustomDates, setCurrentSelection, ...other } = props;
    const isStartSelected = !!customDates[0];
    const isEndSelected = !!customDates[1];
    const isSelectedDay = (isStartSelected && isSameUTCDate(day, customDates[0])) ||
        (isEndSelected && isSameUTCDate(day, customDates[1]));
    const dateRangeSet = isStartSelected &&
        isEndSelected &&
        !isSameUTCDate(customDates[0], customDates[1]);
    const isDayBetweenSelectedDates = isStartSelected &&
        isEndSelected &&
        day > customDates[0] &&
        day < customDates[1];
    const isSelectingEnd = currentSelection === SelectedDate.END;
    const isSelectingStart = currentSelection === SelectedDate.START;
    const isHoveringSelectedDate = hoveredDate && isSameUTCDate(day, hoveredDate);
    const startDate = customDates[0];
    const endDate = customDates[1];
    // Check if day is between start date and hovered date when selecting end
    const isInHoverRangeSelectingEnd = isStartSelected &&
        isSelectingEnd &&
        !!hoveredDate &&
        isStartSelected &&
        startDate != null &&
        day > startDate &&
        day < hoveredDate;
    // Check if day is between hovered date and end date when selecting start
    const isInHoverRangeSelectingStart = isEndSelected &&
        isSelectingStart &&
        !!hoveredDate &&
        isEndSelected &&
        endDate != null &&
        day > hoveredDate &&
        day < endDate;
    const isInHoverRange = isInHoverRangeSelectingEnd || isInHoverRangeSelectingStart;
    const hoveredDateIsAfterStart = isSelectingEnd &&
        isHoveringSelectedDate &&
        isStartSelected &&
        startDate != null &&
        day > startDate;
    const hoveredDateIsBeforeEnd = isSelectingStart &&
        isHoveringSelectedDate &&
        isEndSelected &&
        endDate != null &&
        day < endDate;
    const hoveredPickerDayBorder = isDayBetweenSelectedDates ? 'solid' : 'dashed';
    return (_jsx(PickersDay, { ...other, day: day, selected: isSelectedDay, onMouseEnter: () => {
            if ((isStartSelected && isSelectingEnd) ||
                (isEndSelected && isSelectingStart)) {
                setHoveredDate(day);
            }
        }, onClick: () => {
            // After clear we're selecting start: handle first click so the same date can be re-selected
            if (isSelectingStart) {
                setCustomDates([day, day]);
                setCurrentSelection(SelectedDate.END);
                return;
            }
            // Since PickersDay works with a single date, we need to set both dates to the same day if the start date is selected again (daily period)
            if (isSelectingEnd &&
                isStartSelected &&
                isSameUTCDate(day, customDates[0])) {
                setCustomDates([day, day]);
            }
        }, onMouseLeave: () => {
            setHoveredDate(null);
        }, sx: {
            '&.MuiPickersDay-root': {
                mx: 0,
                width: 41,
                fontSize: 14,
                fontWeight: 600,
                borderRadius: 1,
                backgroundColor: ({ palette }) => palette.new.background.elements.default,
                '&.Mui-selected': {
                    backgroundColor: ({ palette }) => palette.ilustrations?.primaryIlus,
                    ...(dateRangeSet &&
                        !!customDates[0] &&
                        startDate != null &&
                        isSameUTCDate(day, startDate) && {
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                    }),
                    ...(dateRangeSet &&
                        !!customDates[1] &&
                        endDate != null &&
                        isSameUTCDate(day, endDate) && {
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }),
                },
                '&:not(.Mui-selected)': {
                    ...(isDayBetweenSelectedDates && {
                        borderRadius: 0,
                        backgroundColor: ({ palette }) => palette.new.background.layout.brand,
                        border: ({ palette }) => `1px solid ${palette.border?.primaryBorder}`,
                        borderLeft: 'unset',
                        borderRight: 'unset',
                    }),
                    ...(isInHoverRange && {
                        borderRadius: 0,
                        backgroundColor: ({ palette }) => isDayBetweenSelectedDates
                            ? palette.new.background.layout.brand
                            : palette.new.background.elements.default,
                        border: ({ palette }) => `1px ${hoveredPickerDayBorder} ${palette.border?.primaryBorder}`,
                        borderLeft: 'unset',
                        borderRight: 'unset',
                    }),
                    '&:hover, &:focus': {
                        backgroundColor: ({ palette }) => {
                            if ((isStartSelected && !isSelectingEnd && !isSelectingStart) ||
                                (isSelectingEnd &&
                                    !!hoveredDate &&
                                    !!customDates[0] &&
                                    startDate != null &&
                                    hoveredDate < startDate) ||
                                (isSelectingStart &&
                                    !!hoveredDate &&
                                    !!customDates[1] &&
                                    endDate != null &&
                                    hoveredDate > endDate)) {
                                return 'inherit';
                            }
                            return palette.new.background.layout.brand;
                        },
                        borderRadius: isInHoverRange ? 0 : 1,
                        border: ({ palette }) => `1px ${hoveredPickerDayBorder} ${palette.border?.primaryBorder}`,
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
