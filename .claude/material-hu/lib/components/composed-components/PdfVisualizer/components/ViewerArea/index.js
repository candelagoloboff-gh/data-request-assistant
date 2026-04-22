import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Spinner from '../../../../design-system/ProgressIndicators/Spinner';
import { useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { Document } from '../../../../../config/react-pdf';
import useDimensions from '../../../../../hooks/useDimensions';
import useResizeObserver from '../../../../../hooks/useResizeObserver';
import useScroll from '../../../../../hooks/useScroll';
import { isScrolledToEnd } from '../../../../../utils/elements';
import times from 'lodash/times';
import { usePdfVisualizer } from '../../context';
import PdfPage from '../PdfPage';
const CONTAINER_PADDING = 24;
const ViewerArea = ({ sx }) => {
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    const { file, totalPages, baseWidth, setTotalPages, setPageWidth, registerScrollContainer, onFinishRead, } = usePdfVisualizer();
    const containerRef = useRef(null);
    const { dimensions } = useDimensions(containerRef.current);
    // Calculate page width based on container size and baseWidth
    useEffect(() => {
        const availableWidth = dimensions.width - CONTAINER_PADDING * 2;
        if (availableWidth <= 0)
            return;
        const shouldAutoFit = availableWidth < baseWidth;
        const calculatedWidth = shouldAutoFit ? availableWidth : baseWidth;
        setPageWidth(calculatedWidth);
    }, [dimensions.width, baseWidth, setPageWidth]);
    const setContainerRef = useCallback((node) => {
        containerRef.current = node;
        registerScrollContainer(node);
    }, [registerScrollContainer]);
    const checkFinishedReading = useCallback((container) => {
        if (isScrolledToEnd(container) && onFinishRead)
            onFinishRead();
    }, [onFinishRead]);
    useScroll(containerRef.current, checkFinishedReading);
    useResizeObserver(containerRef.current, (entries) => {
        for (const entry of entries) {
            const element = entry.target;
            checkFinishedReading(element);
        }
    });
    const handleLoadSuccess = useCallback(({ numPages }) => setTotalPages(numPages), [setTotalPages]);
    return (_jsx(Stack, { ref: setContainerRef, sx: {
            flex: 1,
            overflow: 'auto',
            backgroundColor: theme.palette.new.background.layout.default,
            py: 3,
            ...sx,
            margin: '0 auto',
        }, children: _jsx(Stack, { sx: {
                width: 'fit-content',
                minWidth: '100%',
                alignItems: 'center',
            }, children: _jsx(Document, { file: file, onLoadSuccess: handleLoadSuccess, loading: _jsx(Stack, { sx: {
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }, children: _jsx(Spinner, {}) }), error: _jsx(Stack, { sx: {
                        height: '100%',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: theme.palette.error.main,
                    }, children: t('pdf_visualizer.error_loading_pdf') }), children: times(totalPages, index => (_jsx(PdfPage, { pageNumber: index + 1 }, `pdf-page-${index + 1}`))) }) }) }));
};
export default ViewerArea;
