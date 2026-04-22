import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Trans } from 'react-i18next';
import { Stack, Typography } from '@mui/material';
import InstanceCard from '../components/InstanceCard';
const OTPLayout = ({ instanceCardProps, title, children }) => {
    return (_jsxs(Stack, { sx: { gap: 5 }, children: [_jsx(InstanceCard, { ...instanceCardProps }), _jsxs(Stack, { sx: { gap: 3 }, children: [_jsx(Typography, { variant: "globalM", children: _jsx(Trans, { i18nKey: title, components: { strong: _jsx("strong", {}) } }) }), children] })] }));
};
export default OTPLayout;
