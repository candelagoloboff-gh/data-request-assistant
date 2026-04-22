import { IconAlertTriangle, IconCircleCheck, IconCircleX, IconInfoCircle, IconWifiOff, } from '@tabler/icons-react';
export const getDefaultIcon = (variant) => {
    switch (variant) {
        case 'success':
            return IconCircleCheck;
        case 'error':
            return IconCircleX;
        case 'warning':
            return IconAlertTriangle;
        case 'wifi-off':
            return IconWifiOff;
        default:
            return IconInfoCircle;
    }
};
export const getColor = (variant) => {
    switch (variant) {
        case 'wifi-off':
            return 'warning';
        default:
            return variant;
    }
};
