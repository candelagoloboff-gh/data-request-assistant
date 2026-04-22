import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { alpha, Divider, IconButton, Stack, Typography, useTheme, } from '@mui/material';
import { Document } from '../../../config/react-pdf';
import { IconArrowsMaximize, IconMinus, IconPlus, IconRotateClockwise2, } from '@tabler/icons-react';
import { times } from 'lodash';
import useDimensions from '../../../hooks/useDimensions';
import usePdfDimensions from '../../../hooks/usePdfDimensions';
import useResizeObserver from '../../../hooks/useResizeObserver';
import useScroll from '../../../hooks/useScroll';
import { isScrolledToEnd } from '../../../utils/elements';
import '../../../config/react-pdf';
import { useTranslation } from 'react-i18next';
import Spinner from '../../design-system/ProgressIndicators/Spinner';
import PdfFullScreen from './components/FullScreen';
import PdfPage from './components/Page';
import PdfTools from './components/Tools';
import { ANNOTATION_LAYER_STYLES } from './constants';
import { getPageWidth, getZoomPercentage, rotate } from './utils';
const MIN_ZOOM_LEVEL = 0.5;
const centeredStackStyles = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1,
};
const PdfViewer = ({ name, file, onFinishRead = () => null, variant = 'bar', sx, slotProps = {}, }) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [zoom, setZoom] = useState(1.0);
    const [fullscreen, setFullscreen] = useState(false);
    const [rotation, setRotation] = useState(0);
    const { palette, shape, spacing } = useTheme();
    const { t } = useTranslation('material_hu_only');
    const containerRef = useRef(null);
    const documentRef = useRef(null);
    const { pdfDimensions, navbar } = slotProps;
    const { showRotation = true, showFullScreen = true } = navbar || {};
    const { dimensions: pageDimensions, handleLoadPage } = usePdfDimensions(documentRef.current);
    const { dimensions: containerDimensions } = useDimensions(containerRef.current);
    const checkFinishedReading = (container) => {
        if (isScrolledToEnd(container))
            onFinishRead();
    };
    useScroll(containerRef.current, checkFinishedReading);
    useResizeObserver(containerRef.current, (entries) => {
        for (const entry of entries) {
            const element = entry.target;
            checkFinishedReading(element);
        }
    });
    const handleLoadSuccess = ({ numPages: newNumPages }) => {
        setNumPages(newNumPages);
        setPageNumber(1);
    };
    const handleZoomIn = () => setZoom(zoom + 0.1);
    const handleZoomOut = () => setZoom(Math.max(zoom - 0.1, 0.1));
    const handleUpdatePageNumber = (newPageNumber) => {
        setPageNumber(newPageNumber);
    };
    const handleRotate = () => {
        setRotation(rotate(rotation));
    };
    const customDimensions = {
        ...pageDimensions,
        width: getPageWidth(zoom, containerDimensions.width, pdfDimensions?.baseWidth),
    };
    const handleOpenFullScreen = () => setFullscreen(true);
    const handleCloseFullScreen = () => setFullscreen(false);
    const disableZoomIn = customDimensions.width >= containerDimensions.width;
    const disableZoomOut = zoom <= MIN_ZOOM_LEVEL;
    const isFloating = variant === 'floating';
    return (_jsxs(Stack, { sx: {
            width: '100%',
        }, children: [variant === 'bar' && (_jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    p: 2,
                    gap: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: palette.new.text.neutral.default,
                    borderTopLeftRadius: shape.borderTopLeftRadiusM,
                    borderTopRightRadius: shape.borderTopRightRadiusM,
                    '& .MuiIconButton-root, .MuiTypography-root, .MuiDivider-root': {
                        color: palette.new.text.neutral.inverted,
                        '& svg': {
                            stroke: palette.new.text.neutral.inverted,
                        },
                    },
                    '& .MuiIconButton-root': {
                        '&:hover': {
                            backgroundColor: alpha(palette.shadows?.inverted, 0.5),
                        },
                    },
                    '& .MuiTypography-root': {
                        textWrap: 'nowrap',
                    },
                    '& .MuiDivider-root': {
                        height: spacing(2),
                    },
                    '& .header-group': {
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: 0.5,
                    },
                    overflowX: 'auto',
                }, children: [!!numPages && (_jsxs(_Fragment, { children: [_jsxs(Typography, { className: "header-group", children: [_jsx("span", { children: pageNumber }), _jsx("span", { children: '/' }), _jsx("span", { children: numPages })] }), _jsx(Divider, { orientation: "vertical" })] })), _jsxs(Stack, { className: "header-group", children: [_jsx(IconButton, { "aria-label": t('hu_pdf.zoom_out'), onClick: handleZoomOut, disabled: disableZoomOut, children: _jsx(IconMinus, {}) }), _jsx(Typography, { sx: { minWidth: '54px', textAlign: 'center' }, children: getZoomPercentage(zoom) }), _jsx(IconButton, { "aria-label": t('hu_pdf.zoom_in'), onClick: handleZoomIn, disabled: disableZoomIn, children: _jsx(IconPlus, {}) })] }), (showFullScreen || showRotation) && (_jsxs(_Fragment, { children: [_jsx(Divider, { orientation: "vertical" }), _jsxs(Stack, { className: "header-group", children: [showFullScreen && (_jsx(IconButton, { "aria-label": t('hu_pdf.full_screen'), onClick: handleOpenFullScreen, children: _jsx(IconArrowsMaximize, {}) })), showRotation && (_jsx(IconButton, { "aria-label": t('hu_pdf.rotate'), onClick: handleRotate, children: _jsx(IconRotateClockwise2, {}) }))] })] }))] })), _jsxs(Stack, { ref: containerRef, sx: {
                    ...ANNOTATION_LAYER_STYLES,
                    width: '100%',
                    height: '430px',
                    flexDirection: isFloating ? 'column' : 'row',
                    display: 'flex',
                    justifyContent: isFloating ? 'flex-start' : 'center',
                    alignItems: isFloating ? 'center' : 'flex-start',
                    backgroundColor: '#F8F9FA',
                    overflow: 'auto',
                    position: 'relative',
                    ...sx,
                }, children: [_jsx(Document, { file: file, inputRef: documentRef, onLoadSuccess: handleLoadSuccess, rotate: showRotation ? rotation : null, externalLinkTarget: "_blank", error: _jsx(Stack, { sx: centeredStackStyles, children: t('hu_pdf.error_loading_pdf') }), loading: _jsx(Stack, { sx: centeredStackStyles, children: _jsx(Spinner, {}) }), children: times(numPages, index => (_jsx(PdfPage, { variant: variant, page: index + 1, zoom: zoom, onUpdatePageNumber: handleUpdatePageNumber, onLoadSuccess: handleLoadPage, dimensions: customDimensions }, index))) }), isFloating && (_jsx(PdfTools, { pageNumber: pageNumber, totalPages: numPages, onZoom: setZoom, zoom: zoom, variant: variant, toolsOptions: {
                            showResetZoom: false,
                            showPercentage: true,
                        } })), fullscreen && (_jsx(PdfFullScreen, { name: name, file: file, onClose: handleCloseFullScreen, ...slotProps.fullscreen }))] })] }));
};
export default PdfViewer;
