import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconButton, Stack, Typography } from '@mui/material';
import googleLogo from '../../../../../assets/google.svg';
import microsoftLogo from '../../../../../assets/microsoft.svg';
import oktaLogo from '../../../../../assets/okta.svg';
const getLogo = (type) => {
    switch (type) {
        case 'Microsoft':
            return microsoftLogo;
        case 'Google':
            return googleLogo;
        case 'Okta':
            return oktaLogo;
    }
};
const SSOButton = ({ type, onClick }) => (_jsxs(Stack, { sx: { alignItems: 'center', gap: 0.5 }, children: [_jsx(IconButton, { onClick: onClick, sx: {
                p: 2,
                borderStyle: 'solid',
                borderColor: theme => theme.palette.border?.neutralDivider,
                borderWidth: '1px',
                backgroundColor: 'background.default',
                borderRadius: '50%',
            }, children: _jsx("img", { src: getLogo(type), alt: type, height: 24, width: 24 }) }), _jsx(Typography, { variant: "globalXS", sx: {
                color: theme => theme.palette.new.text.neutral.lighter,
            }, children: type })] }));
export default SSOButton;
