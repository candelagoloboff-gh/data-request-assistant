import { type SxProps } from '@mui/material';
import { type CardContainerProps } from '../../design-system/CardContainer';
import { type FormDatePickerProps } from '../../design-system/Inputs/DatePicker/types';
import { type FormRadioButtonProps } from '../../design-system/RadioButton/RadioButton/types';
export type DateOption = {
    /** Field name for react-hook-form */
    name: string;
    label: string;
    radioButtonProps?: Omit<FormRadioButtonProps['radioButtonProps'], 'label'>;
};
export type DatePickerConfig = {
    /** Field name for react-hook-form */
    name: string;
    label: string;
    disabled?: boolean;
    inputProps?: Omit<FormDatePickerProps['inputProps'], 'label' | 'disabled'>;
};
export type DatePickerWithOptionsProps = {
    /** Label text to display above the component */
    label?: string;
    /** Array of radio button options to display */
    options?: DateOption[];
    /** Configuration for the start date picker */
    startDatePicker?: DatePickerConfig;
    /** Configuration for the end date picker */
    endDatePicker?: DatePickerConfig;
    /** Props to pass to the CardContainer wrapper. Pass null to render without wrapper */
    cardContainerProps?: Omit<CardContainerProps, 'children'> | null;
    /** Gap between options (in spacing units). Default: 2 */
    optionsGap?: number;
    /** Gap between date pickers (in spacing units). Default: 1 */
    datePickersGap?: number;
    /** Gap between options section and date pickers section (in spacing units). Default: 1.5 */
    sectionGap?: number;
    /** Custom sx props for the root Stack container */
    sx?: SxProps;
    /** Whether to show the date pickers section. Default: true if either date picker config provided */
    showDatePickers?: boolean;
    /** If true, clicking on an already-selected radio button will deselect it. Default: false */
    allowDeselect?: boolean;
};
