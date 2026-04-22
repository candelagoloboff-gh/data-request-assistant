import { FormDropTypes } from './types';
export declare const DOCUMENT_TYPES: FormDropTypes[];
export declare const ACCEPT_BY_TYPE: {
    image: {
        'image/png': never[];
        'image/jpeg': never[];
    };
    video: {
        'video/mp4': never[];
    };
    pdf: {
        'application/pdf': never[];
    };
    file: {
        '*': never[];
    };
};
export declare const MAX_SIZE_BY_TYPE: {
    image: number;
    video: number;
    pdf: number;
    file: number;
};
export declare const RECOMMENDED_WIDTH = 900;
export declare const RECOMMENDED_HEIGHT = 400;
