import { type FC } from 'react';
import { type CompleteFile } from '../../../types/attachments';
export type FileCarrouselProps = {
    slidesPerView?: number;
};
type FilesCarrouselProps = {
    files?: CompleteFile[];
    isEditable?: boolean;
    filesCarrouselProps?: FileCarrouselProps;
};
export declare const FilesCarrousel: FC<FilesCarrouselProps>;
export default FilesCarrousel;
