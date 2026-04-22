import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useState, } from 'react';
import { useTranslation } from 'react-i18next';
import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconMinus, IconPlus } from '@tabler/icons-react';
import { fadeIn } from '../../../../../utils/animations';
import { MAX_ZOOM, MIN_ZOOM, NUMBER_INPUT_REGEX } from '../../constants';
import { usePdfVisualizer } from '../../context';
const Paginator = () => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { currentPage, totalPages, zoom, changePage, zoomIn, zoomOut, scrollToPage, } = usePdfVisualizer();
    const [inputValue, setInputValue] = useState(String(currentPage));
    useEffect(() => {
        setInputValue(String(currentPage));
    }, [currentPage]);
    const handleInputChange = useCallback((e) => {
        const value = e.target.value;
        if (NUMBER_INPUT_REGEX.test(value))
            setInputValue(value);
    }, []);
    const handleInputBlur = useCallback(() => {
        const pageNum = parseInt(inputValue, 10);
        if (Number.isNaN(pageNum) || pageNum < 1) {
            setInputValue(String(currentPage));
            return;
        }
        const validPage = Math.min(pageNum, totalPages);
        changePage(validPage);
        scrollToPage(validPage);
        setInputValue(String(validPage));
    }, [inputValue, currentPage, totalPages, changePage, scrollToPage]);
    const handleKeyDown = useCallback((e) => {
        if (e.key === 'Enter')
            handleInputBlur();
    }, [handleInputBlur]);
    const disableZoomOut = zoom <= MIN_ZOOM;
    const disableZoomIn = zoom >= MAX_ZOOM;
    const isPending = totalPages === 0;
    return (_jsxs(Stack, { sx: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 5,
            py: 1.5,
            px: 2,
            backgroundColor: theme.palette.new.background.layout.tertiary,
            animation: `${fadeIn} 0.3s ease`,
        }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1 }, children: [_jsx(Typography, { variant: "globalXS", sx: {
                            color: theme.palette.new.text.neutral.brand,
                            fontWeight: 'fontWeightSemiBold',
                        }, children: t('pdf_visualizer.page') }), _jsx(OutlinedInput, { value: isPending ? '...' : inputValue, onChange: handleInputChange, onBlur: handleInputBlur, onKeyDown: handleKeyDown, size: "small", sx: {
                            width: 42,
                            height: 40,
                            '& input': { textAlign: 'center', px: 0.5 },
                        } }), _jsx(Typography, { variant: "globalXS", sx: {
                            color: theme.palette.new.text.neutral.brand,
                            fontWeight: 'fontWeightSemiBold',
                        }, children: "/" }), _jsx(Typography, { variant: "globalXS", sx: {
                            color: theme.palette.new.text.neutral.brand,
                            fontWeight: 'fontWeightSemiBold',
                        }, children: isPending ? '...' : totalPages })] }), _jsxs(Box, { children: [_jsx(IconButton, { "aria-label": t('pdf_visualizer.zoom_out'), onClick: zoomOut, disabled: disableZoomOut, variant: "secondary", sx: {
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            borderTopRightRadius: 0,
                            borderBottomRightRadius: 0,
                        }, children: _jsx(IconMinus, { size: 24 }) }), _jsx(IconButton, { "aria-label": t('pdf_visualizer.zoom_in'), onClick: zoomIn, disabled: disableZoomIn, variant: "secondary", sx: {
                            width: 40,
                            height: 40,
                            borderRadius: 1,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }, children: _jsx(IconPlus, { size: 24 }) })] })] }));
};
export default Paginator;
