import { jsx as _jsx } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import { useTheme } from '@mui/material/styles';
const Decorator = ({ type }) => {
    const theme = useTheme();
    const colorMap = {
        promoter: theme.palette.newBase?.green[700],
        detractor: theme.palette.newBase?.red[600],
        neutral: theme.palette.newBase?.yellow[600],
    };
    return (_jsx(Stack, { sx: {
            width: 16,
            height: 16,
            borderRadius: '50%',
            backgroundColor: colorMap[type],
            border: `2px solid ${theme.palette.new.border.neutral.default}`,
        } }));
};
export default Decorator;
