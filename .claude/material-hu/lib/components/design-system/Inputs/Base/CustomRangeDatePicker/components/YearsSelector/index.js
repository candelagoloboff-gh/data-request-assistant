import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useRef } from 'react';
import { Button, Stack } from '@mui/material';
import { shiftDateYear } from '../../../../../../../utils/time';
import { isValid } from 'date-fns';
const YearsSelector = (props) => {
    const { customDates, setCustomDates, onChange, onViewChange } = props;
    const BASE_YEAR = 1900;
    const yearsContainerRef = useRef(null);
    const lastCustomDate = useRef();
    const { fromDate, toDate } = customDates;
    const selectedYear = fromDate?.getFullYear();
    const handleYearClick = (year) => {
        onViewChange?.('day');
        if (fromDate && isValid(fromDate) && toDate && isValid(toDate)) {
            onChange?.(shiftDateYear(fromDate, year));
            setCustomDates({
                fromDate: shiftDateYear(fromDate, year),
                toDate: shiftDateYear(toDate, year),
            });
        }
        else {
            onChange?.(shiftDateYear(lastCustomDate.current?.fromDate || new Date(), year));
            setCustomDates({
                fromDate: shiftDateYear(lastCustomDate.current?.fromDate || new Date(), year),
                toDate: shiftDateYear(lastCustomDate.current?.fromDate || new Date(), year),
            });
        }
    };
    const yearsList = useMemo(() => Array.from({ length: 200 }, (_, index) => (_jsx(Button, { variant: selectedYear === index + BASE_YEAR ? 'primary' : 'tertiary', "data-year": index + BASE_YEAR, onClick: () => {
            handleYearClick(index + BASE_YEAR);
        }, children: index + BASE_YEAR }, index + BASE_YEAR))), [customDates]);
    // Scroll to the selected year or if there is no custom date, scroll to the current year
    useEffect(() => {
        lastCustomDate.current = customDates;
        if (yearsContainerRef.current) {
            const year = customDates.fromDate?.getFullYear() || new Date().getFullYear();
            const yearElement = yearsContainerRef.current.querySelector(`button[data-year="${year}"]`);
            if (yearElement) {
                yearElement.scrollIntoView({
                    behavior: 'instant',
                    block: 'center',
                });
            }
        }
    }, []);
    return (_jsx(Stack, { ref: yearsContainerRef, sx: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            maxWidth: 320,
            maxHeight: 334,
            overflowY: 'scroll',
        }, children: yearsList }));
};
export default YearsSelector;
