import { type PopperPlacementType } from '@mui/material/Popper/BasePopper.types';
export declare const MAX_HEIGHT = 360;
export declare const MAX_WIDTH = 312;
export declare const positionMap: {
    left: {
        anchorOrigin: {
            vertical: "bottom";
            horizontal: "start";
        };
    };
    right: {
        anchorOrigin: {
            vertical: "bottom";
            horizontal: "end";
        };
    };
    center: {
        anchorOrigin: {
            vertical: "bottom";
            horizontal: null;
        };
    };
    'top-right': {
        anchorOrigin: {
            vertical: "top";
            horizontal: "right";
        };
    };
};
export declare const transformOriginMap: Record<PopperPlacementType, string>;
