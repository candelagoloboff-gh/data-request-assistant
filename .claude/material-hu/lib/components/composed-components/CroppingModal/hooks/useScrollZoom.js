import { useEffect, useState } from 'react';
export default function useScrollZoom(contentRef) {
    const [zoom, setZoom] = useState(0);
    useEffect(() => {
        const element = contentRef.current;
        if (!element)
            return;
        const wheelHandler = (event) => {
            event.preventDefault();
            const delta = event.deltaY * -0.05;
            setZoom(prevZoom => {
                const newZoom = Math.max(0, Math.min(100, prevZoom + delta));
                return Math.round(newZoom * 10) / 10;
            });
        };
        element.addEventListener('wheel', wheelHandler, { passive: false });
        return () => element.removeEventListener('wheel', wheelHandler);
    }, []);
    return { zoom, setZoom };
}
