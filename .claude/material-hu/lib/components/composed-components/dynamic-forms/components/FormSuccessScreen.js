import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Avatar from '../../../design-system/Avatar';
import Button from '../../../design-system/Buttons/Button';
import Title from '../../../design-system/Title';
import Stack from '@mui/material/Stack';
import { IconCheck } from '@tabler/icons-react';
const FormSuccessScreen = ({ action, title, description, }) => {
    return (_jsxs(Stack, { sx: { gap: 3, maxWidth: 'sm', mx: 'auto' }, children: [_jsxs(Stack, { sx: { alignItems: 'center', gap: 2, justifyContent: 'center' }, children: [_jsx(Avatar, { size: "large", Icon: IconCheck, color: "success" }), _jsx(Title, { centered: true, title: title, description: description })] }), _jsx(Button, { variant: "primary", ...action })] }));
};
export default FormSuccessScreen;
