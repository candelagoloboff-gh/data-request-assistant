import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { EASING_ENTER } from '../../../LibrariesSidebar/constants';
import { useSidebarContext } from '../../../LibrariesSidebar/context';
import Button from '../../../../design-system/Buttons/Button';
import { Grow, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
export const SidebarSortButtons = ({ loading }) => {
    const { t } = useTranslation();
    const { palette } = useTheme();
    const { isSortMode, handleToggleSortMode, handleSaveSort, handleRestoreSortableItems, } = useSidebarContext();
    if (!isSortMode)
        return null;
    const handleCancel = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleRestoreSortableItems();
        handleToggleSortMode();
    };
    const handleSave = (event) => {
        event.preventDefault();
        event.stopPropagation();
        handleSaveSort();
    };
    return (_jsx(Grow, { in: isSortMode, timeout: 300, easing: { enter: EASING_ENTER }, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                alignItems: 'center',
                position: 'absolute',
                right: 8,
                gap: 2,
                zIndex: 1,
                backgroundColor: palette.new.background.elements.default,
            }, children: [_jsx(Button, { variant: "tertiary", onClick: handleCancel, sx: { minWidth: 'fit-content' }, disabled: loading, children: t('general:cancel') }), _jsx(Button, { variant: "primary", sx: { minWidth: 'fit-content' }, loading: loading, disabled: loading, onClick: handleSave, children: t('general:save') })] }) }));
};
