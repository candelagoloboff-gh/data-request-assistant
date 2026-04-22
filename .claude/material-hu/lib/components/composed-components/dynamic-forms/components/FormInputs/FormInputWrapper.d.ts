import { type CardContainerProps } from '../../../../design-system/CardContainer';
import { type TypographyProps } from '@mui/material/Typography';
import { type DynamicFormComponent } from '../../types';
import { type FormInputSlotProps } from './FormInput';
type FormInputWrapperComponentProps = {
    section: string;
    component: DynamicFormComponent;
    isFrozen?: boolean;
    slotProps?: {
        root?: CardContainerProps;
        title?: TypographyProps;
        fields?: FormInputSlotProps['fields'];
    };
};
export declare const FormInputWrapper: import("react").MemoExoticComponent<({ section, component, isFrozen, slotProps, }: FormInputWrapperComponentProps) => import("react/jsx-runtime").JSX.Element>;
export {};
