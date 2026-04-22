import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
const FormLayout = ({ children }) => {
    return (_jsx(Stack, { sx: {
            maxWidth: 'lg',
            mx: 'auto',
            py: 5,
            px: 3,
            pb: 10,
            overflow: 'auto',
        }, children: children }));
};
export default FormLayout;
