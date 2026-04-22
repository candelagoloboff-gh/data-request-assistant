import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Button from '../../../Buttons/Button';
import { IconButton, Stack, Typography, useTheme } from '@mui/material';
import { IconArrowUp, IconProgress } from '@tabler/icons-react';
const TableLoader = ({ loadedCount, totalCount, onLoadMore, onScrollToTop, loadMoreLabel, slotProps, }) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const isEndOfResults = loadedCount >= totalCount;
    return (_jsxs(Stack, { direction: "row", justifyContent: "space-between", alignItems: "center", sx: {
            p: 2,
            border: `1px solid ${theme.palette.new.border.neutral.default}`,
            backgroundColor: theme.palette.new.background.elements.default,
            borderRadius: theme.spacing(2),
        }, children: [_jsx(Stack, { width: "33%" }), _jsxs(Stack, { direction: "row", justifyContent: "center", alignItems: "center", width: "33%", children: [isEndOfResults && (_jsx(Typography, { variant: "globalS", color: "textSecondary", children: t('table_loader.no_more_results') })), !isEndOfResults && (_jsx(Button, { variant: "secondary", size: "small", onClick: onLoadMore, endIcon: _jsx(IconProgress, { size: 16 }), ...slotProps?.button, children: loadMoreLabel ?? t('table_loader.load_more') }))] }), _jsxs(Stack, { direction: "row", justifyContent: "flex-end", alignItems: "center", spacing: 1, width: "33%", children: [_jsx(Typography, { variant: "globalS", color: "textSecondary", children: t('table_loader.loaded_of_total', {
                            loaded: loadedCount,
                            total: totalCount,
                        }) }), _jsx(IconButton, { onClick: onScrollToTop, variant: "secondary", "aria-label": t('table_loader.scroll_to_top'), children: _jsx(IconArrowUp, { size: 16 }) })] })] }));
};
TableLoader.displayName = 'TableLoader';
export default TableLoader;
