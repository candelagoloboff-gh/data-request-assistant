import { type FC } from 'react';
import { type SubmitHandler } from 'react-hook-form';
import { type CompleteFile, type FileCompleterFunction } from '../../../types/attachments';
import { type CardContainerProps } from '../../design-system/CardContainer/types';
import { type FileCarrouselProps } from './FilesCarrousel';
export type FieldValues = {
    body: string;
    files: CompleteFile[];
    media: CompleteFile[];
};
export type CreatePostProps = {
    profilePicture?: string;
    fullName: string;
    handlePost: SubmitHandler<FieldValues>;
    sx?: CardContainerProps['sx'];
    existingPost?: Partial<FieldValues>;
    onCancel?: () => void;
    uploadMedia?: FileCompleterFunction;
    uploadFile?: FileCompleterFunction;
    maxAttachedSize?: number;
    maxInputSize?: number;
    filesCarrouselProps?: FileCarrouselProps;
};
export declare const CreatePost: FC<CreatePostProps>;
export default CreatePost;
