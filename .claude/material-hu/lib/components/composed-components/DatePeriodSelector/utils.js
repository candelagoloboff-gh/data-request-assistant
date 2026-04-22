import { addDays, differenceInDays, isFirstDayOfMonth, isMonday, isSameDay, isSunday, lastDayOfMonth, } from 'date-fns';
import i18next from 'i18next';
import { isSameUTCDate } from '../../../utils/time';
import { Periods } from './types';
const MONDAY_TO_SUNDAY = 6;
export const recognizePeriod = (fromDate, toDate) => {
    if (isFirstDayOfMonth(fromDate) &&
        isSameUTCDate(toDate, lastDayOfMonth(fromDate))) {
        return Periods.MONTHLY;
    }
    if (differenceInDays(toDate, fromDate) === MONDAY_TO_SUNDAY &&
        isMonday(fromDate) &&
        isSunday(toDate)) {
        return Periods.WEEKLY;
    }
    if (isSameUTCDate(fromDate, toDate)) {
        return Periods.DAILY;
    }
    return Periods.CUSTOM;
};
export const checkDateReference = (currentDate, date) => {
    if (isSameDay(currentDate, date)) {
        return `${i18next.t('date_period_selector.today', { ns: 'material_hu_only' })}, `;
    }
    if (isSameDay(addDays(currentDate, -1), date)) {
        return `${i18next.t('date_period_selector.yesterday', { ns: 'material_hu_only' })}, `;
    }
    return '';
};
