import { type FormTimePickerProps } from '../../../TimePicker/types';
import { type CheckboxProps } from '../../../../design-system/Checkbox/Checkbox';
import { type FormAutocompleteProps } from '../../../../design-system/Inputs/Autocomplete/types';
import { type FormInputClassicProps } from '../../../../design-system/Inputs/Classic/types';
import { type FormDatePickerProps } from '../../../../design-system/Inputs/DatePicker/types';
import { type FormInputPhoneProps } from '../../../../design-system/Inputs/Phone/types';
import { type RadioButtonProps } from '../../../../design-system/RadioButton/RadioButton';
import { type FormRatingProps } from '../../../../design-system/Rating/types';
import { type DynamicFormComponent } from '../../types';
import { type InputFileProps } from './InputFile';
import { type InputSignProps } from './InputSign';
export type FormInputProps = {
    name: string;
    component: DynamicFormComponent;
    isFrozen?: boolean;
    slotProps?: FormInputSlotProps;
};
export type FormInputSlotProps = {
    fields?: {
        AUTOCOMPLETE?: FormInputClassicProps['inputProps'];
        TEXT?: FormInputClassicProps['inputProps'];
        DATE?: FormDatePickerProps['inputProps'];
        TIME?: FormTimePickerProps['inputProps'];
        PHONE?: FormInputPhoneProps['inputProps'];
        SIGNATURE?: Omit<InputSignProps, 'name'>;
        INTEGER?: FormInputClassicProps['inputProps'];
        FLOAT?: FormInputClassicProps['inputProps'];
        DROPDOWN?: FormAutocompleteProps['autocompleteProps'];
        CHECKBOX?: RadioButtonProps;
        MULTIPLE_CHOICE?: CheckboxProps;
        RATING?: FormRatingProps['inputProps'];
        FILE?: Omit<InputFileProps, 'initialFiles' | 'name'>;
        STAR_RATING?: FormRatingProps['inputProps'];
    };
};
declare const FormInput: ({ name, component, isFrozen, slotProps, }: FormInputProps) => import("react/jsx-runtime").JSX.Element | null;
export default FormInput;
