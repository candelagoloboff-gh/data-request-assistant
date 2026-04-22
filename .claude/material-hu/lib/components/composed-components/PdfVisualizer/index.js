import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Stack } from '@mui/material';
import Paginator from './components/Paginator';
import Sidebar from './components/Sidebar';
import ViewerArea from './components/ViewerArea';
import { PdfVisualizerProvider } from './context';
/**
 * PdfVisualizer - A comprehensive PDF viewer component with pagination,
 * zoom controls, and a collapsible sidebar with page thumbnails.
 *
 * Features:
 * - Page navigation with editable input
 * - Zoom in/out controls
 * - Vertical scroll through all pages
 * - Collapsible sidebar with page thumbnails
 * - Click on thumbnail to navigate to page
 */
const PdfVisualizer = ({ file, defaultPage = 1, onFinishRead, slotProps, sx, }) => {
    const { sidebar, pdfDimensions } = slotProps || {};
    const { show: showSidebar = true, defaultExpanded = false } = sidebar || {};
    const { baseWidth } = pdfDimensions || {};
    return (_jsx(PdfVisualizerProvider, { file: file, defaultPage: defaultPage, baseWidth: baseWidth, onFinishRead: onFinishRead, children: _jsxs(Stack, { sx: { width: '100%', height: '100%', ...sx }, children: [_jsx(Paginator, {}), _jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        width: '100%',
                        height: '100%',
                        overflow: 'auto',
                    }, children: [_jsx(ViewerArea, {}), showSidebar && _jsx(Sidebar, { defaultExpanded: defaultExpanded })] })] }) }));
};
export default PdfVisualizer;
