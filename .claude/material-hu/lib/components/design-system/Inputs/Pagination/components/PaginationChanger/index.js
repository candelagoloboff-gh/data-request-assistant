import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from '@mui/material';
import { IconChevronDown } from '@tabler/icons-react';
import Menu from '../../../../Menu';
import MenuItem from '../../../../Menu/components/MenuItem';
import Skeleton from '../../../../Skeleton';
export const PaginationChanger = ({ loading = false, limit = 10, limitOptions = [10, 20, 30], onChange = () => null, disabled = false, }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const { t } = useTranslation('material_hu_only');
    const open = Boolean(anchorEl);
    const handleOpen = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    const handleSelect = (option) => {
        onChange(option);
        handleClose();
    };
    return (_jsxs(_Fragment, { children: [loading && (_jsx(Skeleton, { width: 115, height: 36 })), !loading && (_jsxs(_Fragment, { children: [_jsx(Button, { variant: "secondary", size: "small", onClick: handleOpen, disabled: disabled, endIcon: _jsx(IconChevronDown, { size: 16 }), children: t('hu_inputs.limit_label', { limit }) }), _jsx(Menu, { open: open, anchorEl: anchorEl, onClose: handleClose, fixedDimensions: false, children: limitOptions.map(option => (_jsx(MenuItem, { selected: option === limit, onClick: () => handleSelect(option), children: _jsx(Typography, { variant: "inherit", noWrap: true, children: t('hu_inputs.limit_label', { limit: option }) }) }, option))) })] }))] }));
};
export default PaginationChanger;
