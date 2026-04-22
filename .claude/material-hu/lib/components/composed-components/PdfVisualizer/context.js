import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useCallback, useContext, useMemo, useRef, useState, } from 'react';
import { DEFAULT_BASE_WIDTH, DEFAULT_ZOOM, MAX_ZOOM, MIN_ZOOM, ZOOM_STEP, } from './constants';
const PdfVisualizerContext = createContext(null);
export const PdfVisualizerProvider = ({ children, file, defaultPage = 1, baseWidth = DEFAULT_BASE_WIDTH, onFinishRead, }) => {
    const [currentPage, setCurrentPage] = useState(defaultPage);
    const [totalPages, setTotalPages] = useState(0);
    const [zoom, setZoom] = useState(DEFAULT_ZOOM);
    const [isInitialScrollDone, setIsInitialScrollDone] = useState(false);
    const [pageWidth, setPageWidth] = useState(baseWidth);
    const pageRefs = useRef(new Map());
    const scrollContainerRef = useRef(null);
    const getCurrentPage = useCallback(() => {
        const container = scrollContainerRef.current;
        if (!container || pageRefs.current.size === 0)
            return;
        const containerTop = container.scrollTop;
        const containerHeight = container.clientHeight;
        const viewportCenter = containerTop + containerHeight / 3;
        let closestPage = 1;
        let closestDistance = Infinity;
        for (const [page, ref] of pageRefs.current) {
            if (!ref)
                continue;
            const pageTop = ref.offsetTop;
            const pageHeight = ref.offsetHeight;
            const pageCenter = pageTop + pageHeight / 2;
            const distance = Math.abs(viewportCenter - pageCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestPage = page;
            }
        }
        setCurrentPage(closestPage);
    }, []);
    const registerScrollContainer = useCallback((ref) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.removeEventListener('scroll', getCurrentPage);
        }
        scrollContainerRef.current = ref;
        if (ref) {
            ref.addEventListener('scroll', getCurrentPage, {
                passive: true,
            });
        }
    }, [getCurrentPage]);
    const changePage = useCallback((page) => {
        const validPage = Math.max(1, Math.min(page, totalPages || 1));
        setCurrentPage(validPage);
    }, [totalPages]);
    const handleSetTotalPages = useCallback((total) => {
        setTotalPages(total);
        if (currentPage > total)
            setCurrentPage(total);
    }, [currentPage]);
    const zoomIn = useCallback(() => {
        setZoom(prev => Math.min(prev + ZOOM_STEP, MAX_ZOOM));
    }, []);
    const zoomOut = useCallback(() => {
        setZoom(prev => Math.max(prev - ZOOM_STEP, MIN_ZOOM));
    }, []);
    const registerPageRef = useCallback((page, ref) => {
        pageRefs.current.set(page, ref);
        // Scroll to defaultPage once the page is registered and it's the first load
        if (page === defaultPage &&
            ref &&
            !isInitialScrollDone &&
            defaultPage > 1) {
            // Use setTimeout to ensure the DOM is fully rendered
            setTimeout(() => {
                const container = scrollContainerRef.current;
                if (container) {
                    // Calculate scroll position relative to container
                    const containerRect = container.getBoundingClientRect();
                    const pageRect = ref.getBoundingClientRect();
                    const scrollOffset = pageRect.top - containerRect.top + container.scrollTop;
                    container.scrollTop = scrollOffset;
                }
                setIsInitialScrollDone(true);
            }, 100);
        }
    }, [defaultPage, isInitialScrollDone]);
    const scrollToPage = useCallback((page) => {
        const pageRef = pageRefs.current.get(page);
        const container = scrollContainerRef.current;
        if (pageRef && container) {
            const containerRect = container.getBoundingClientRect();
            const pageRect = pageRef.getBoundingClientRect();
            const scrollOffset = pageRect.top - containerRect.top + container.scrollTop;
            container.scrollTo({ top: scrollOffset, behavior: 'smooth' });
        }
    }, []);
    const value = useMemo(() => ({
        currentPage,
        totalPages,
        zoom,
        file,
        baseWidth,
        pageWidth,
        setPageWidth,
        changePage,
        setTotalPages: handleSetTotalPages,
        zoomIn,
        zoomOut,
        scrollToPage,
        registerPageRef,
        registerScrollContainer,
        onFinishRead,
    }), [
        currentPage,
        totalPages,
        zoom,
        file,
        baseWidth,
        pageWidth,
        changePage,
        handleSetTotalPages,
        zoomIn,
        zoomOut,
        scrollToPage,
        registerPageRef,
        registerScrollContainer,
        onFinishRead,
    ]);
    return (_jsx(PdfVisualizerContext.Provider, { value: value, children: children }));
};
export const usePdfVisualizer = () => {
    const context = useContext(PdfVisualizerContext);
    if (!context) {
        throw new Error('usePdfVisualizer must be used within a PdfVisualizerProvider');
    }
    return context;
};
export default PdfVisualizerContext;
