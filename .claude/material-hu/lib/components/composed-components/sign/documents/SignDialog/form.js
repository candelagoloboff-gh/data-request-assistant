import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import HuSignDialog from '.';
const FormSign = ({ name, signProps, disabled }) => {
    const form = useFormContext();
    const onHandleSave = (signature) => {
        form.setValue(name, signature);
        signProps?.onSave?.(signature);
    };
    const onHandleClose = () => {
        form.setValue(name, undefined);
        signProps?.onClose?.();
    };
    return (_jsx(Controller, { render: ({ field }) => (_jsx(HuSignDialog, { ...field, ...signProps, onSave: onHandleSave, onClose: onHandleClose, disabled: disabled })), name: name }));
};
export default FormSign;
