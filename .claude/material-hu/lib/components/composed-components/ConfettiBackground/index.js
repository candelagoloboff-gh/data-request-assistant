import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Fade, Stack } from '@mui/material';
import { getConfettiColor } from '../../../utils/colors';
import Pills from '../../design-system/Pills';
import ConfettiSvg from './components/ConfettiSvg';
export default function ConfettiBackground({ bgColor, coverPicture, showConfetti, showPoints, points, stylesOptions = {}, cropHeight, cropWidth, }) {
    const { t } = useTranslation('material_hu_only');
    const { confettiColor } = getConfettiColor(bgColor);
    const showPointsPill = Boolean(points && points !== '0' && showPoints);
    const pointsPillLabel = t('hu_confetti_background.points_label', {
        count: Math.abs(parseInt(points)),
        symbol: parseInt(points) > 0 ? '+' : '-',
    });
    const coverPictureSrc = useMemo(() => {
        if (!coverPicture)
            return '';
        const isFile = coverPicture instanceof File;
        return isFile ? URL.createObjectURL(coverPicture) : coverPicture;
    }, [coverPicture]);
    const { borderRadius = 1, height = 236, maxWidth = 750 } = stylesOptions;
    const isCustomFile = cropHeight && cropWidth && coverPicture;
    const minHeight = isCustomFile ? cropHeight : height;
    const aspectRatio = isCustomFile ? cropWidth / cropHeight : 'auto';
    return (_jsx(Stack, { sx: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
        }, children: _jsxs(Stack, { sx: {
                position: 'relative',
                width: '100%',
                maxWidth,
                minHeight,
                borderRadius,
                alignSelf: 'center',
            }, children: [_jsx(Stack, { sx: {
                        zIndex: 1,
                        minHeight,
                        aspectRatio,
                        borderRadius,
                        backgroundColor: bgColor,
                    } }), coverPictureSrc && (_jsx(Stack, { sx: {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 2,
                        width: '100%',
                        height: '100%',
                        '& img': {
                            zIndex: 100,
                            width: '100%',
                            height: '100%',
                            borderRadius,
                        },
                    }, children: _jsx("img", { src: coverPictureSrc, alt: "" }) })), showConfetti && !coverPictureSrc && (_jsx(Fade, { in: showConfetti, timeout: 300, children: _jsx(Stack, { sx: {
                            position: 'absolute',
                            inset: 0,
                            zIndex: 3,
                            width: '100%',
                            height: '100%',
                        }, children: _jsx(ConfettiSvg, { color: confettiColor }) }) })), showPointsPill && (_jsx(Fade, { in: showPointsPill, timeout: 300, children: _jsx(Stack, { sx: { position: 'absolute', top: 12, right: 12, zIndex: 4 }, children: _jsx(Pills, { sx: { textTransform: 'lowercase' }, type: "neutral", hasIcon: false, label: pointsPillLabel }) }) }))] }) }));
}
