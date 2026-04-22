import { jsx as _jsx } from "react/jsx-runtime";
import { useMemo } from 'react';
import { styled } from '@mui/system';
import { defaultAttributes } from './constants';
const Body = styled('div')(({ theme }) => ({
    fontFamily: 'Arial',
    lineHeight: '1.4',
    color: theme.palette.new.text.neutral.default,
    width: '100%',
    maxWidth: '100%',
    '& p': {
        display: 'block',
        width: '100%',
        wordWrap: 'break-word',
        margin: 'revert',
    },
    '& ul, li, ol': {
        padding: 'revert',
        overflowX: 'revert !important',
    },
    '& iframe, & video, & img': {
        maxWidth: '100% !important',
    },
    '& video, img': {
        height: 'auto !important',
    },
    '& img[style*="width:auto"], video[style*="width:auto"]': {
        width: 'revert-layer !important',
    },
    '[data-type="resizable-media"]': {
        maxWidth: '100% !important',
    },
    '[data-type="resizable-media"] img': {
        width: '100%',
        borderRadius: 8,
    },
    '[data-type="resizable-media"] iframe, [data-type="resizable-media"] video': {
        aspectRatio: '16 / 9',
        maxWidth: '100%',
        verticalAlign: 'middle',
        width: '100%',
        objectFit: 'contain',
        borderRadius: 8,
    },
}));
const applyAttributesToElement = (element, attributes) => {
    Object.entries(attributes).forEach(([key, value]) => {
        if (typeof value === 'string' || typeof value === 'number') {
            element.setAttribute(key, String(value));
        }
        else if (typeof value === 'boolean' && value) {
            element.setAttribute(key, '');
        }
    });
};
export const HTMLBody = ({ body, parserOptions = {}, canDownloadVideo = false, }) => {
    const processedHTML = useMemo(() => {
        const parser = new DOMParser();
        const content = parser.parseFromString(body, 'text/html');
        const allElements = content.querySelectorAll('*');
        allElements.forEach(element => {
            const tagName = element.tagName.toLowerCase();
            // Default anchor attributes
            if (tagName === 'a') {
                applyAttributesToElement(element, defaultAttributes.a);
            }
            // Block video downloads
            if (tagName === 'video' && !canDownloadVideo) {
                applyAttributesToElement(element, defaultAttributes.video);
            }
            // Custom parser options
            if (parserOptions[tagName]) {
                applyAttributesToElement(element, parserOptions[tagName]);
            }
        });
        return content.body.innerHTML;
    }, [body, parserOptions, canDownloadVideo]);
    return _jsx(Body, { dangerouslySetInnerHTML: { __html: processedHTML } });
};
export default HTMLBody;
