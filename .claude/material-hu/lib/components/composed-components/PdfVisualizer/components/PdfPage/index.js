import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useRef } from 'react';
import Stack from '@mui/material/Stack';
import { Page } from '../../../../../config/react-pdf';
import { fadeIn } from '../../../../../utils/animations';
import { usePdfVisualizer } from '../../context';
const PdfPage = ({ pageNumber }) => {
    const { zoom, pageWidth, registerPageRef } = usePdfVisualizer();
    const containerRef = useRef(null);
    const setRefs = useCallback((node) => {
        containerRef.current = node;
        registerPageRef(pageNumber, node);
    }, [pageNumber, registerPageRef]);
    return (_jsx(Stack, { ref: setRefs, sx: {
            mb: 2,
            boxShadow: 1,
            backgroundColor: theme => theme.palette.new.background.layout.tertiary,
            animation: `${fadeIn} 0.3s ease`,
        }, children: _jsx(Page, { pageNumber: pageNumber, width: pageWidth, scale: zoom, loading: "" }) }));
};
export default PdfPage;
