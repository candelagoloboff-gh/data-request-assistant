import { type Periods } from '../../types';
export type CustomRangeSelectorProps = {
    anchorElement: HTMLElement | null;
    handleClose: () => void;
    fromDate: Date;
    toDate: Date;
    handleFromDateChange: (date: Date) => void;
    handleToDateChange: (date: Date) => void;
    updatePeriodType: (periodType: Periods) => void;
    minMaxDatesDifference?: number;
};
