import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { format } from 'date-fns';
import es from 'date-fns/locale/es';
import DatePeriodSelector from '.';
const meta = {
    component: DatePeriodSelector,
    title: 'Composed Components/DatePeriodSelector',
    tags: ['autodocs'],
    args: {
        dateFormatter: (date, pattern = 'dd/MM/yyyy') => {
            const dateToFormat = new Date(date);
            try {
                return format(dateToFormat, pattern, { locale: es });
            }
            catch (err) {
                return '';
            }
        },
    },
};
export default meta;
export const Default = {
    render: args => {
        const [fromDate, setFromDate] = useState(new Date());
        const [toDate, setToDate] = useState(new Date());
        return (_jsx(DatePeriodSelector, { ...args, fromDate: fromDate, handleFromChange: setFromDate, handleToChange: setToDate, toDate: toDate, minMaxDatesDifference: 45 }));
    },
};
export const WithDateReference = {
    render: args => {
        const [fromDate, setFromDate] = useState(new Date());
        const [toDate, setToDate] = useState(new Date());
        return (_jsx(DatePeriodSelector, { ...args, fromDate: fromDate, handleFromChange: setFromDate, handleToChange: setToDate, toDate: toDate, currentDate: new Date(), showDateReference: true }));
    },
};
