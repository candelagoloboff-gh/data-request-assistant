import { format, formatDistanceToNowStrict, isToday as isTodayFns, sub, } from 'date-fns';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { getCurrentLocale } from './languages';
/** Returns a human-readable strict distance string from the given date to now. */
export const getDistanceToNow = (date) => formatDistanceToNowStrict(new Date(date), {
    locale: getCurrentLocale(),
});
/** Formats a date using the given pattern (defaults to 'dd/MM/yyyy'). */
export const formatUTCDate = (date, pattern = 'dd/MM/yyyy') => format(new Date(date), pattern);
/** Checks whether two dates fall on the same calendar day. */
export const isSameUTCDate = (a, b) => formatUTCDate(a) === formatUTCDate(b);
/** Shifts the date to the given year, preserving month and day. */
export const shiftDateYear = (date, year) => new Date(year, date.getMonth(), date.getDate());
/** Returns a new Date set to midnight (00:00:00.000) of the given date. */
export const getDateMidnight = (date) => {
    const y = date.getFullYear();
    const m = date.getMonth();
    const d = date.getDate();
    return new Date(y, m, d, 0, 0, 0, 0);
};
/** Returns the current date/time, optionally converted to a specific timezone. */
export const getNow = (timezone) => {
    const date = new Date();
    if (timezone)
        return utcToZonedTime(date, timezone);
    return date;
};
/** Returns today's date at midnight, optionally in a specific timezone. */
export const getToday = (timezone) => {
    const now = getNow(timezone);
    return getDateMidnight(now);
};
/** Returns yesterday's date at midnight, optionally in a specific timezone. */
export const getYesterday = (timezone) => {
    const today = getToday(timezone);
    return sub(today, { days: 1 });
};
/** Checks whether a date is today, optionally accounting for a timezone. */
export const isToday = (date, timezone) => {
    if (!date)
        return false;
    if (timezone)
        return isTodayFns(zonedTimeToUtc(date, timezone));
    return isTodayFns(date);
};
