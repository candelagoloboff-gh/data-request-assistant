import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FormProvider } from 'react-hook-form';
import Button from '../../../design-system/Buttons/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const FormWrapper = ({ children, form, }) => {
    const onSubmit = (data) => {
        // eslint-disable-next-line no-console
        console.log('Form submitted:', data);
        alert('Formulario enviado! Revisa la consola para ver los datos');
    };
    const { errors } = form.formState.errors;
    return (_jsx(FormProvider, { ...form, children: _jsxs("form", { onSubmit: form.handleSubmit(onSubmit), children: [_jsxs(Stack, { spacing: 3, children: [_jsx(Stack, { spacing: 2, children: children }), _jsx(Stack, { sx: { alignSelf: 'flex-start', gap: 2, flexDirection: 'row' }, children: _jsx(Button, { variant: "primary", type: "submit", children: "Enviar" }) })] }), _jsxs(Stack, { component: "details", sx: {
                        backgroundColor: theme => theme.palette.new.background.elements.default,
                        borderRadius: 2,
                        mt: 2,
                        p: 2,
                    }, children: [_jsx(Typography, { variant: "globalXS", component: 'summary', sx: { cursor: 'pointer' }, children: "Form values:" }), _jsx(Stack, { component: "pre", sx: {
                                fontSize: 12,
                                maxHeight: 300,
                                overflow: 'auto',
                                backgroundColor: theme => theme.palette.new.action.background.neutral.hover,
                                borderRadius: 2,
                                p: 2,
                                border: '1px solid #ddd',
                                margin: 0,
                                mt: 2,
                            }, children: JSON.stringify(form.watch(), null, 2) })] }), errors && Object.values(errors).length > 0 && (_jsxs(Stack, { component: "details", sx: {
                        backgroundColor: theme => theme.palette.new.background.feedback.error,
                        borderRadius: 2,
                        mt: 2,
                        p: 2,
                    }, children: [_jsx(Typography, { variant: "globalXS", component: 'summary', sx: { cursor: 'pointer' }, children: "Form errors:" }), _jsx(Stack, { component: "pre", sx: {
                                fontSize: 12,
                                maxHeight: 300,
                                overflow: 'auto',
                                backgroundColor: theme => theme.palette.new.background.feedback.error,
                                borderRadius: 2,
                                p: 2,
                                border: theme => `1px solid ${theme.palette.border?.errorBorder}`,
                                margin: 0,
                                mt: 2,
                            }, children: JSON.stringify(errors, null, 2) })] }))] }) }));
};
export default FormWrapper;
