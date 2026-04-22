import { type ButtonProps } from '../../../design-system/Buttons/Button';
import { type StackProps } from '@mui/material/Stack';
export type FormFooterProps = {
    nextButton: ButtonProps;
    backButton: ButtonProps;
    sx?: StackProps['sx'];
    slotProps?: {
        nextButton?: ButtonProps;
        backButton?: ButtonProps;
        root?: StackProps;
        wrapper?: StackProps;
    };
};
declare const FormFooter: ({ nextButton, backButton, sx, slotProps, }: FormFooterProps) => import("react/jsx-runtime").JSX.Element;
export default FormFooter;
