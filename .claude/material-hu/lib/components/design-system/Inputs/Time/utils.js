import { parseISO, set } from 'date-fns';
import { DEFAULT_MINUTES_STEP, TIME_PATTERN } from './constants';
export const simpleDateStringToLocalDate = (utcISOdate) => {
    if (typeof utcISOdate !== 'string') {
        return utcISOdate;
    }
    const dateInUTC = parseISO(utcISOdate);
    const newDate = new Date();
    return set(newDate, {
        year: dateInUTC.getUTCFullYear(),
        month: dateInUTC.getUTCMonth(),
        date: dateInUTC.getUTCDate(),
    });
};
/**
 * Combines year-month-day from referenceDate with hour-minute-second from timeValue.
 */
export const shiftTimeToReferenceDate = (timeValue, referenceDate) => {
    if (!timeValue)
        return null;
    const timestamp = typeof timeValue === 'string'
        ? simpleDateStringToLocalDate(timeValue)
        : timeValue;
    if (!timestamp || Number.isNaN(timestamp.getTime()))
        return null;
    const combinedDate = new Date(referenceDate);
    combinedDate.setHours(timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds(), timestamp.getMilliseconds());
    return combinedDate;
};
/**
 * When minutes match currentTime, the user likely only selected hour from the dropdown.
 * Rounds up to the next valid minutesStep.
 */
export const getNormalizedValue = (value, minutesStep = DEFAULT_MINUTES_STEP, currentTime) => {
    if (!value)
        return value;
    const now = currentTime || new Date();
    const currentMinutes = now.getMinutes();
    if (value.getMinutes() === currentMinutes) {
        const roundedMinutes = Math.ceil(currentMinutes / minutesStep) * minutesStep;
        const normalizedValue = new Date(value);
        if (roundedMinutes >= 60) {
            normalizedValue.setHours(value.getHours() + 1);
            normalizedValue.setMinutes(0, 0, 0);
        }
        else {
            normalizedValue.setMinutes(roundedMinutes, 0, 0);
        }
        return normalizedValue;
    }
    return value;
};
export const isHoursValid = (hours) => hours >= 0 && hours <= 23;
/**
 * Returns a new Date with the meridiem toggled, or creates one if value is null.
 * Returns null when no change is needed (same meridiem with existing value).
 */
export const getMeridiemDate = (value, isAM) => {
    if (!value) {
        const date = new Date();
        date.setHours(isAM ? 0 : 12, 0, 0, 0);
        return date;
    }
    const hours = value.getHours();
    const currentIsAM = hours < 12;
    if (currentIsAM === isAM)
        return null;
    const newDate = new Date(value);
    newDate.setHours(isAM ? hours - 12 : hours + 12);
    return newDate;
};
/**
 * Parses partial time input (e.g. "14:mm", "9:") into a Date with minutes zeroed.
 */
export const getPartialTimeDate = (inputValue) => {
    const match = inputValue.match(TIME_PATTERN);
    if (!match)
        return null;
    const hours = parseInt(match[1] || match[2], 10);
    if (!isHoursValid(hours))
        return null;
    return set(new Date(), { hours, minutes: 0, seconds: 0, milliseconds: 0 });
};
/**
 * Returns the [start, end] selection range for the time input based on cursor position.
 */
export const getSelectionRange = (inputValue, cursorPosition, placeholder) => {
    if (!inputValue || inputValue === placeholder)
        return [0, 2];
    if (cursorPosition <= 2)
        return [0, 2];
    if (cursorPosition <= 5)
        return [3, 5];
    return [0, 2];
};
