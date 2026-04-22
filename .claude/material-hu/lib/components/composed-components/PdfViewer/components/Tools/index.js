import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { getZoomPercentage, getZoomValues, } from '../../../PdfViewer/utils';
import { Stack, Typography, useTheme } from '@mui/material';
import { IconMinus, IconPlus, IconZoomReset } from '@tabler/icons-react';
import ToolButton from '../ToolButton';
const PdfTools = ({ loading = false, pageNumber, totalPages, onZoom = () => null, zoom, toolsOptions = {}, variant = 'bar', }) => {
    const { palette, spacing, shape } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { showResetZoom = true, showPercentage = false, showZoomIn = true, showZoomOut = true, } = toolsOptions;
    const { zoomStep, maxZoom, minZoom } = getZoomValues(variant);
    const handleZoomIn = (event) => {
        event.stopPropagation();
        onZoom(zoom + zoomStep, event);
    };
    const handleZoomOut = (event) => {
        event.stopPropagation();
        onZoom(zoom - zoomStep, event);
    };
    const handleZoomReset = (event) => {
        event.stopPropagation();
        onZoom(minZoom, event);
    };
    const isZoomInDisabled = zoom >= maxZoom;
    const isZoomOutDisabled = zoom <= minZoom;
    const isResetZoomDisabled = zoom <= minZoom;
    return (_jsx(Stack, { sx: {
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            position: variant === 'bar' ? 'fixed' : 'sticky',
            bottom: spacing(2),
            left: 0,
            zIndex: 2,
        }, children: _jsxs(Stack, { sx: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: palette.new.text.neutral.default,
                borderRadius: shape.borderRadiusL,
                '& .MuiTypography-root, .MuiIconButton-root': {
                    color: palette.new.text.neutral.inverted,
                    '& svg': {
                        stroke: palette.new.text.neutral.inverted,
                    },
                },
                '& :first-child': {
                    borderTopLeftRadius: shape.borderTopLeftRadiusL,
                    borderBottomLeftRadius: shape.borderBottomLeftRadiusL,
                },
                '& :last-child': {
                    borderTopRightRadius: shape.borderTopRightRadiusL,
                    borderBottomRightRadius: shape.borderBottomRightRadiusL,
                },
            }, children: [!loading && (_jsx(Typography, { variant: "globalS", fontWeight: "fontWeightSemiBold", sx: {
                        px: 2,
                        borderRight: '1px solid',
                        borderColor: palette.new.text.neutral.lighter,
                    }, children: t('hu_pdf.page_number_controller', { pageNumber, totalPages }) })), showZoomOut && (_jsx(ToolButton, { label: t('hu_pdf.zoom_out'), Icon: IconMinus, onClick: handleZoomOut, disabled: isZoomOutDisabled })), showResetZoom && (_jsx(ToolButton, { label: t('hu_pdf.reset_zoom'), Icon: IconZoomReset, onClick: handleZoomReset, disabled: isResetZoomDisabled })), showPercentage && (_jsx(Typography, { sx: { minWidth: '54px', textAlign: 'center' }, children: getZoomPercentage(zoom) })), showZoomIn && (_jsx(ToolButton, { label: t('hu_pdf.zoom_in'), Icon: IconPlus, onClick: handleZoomIn, disabled: isZoomInDisabled }))] }) }));
};
export default PdfTools;
