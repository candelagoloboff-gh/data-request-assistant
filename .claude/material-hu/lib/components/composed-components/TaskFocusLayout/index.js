import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import TaskFocusHeader from '../../design-system/Header/TaskFocus';
import { Stack } from '@mui/material';
const TaskFocusLayout = ({ children, slotProps }) => {
    return (_jsxs(Stack, { ...slotProps.root, sx: {
            height: '100%',
            width: '100%',
            backgroundColor: theme => theme.palette.new.background.elements.default,
            ...slotProps.root?.sx,
        }, children: [_jsx(TaskFocusHeader, { ...slotProps.header }), children] }));
};
export default TaskFocusLayout;
