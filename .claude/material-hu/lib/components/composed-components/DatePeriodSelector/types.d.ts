import { type SxProps } from '@mui/material';
export declare enum Periods {
    DAILY = "DAILY",
    WEEKLY = "WEEKLY",
    MONTHLY = "MONTHLY",
    CUSTOM = "CUSTOM"
}
export type PeriodsWithoutCustom = Exclude<Periods, Periods.CUSTOM>;
export type PeriodButton = {
    type: PeriodsWithoutCustom;
    text: string;
};
export declare enum SelectedDate {
    START = 0,
    END = 1
}
export type DatePeriodSelectorProps = {
    fromDate: Date;
    handleFromChange: (date: Date) => void;
    handleToChange: (date: Date) => void;
    toDate: Date;
    dateFormatter: (date: Date, format?: string) => string;
    sx?: SxProps;
    initialPeriod?: Periods;
    minMaxDatesDifference?: number;
    currentDate?: Date;
    showDateReference?: boolean;
};
