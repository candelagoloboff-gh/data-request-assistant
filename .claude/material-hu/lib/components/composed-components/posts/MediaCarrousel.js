import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import Carousel from 'react-material-ui-carousel';
import { Stack, useTheme } from '@mui/material';
import { FileTypes } from '../../../utils/files';
export const MediaCarrousel = ({ media, pauseVideosOnChange = true, }) => {
    const { palette } = useTheme();
    const videoRefs = useRef([]);
    if (!media?.length)
        return null;
    useEffect(() => {
        videoRefs.current = videoRefs.current.slice(0, media.length);
    }, [media]);
    const pauseVideos = () => {
        videoRefs.current.forEach(videoRef => {
            if (videoRef) {
                videoRef.pause();
            }
        });
    };
    const onHandleChange = () => {
        if (pauseVideosOnChange) {
            pauseVideos();
        }
    };
    return (_jsx(Carousel, { indicators: media.length > 1, onChange: onHandleChange, navButtonsAlwaysVisible: true, navButtonsAlwaysInvisible: media.length === 1, fullHeightHover: false, cycleNavigation: false, height: 400, autoPlay: false, indicatorIconButtonProps: {
            style: {
                color: palette.new.background.layout.brand,
            },
        }, activeIndicatorIconButtonProps: {
            style: {
                color: palette.base?.blueBrand[400],
            },
        }, children: media.map((item, index) => {
            let content = null;
            switch (item.attachment.type) {
                case FileTypes.IMAGE:
                    content = (_jsx(Stack, { component: "img", src: item.attachment.url, alt: item.attachment.name, sx: {
                            height: '100%',
                            mx: 'auto',
                        } }, item.id));
                    break;
                case FileTypes.VIDEO:
                    content = (_jsx(Stack, { ref: el => {
                            videoRefs.current[index] = el;
                        }, component: "video", src: item.attachment.url, sx: {
                            height: '100%',
                            mx: 'auto',
                            cursor: 'pointer',
                        }, controls: true }, item.id));
                    break;
                default:
                    content = null;
                    break;
            }
            return content;
        }) }));
};
export default MediaCarrousel;
