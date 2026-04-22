import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Spinner from '../../../design-system/ProgressIndicators/Spinner';
import { Backdrop, Fade, Slide, Stack, useMediaQuery, useTheme, } from '@mui/material';
import humandLogo from '../../../../assets/HUMAND-Blue.svg';
const LoginLayout = ({ children, banner, showBackdrop = false, sx, }) => {
    const theme = useTheme();
    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
    const { t } = useTranslation('material_hu_only');
    return (_jsxs(_Fragment, { children: [_jsxs(Stack, { sx: {
                    flex: 1,
                    flexDirection: 'row',
                    p: 9,
                    gap: 8,
                    minHeight: '100vh',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.new.background.elements.default,
                    ...sx,
                }, children: [_jsx(Slide, { direction: "right", in: isMdUp, timeout: 500, mountOnEnter: true, unmountOnExit: true, children: _jsx(Stack, { sx: {
                                flex: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: theme.palette.base?.blueBrandTransparent['200p50'],
                                borderRadius: 3,
                                p: 4,
                            }, children: _jsx(Fade, { in: isMdUp, timeout: 800, children: _jsx("img", { alt: "Banner", src: banner.src, style: {
                                        width: '100%',
                                        objectFit: 'cover',
                                        ...banner.styles,
                                    } }) }) }) }), _jsxs(Stack, { sx: {
                            alignItems: 'center',
                            flex: 1,
                            justifyContent: 'space-between',
                            minWidth: 435,
                            maxWidth: isMdUp ? 500 : 435,
                            gap: 5,
                        }, children: [_jsx(Stack, { sx: {
                                    alignSelf: 'flex-start',
                                }, children: _jsx("img", { alt: t('login.humand_logo_alt'), src: humandLogo, style: { height: 30, width: 181 } }) }), children] })] }), _jsx(Backdrop, { sx: {
                    color: theme.palette.base?.greyTransparent['900p60'],
                }, open: showBackdrop, children: _jsx(Spinner, {}) })] }));
};
export default LoginLayout;
