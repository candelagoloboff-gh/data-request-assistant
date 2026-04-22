import { type FormSignProps } from '../../../sign/documents/SignDialog/types';
import { type ButtonProps } from '../../../../design-system/Buttons/Button';
export type InputSignProps = {
    name: string;
    disabled?: boolean;
    buttonProps?: ButtonProps;
    deleteButtonProps?: Partial<ButtonProps>;
    editButtonProps?: Partial<ButtonProps>;
    signProps?: FormSignProps['signProps'];
};
declare const InputSign: ({ name, disabled, buttonProps, deleteButtonProps, editButtonProps, signProps, }: InputSignProps) => import("react/jsx-runtime").JSX.Element;
export default InputSign;
