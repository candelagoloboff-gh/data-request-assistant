import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState, } from 'react';
import Spinner from '../../../../design-system/ProgressIndicators/Spinner';
import { usePdfDimensions } from '../../../../../hooks/usePdfDimensions';
import { Stack } from '@mui/material';
import { Document } from '../../../../../config/react-pdf';
import { downloadUrl } from '../../../../../utils/files';
import { times } from 'lodash';
import { MIN_FULLSCREEN_ZOOM } from '../../constants';
import { getFile } from '../../utils';
import FileDialog from '../FileDialog';
import Header from '../Header';
import PdfPage from '../Page';
import PdfTools from '../Tools';
import { isClickingInsidePdf } from './utils';
export const PdfFullScreen = ({ file, name, onClose, showHeader = false, slotProps = {}, fileProps, }) => {
    const [numPages, setNumPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [zoom, setZoom] = useState(MIN_FULLSCREEN_ZOOM);
    const [showButtons, setShowButtons] = useState(true);
    const timerRef = useRef();
    const dialogRef = useRef(null);
    const documentRef = useRef(null);
    const { dimensions: pageDimensions, handleLoadPage } = usePdfDimensions(documentRef.current);
    const handleResetTimeout = () => {
        setShowButtons(true);
        clearTimeout(timerRef.current);
        timerRef.current = setTimeout(() => setShowButtons(false), 3000);
    };
    useEffect(() => {
        setNumPages(0);
        setPageNumber(1);
        setZoom(MIN_FULLSCREEN_ZOOM);
    }, [file]);
    useEffect(() => {
        window.addEventListener('mousemove', handleResetTimeout);
        return () => {
            window.removeEventListener('mousemove', handleResetTimeout);
            clearTimeout(timerRef.current);
        };
    }, []);
    const handleLoadSuccess = ({ numPages: newNumPages }) => {
        setNumPages(newNumPages);
        setIsLoading(false);
    };
    const handleZoom = (newZoom) => setZoom(newZoom);
    const handleClose = () => {
        setPageNumber(1);
        setZoom(MIN_FULLSCREEN_ZOOM);
        onClose();
    };
    const handleDownload = (event) => {
        event.preventDefault();
        event.stopPropagation();
        downloadUrl(file, name);
    };
    const handleUpdatePageNumber = useCallback((newPageNumber) => {
        handleResetTimeout();
        setPageNumber(newPageNumber);
    }, []);
    const handleClickOutside = (event) => {
        const target = event.target;
        if (isClickingInsidePdf(target)) {
            return;
        }
        handleClose();
    };
    const pdfFile = getFile(file);
    return (_jsxs(FileDialog, { open: true, onClose: handleClose, onClick: handleClickOutside, ref: dialogRef, maxWidth: "lg", children: [showHeader && (_jsx(Header, { name: name, onClose: handleClose, onDownload: handleDownload, ...slotProps.header })), _jsx(Stack, { ref: documentRef, sx: {
                    width: '100%',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }, children: _jsxs(_Fragment, { children: [fileProps?.isLoading && _jsx(Spinner, {}), _jsx("div", { style: { display: fileProps?.isLoading ? 'none' : 'flex' }, children: _jsx(Document, { file: pdfFile, onLoadSuccess: handleLoadSuccess, inputRef: documentRef, loading: _jsx(Spinner, {}), externalLinkTarget: "_blank", children: times(numPages, index => (_jsx(PdfPage, { page: index + 1, zoom: zoom, onUpdatePageNumber: handleUpdatePageNumber, onLoadSuccess: handleLoadPage, dimensions: pageDimensions }, index))) }) })] }) }), showButtons && (_jsx(PdfTools, { loading: isLoading, pageNumber: pageNumber, totalPages: numPages, zoom: zoom, onZoom: handleZoom }))] }));
};
export default PdfFullScreen;
