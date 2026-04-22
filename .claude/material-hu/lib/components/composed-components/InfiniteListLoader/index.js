import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import Button from '@mui/lab/LoadingButton';
import { IconProgress } from '@tabler/icons-react';
const InfiniteListLoader = ({ onLoadMore, containerRef, ...props }) => {
    const ioInstance = useRef(null);
    const buttonRef = useRef(null);
    useEffect(() => {
        const handleIntersection = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    onLoadMore();
                }
            });
        };
        if (containerRef.current) {
            ioInstance.current = new IntersectionObserver(handleIntersection, {
                root: containerRef.current,
            });
            if (buttonRef.current) {
                ioInstance.current.observe(buttonRef.current);
            }
            return () => {
                if (ioInstance.current) {
                    ioInstance.current.disconnect();
                }
            };
        }
    }, [onLoadMore]);
    return (_jsx(Button, { ref: buttonRef, variant: "secondary", size: "small", onClick: onLoadMore, endIcon: props?.loading ? undefined : _jsx(IconProgress, { size: 16 }), ...props }));
};
export default InfiniteListLoader;
