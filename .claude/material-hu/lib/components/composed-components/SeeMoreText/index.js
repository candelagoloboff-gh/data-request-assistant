import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HTMLBody } from '../HTMLBody';
import { Button, Stack, Typography } from '@mui/material';
import { isTextClamped, mapNewLines } from '../../../utils/string';
export const SeeMoreText = ({ seeMoreText, seeLessText, lines = 3, isHtmlText = false, text, buttonSx, typographyProps, }) => {
    const [show, setShow] = useState(false);
    const [isCroped, setIsCroped] = useState(false);
    const textRef = useRef(null);
    const { t } = useTranslation('material_hu_only');
    const handleSeeMore = () => setShow(true);
    const handleSeeLess = () => setShow(false);
    const formatedText = useMemo(() => mapNewLines(text), [text]);
    useEffect(() => {
        if (textRef.current) {
            setIsCroped(isTextClamped(textRef));
        }
    }, [show, text]);
    if (lines < 1) {
        return _jsx(Typography, { ...typographyProps, children: formatedText });
    }
    const renderText = () => {
        const clippedSx = !show
            ? {
                width: '100%',
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: `${lines}`,
                WebkitBoxFlex: '1',
            }
            : {};
        if (isHtmlText) {
            return (_jsx(Typography, { ref: textRef, ...typographyProps, sx: { ...clippedSx, ...typographyProps?.sx }, children: _jsx(HTMLBody, { body: text }) }));
        }
        return (_jsx(Typography, { ref: textRef, ...typographyProps, sx: { ...clippedSx, ...typographyProps?.sx }, children: formatedText }));
    };
    return (_jsxs(Stack, { sx: {
            '.MuiButton-root': {
                p: 0,
                minWidth: 0,
            },
            alignItems: 'flex-start',
            gap: 1,
        }, children: [renderText(), show && (_jsx(Button, { sx: buttonSx, onClick: handleSeeLess, children: seeLessText || t('see_more_text.see_less') })), !show && isCroped && (_jsx(Button, { sx: buttonSx, onClick: handleSeeMore, children: seeMoreText || t('see_more_text.see_more') }))] }));
};
export default SeeMoreText;
