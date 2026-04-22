import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton, Stack, Typography } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers-v6/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers-v6/LocalizationProvider';
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react';
import { addDays, addMonths, differenceInDays, lastDayOfMonth, nextMonday, nextSunday, previousMonday, previousSunday, } from 'date-fns';
import es from 'date-fns/locale/es';
import { getCurrentLocale } from '../../../utils/languages';
import Dropdown from '../../design-system/Dropdown';
import RadioButton from '../../design-system/RadioButton/RadioButton';
import CustomRangeSelector from './components/CustomRangeSelector';
import { Periods, } from './types';
import { checkDateReference } from './utils';
const DatePeriodSelector = props => {
    const { fromDate, handleFromChange, handleToChange, toDate, sx, initialPeriod = Periods.DAILY, dateFormatter, minMaxDatesDifference, currentDate = new Date(), showDateReference = false, } = props;
    const [anchorEl, setAnchorEl] = useState(null);
    const [periodType, setPeriodType] = useState(initialPeriod);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const { t } = useTranslation('material_hu_only');
    const periodButtons = [
        {
            type: Periods.DAILY,
            text: t('date_period_selector.daily'),
        },
        {
            type: Periods.WEEKLY,
            text: t('date_period_selector.weekly'),
        },
        {
            type: Periods.MONTHLY,
            text: t('date_period_selector.monthly'),
        },
    ];
    const periodIndicator = {
        [Periods.DAILY]: dateFormatter(fromDate),
        [Periods.WEEKLY]: t('date_period_selector.date_from_to', {
            from: dateFormatter(fromDate),
            to: dateFormatter(toDate),
        }),
        [Periods.MONTHLY]: dateFormatter(fromDate, 'MMMM yyyy').toUpperCase(),
        [Periods.CUSTOM]: t('date_period_selector.date_from_to', {
            from: dateFormatter(fromDate),
            to: dateFormatter(toDate),
        }),
    };
    const handlePeriodSelection = {
        [Periods.DAILY]: () => {
            handleToChange(fromDate);
        },
        [Periods.WEEKLY]: () => {
            const weekStart = fromDate.getDay() === 1 ? fromDate : previousMonday(fromDate);
            handleFromChange(weekStart);
            handleToChange(nextSunday(weekStart));
        },
        [Periods.MONTHLY]: () => {
            handleFromChange(new Date(fromDate.getFullYear(), fromDate.getMonth(), 1));
            handleToChange(lastDayOfMonth(fromDate));
        },
    };
    const handleNextPeriod = {
        [Periods.DAILY]: () => {
            handleFromChange(addDays(fromDate, 1));
            handleToChange(addDays(fromDate, 1));
        },
        [Periods.WEEKLY]: () => {
            const weekStart = nextMonday(fromDate);
            handleFromChange(weekStart);
            handleToChange(nextSunday(weekStart));
        },
        [Periods.MONTHLY]: () => {
            const nextMonth = addMonths(fromDate, 1);
            handleFromChange(nextMonth);
            handleToChange(lastDayOfMonth(nextMonth));
        },
        [Periods.CUSTOM]: () => {
            const daysDifference = differenceInDays(toDate, fromDate);
            handleFromChange(addDays(fromDate, daysDifference));
            handleToChange(addDays(toDate, daysDifference));
        },
    }[periodType];
    const handlePreviousPeriod = {
        [Periods.DAILY]: () => {
            handleFromChange(addDays(fromDate, -1));
            handleToChange(addDays(fromDate, -1));
        },
        [Periods.WEEKLY]: () => {
            handleFromChange(previousMonday(fromDate));
            handleToChange(previousSunday(toDate));
        },
        [Periods.MONTHLY]: () => {
            const previousMonth = addMonths(fromDate, -1);
            handleFromChange(previousMonth);
            handleToChange(lastDayOfMonth(previousMonth));
        },
        [Periods.CUSTOM]: () => {
            const daysDifference = differenceInDays(toDate, fromDate);
            handleFromChange(addDays(fromDate, -daysDifference));
            handleToChange(addDays(toDate, -daysDifference));
        },
    }[periodType];
    const handleOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const referenceIndicator = showDateReference && periodType === Periods.DAILY
        ? `${checkDateReference(currentDate, fromDate)}`
        : '';
    const selectedDateInPeriod = `${referenceIndicator} ${periodIndicator[periodType]}`;
    return (
    // Added another LocalizationProvider using a v6 adapter to avoid incompatibility errors with the parent LocalizationProvider
    _jsx(LocalizationProvider, { dateAdapter: AdapterDateFns, adapterLocale: getCurrentLocale() || es, children: _jsxs(Stack, { sx: {
                alignItems: 'stretch',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: 3,
                ...sx,
            }, children: [_jsx(Dropdown, { label: t(`date_period_selector.${periodType.toLowerCase()}`), position: "center", open: isDropdownOpen, onOpen: () => {
                        setIsDropdownOpen(true);
                    }, onClose: () => {
                        setIsDropdownOpen(false);
                    }, sx: { '.MuiButtonBase-root': { height: '100%' } }, children: periodButtons.map(button => (_jsx(RadioButton, { label: button.text, isActive: periodType === button.type, onClick: () => {
                            setPeriodType(button.type);
                            handlePeriodSelection[button.type]();
                            setIsDropdownOpen(false);
                        }, stackSx: { p: 2 } }, button.type))) }), _jsxs(Stack, { sx: {
                        alignItems: 'center',
                        alignSelf: 'center',
                        backgroundColor: ({ palette }) => palette.new.background.elements.default,
                        border: ({ palette }) => `1px solid ${palette.border?.neutralBorder}`,
                        borderRadius: 1,
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        gap: 3,
                        px: 1.5,
                        py: 1,
                        width: 336,
                    }, children: [_jsx(IconButton, { title: t('date_period_selector.previous'), onClick: e => {
                                e.stopPropagation();
                                handlePreviousPeriod();
                            }, sx: { p: 0 }, disableRipple: true, children: _jsx(IconChevronLeft, {}) }), _jsx(Typography, { variant: "globalS", sx: {
                                cursor: 'pointer',
                                '&:hover': {
                                    textDecoration: 'underline',
                                },
                            }, onClick: handleOpen, children: selectedDateInPeriod }), _jsx(CustomRangeSelector, { anchorElement: anchorEl, handleClose: handleClose, fromDate: fromDate, toDate: toDate, handleFromDateChange: handleFromChange, handleToDateChange: handleToChange, updatePeriodType: setPeriodType, minMaxDatesDifference: minMaxDatesDifference }), _jsx(IconButton, { title: t('date_period_selector.next'), onClick: e => {
                                e.stopPropagation();
                                handleNextPeriod();
                            }, sx: { p: 0 }, disableRipple: true, children: _jsx(IconChevronRight, {}) })] })] }) }));
};
export default DatePeriodSelector;
