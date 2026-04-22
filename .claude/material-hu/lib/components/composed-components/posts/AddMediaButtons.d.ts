import { type FC } from 'react';
import { type FileCompleterFunction } from '../../../types/attachments';
export type CreatePostProps = {
    uploadMedia?: FileCompleterFunction;
    uploadFile?: FileCompleterFunction;
    maxAttachedSize: number;
};
export declare const AddMediaButtons: FC<CreatePostProps>;
export default AddMediaButtons;
