import { type SxProps } from '@mui/material';
export declare enum SelectedDate {
    START = 0,
    END = 1
}
export type DateRange = {
    fromDate: Date | null;
    toDate: Date | null;
};
export type CustomRangePickerProps = {
    value: DateRange;
    onChange: (value: DateRange) => void;
    dateFormatter: (date: Date, format?: string) => string;
    sx?: SxProps;
    enableClear?: boolean;
    minDate?: Date;
    maxDate?: Date;
    minMaxDatesDifference?: number;
    datePlaceholder?: string;
    disabled?: boolean;
    error?: boolean;
    slotProps: {
        CalendarHeader: {
            previousMonthText: string;
            nextMonthText: string;
            changeMonthText: string;
        };
        clearButtonAriaLabel?: string;
        openPickerButtonAriaLabel?: string;
        RangeSelector: {
            clearDatesText: string;
            applyDatesText: string;
        };
    };
};
export type CustomRangeSelectorProps = {
    anchorElement: HTMLElement | null;
    handleClose: () => void;
    value: DateRange;
    onChange: (value: DateRange) => void;
    minDate?: Date;
    maxDate?: Date;
    minMaxDatesDifference?: number;
    disabled?: boolean;
    slotProps: CustomRangePickerProps['slotProps'];
};
