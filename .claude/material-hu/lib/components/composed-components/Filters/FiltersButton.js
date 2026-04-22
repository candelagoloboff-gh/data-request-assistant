import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Stack } from '@mui/material';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { IconFilter } from '@tabler/icons-react';
const FiltersButton = ({ count, onClick, onClear, slotProps = {}, }) => {
    const { t } = useTranslation();
    return (_jsxs(Stack, { ...slotProps.root, sx: {
            alignItems: 'center',
            flexDirection: 'row',
            gap: 1,
            ...slotProps.root?.sx,
        }, children: [_jsxs(IconButton, { "aria-label": t('general:filter'), variant: "secondary", onClick: onClick, ...slotProps.button, children: [_jsx(IconFilter, {}), count > 0 && (_jsx(Badge, { badgeContent: count, ...slotProps.badge, color: "primary", sx: {
                            position: 'absolute',
                            top: 0,
                            right: 0,
                            ...slotProps.badge?.sx,
                        } }))] }), count > 0 && onClear && (_jsx(Button, { variant: "text", onClick: onClear, ...slotProps.clearButton, children: t('general:remove_filters') }))] }));
};
export default FiltersButton;
