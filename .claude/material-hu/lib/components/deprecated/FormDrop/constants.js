import { megabytesToBytes } from '../../../utils/bytes';
import { FormDropTypes } from './types';
export const DOCUMENT_TYPES = [FormDropTypes.PDF, FormDropTypes.FILE];
export const ACCEPT_BY_TYPE = {
    [FormDropTypes.IMAGE]: { 'image/png': [], 'image/jpeg': [] },
    [FormDropTypes.VIDEO]: { 'video/mp4': [] },
    [FormDropTypes.PDF]: { 'application/pdf': [] },
    [FormDropTypes.FILE]: { '*': [] },
};
export const MAX_SIZE_BY_TYPE = {
    [FormDropTypes.IMAGE]: megabytesToBytes(100),
    [FormDropTypes.VIDEO]: megabytesToBytes(150),
    [FormDropTypes.PDF]: megabytesToBytes(100),
    [FormDropTypes.FILE]: megabytesToBytes(100),
};
export const RECOMMENDED_WIDTH = 900;
export const RECOMMENDED_HEIGHT = 400;
