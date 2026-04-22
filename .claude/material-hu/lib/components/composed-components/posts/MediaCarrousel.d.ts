import { type FC } from 'react';
import { type CompleteFile } from '../../../types/attachments';
type MediaCarrouselProps = {
    media?: CompleteFile[];
    pauseVideosOnChange?: boolean;
};
export declare const MediaCarrousel: FC<MediaCarrouselProps>;
export default MediaCarrousel;
