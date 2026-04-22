import { parseISO, set } from 'date-fns';
import { DEFAULT_MINUTES_STEP } from './constant';
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
// In case a reference date is provided, we need to shift the time to the reference date
// We only care about year-month-day from referenceDate, and hour-minute-second-millisecond from timeValue
export const shiftTimeToReferenceDate = (timeValue, referenceDate) => {
    if (!timeValue)
        return null;
    const timestamp = typeof timeValue === 'string'
        ? simpleDateStringToLocalDate(timeValue)
        : timeValue;
    if (!timestamp || isNaN(timestamp.getTime()))
        return null;
    const combinedDate = new Date(referenceDate);
    combinedDate.setHours(timestamp.getHours(), timestamp.getMinutes(), timestamp.getSeconds(), timestamp.getMilliseconds());
    return combinedDate;
};
export const getNormalizedValue = (value, minutesStep = DEFAULT_MINUTES_STEP, currentTime) => {
    if (!value)
        return value;
    const now = currentTime || new Date();
    const currentMinutes = now.getMinutes();
    if (value.getMinutes() === currentMinutes) {
        // User likely only selected hour, so round up current minutes to next valid step
        const roundedMinutes = Math.ceil(currentMinutes / minutesStep) * minutesStep;
        const normalizedValue = new Date(value);
        if (roundedMinutes >= 60) {
            // If rounded minutes exceed 60, increment hour and set minutes to 0
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
