import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { LoadingButton } from '@mui/lab';
import { Button, Divider, Stack, Typography, useMediaQuery, useTheme, } from '@mui/material';
import FormInputClassic from '../../../design-system/Inputs/Classic/form';
import FormInputPassword from '../../../design-system/Inputs/Password/form';
import Link from '../../../design-system/Link';
const LoginForm = ({ title, formConfig, hasInstanceSelected, callbacks, sso, termsOfUseAndPrivacy, isSubmitting, showAnotherInstanceButton, }) => {
    const { t } = useTranslation('material_hu_only');
    const theme = useTheme();
    const isSmUp = useMediaQuery(theme.breakpoints.up('sm'));
    const commonButtonProps = {
        fullWidth: true,
        disabled: isSubmitting,
        size: isSmUp ? 'large' : 'medium',
    };
    const { onSubmit, onRecoverPassword, onSelectAnother } = callbacks;
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { sx: {
                    width: '100%',
                    gap: 5,
                }, children: [title, _jsx("form", { noValidate: true, onSubmit: onSubmit, children: _jsxs(Stack, { sx: { gap: 4 }, children: [_jsx(FormInputClassic, { name: "email", inputProps: {
                                        label: t('login.user'),
                                        autoFocus: true,
                                        type: 'email',
                                        disabled: hasInstanceSelected,
                                        hasCounter: false,
                                        autoComplete: 'email',
                                    }, rules: formConfig.email.rules }), hasInstanceSelected && (_jsxs(Stack, { sx: { gap: 1 }, children: [_jsx(FormInputPassword, { name: "password", inputProps: {
                                                label: t('login.password'),
                                                autoFocus: true,
                                                autoComplete: 'current-password',
                                            }, rules: formConfig.password.rules }), _jsx(Link, { onClick: onRecoverPassword, "aria-label": t('login.forgot_password'), sx: {
                                                width: 'fit-content',
                                            }, children: t('login.forgot_password') })] })), _jsxs(Stack, { sx: { gap: 2 }, children: [_jsx(LoadingButton, { ...commonButtonProps, type: "submit", variant: "primary", size: "large", loading: isSubmitting, children: hasInstanceSelected ? t('login.login') : t('login.continue') }), showAnotherInstanceButton && (_jsx(Button, { ...commonButtonProps, variant: "secondary", onClick: onSelectAnother, children: t('login.select_another_community') }))] }), !hasInstanceSelected && (_jsxs(Stack, { sx: { gap: 3 }, children: [_jsx(Divider, { sx: {
                                                width: '100%',
                                                height: '25px',
                                                backgroundColor: 'transparent',
                                            }, children: _jsx(Typography, { variant: "globalM", sx: {
                                                    color: theme.palette.new.text.neutral.lighter,
                                                }, children: t('login.or_login_with') }) }), _jsxs(Stack, { sx: {
                                                flexDirection: 'row',
                                                width: '100%',
                                                justifyContent: 'space-evenly',
                                            }, children: [sso.azureButton, sso.googleButton, sso.oktaButton] })] }))] }) })] }), termsOfUseAndPrivacy || _jsx(Stack, {})] }));
};
export default LoginForm;
