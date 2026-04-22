import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import { IconGripVertical } from '@tabler/icons-react';
export const DragIcon = () => {
    return (_jsx(Stack, { className: "sidebar-drag-icon", sx: {
            position: 'absolute',
            left: 16,
            top: 12,
            zIndex: 99,
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
        }, children: _jsx(IconGripVertical, {}) }));
};
