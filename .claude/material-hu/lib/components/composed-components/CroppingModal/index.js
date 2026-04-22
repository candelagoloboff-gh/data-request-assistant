import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import Button from '@mui/lab/LoadingButton';
import { DialogActions, DialogContent, DialogTitle, Slider, Stack, useMediaQuery, useTheme, } from '@mui/material';
import { IconZoomIn, IconZoomOut } from '@tabler/icons-react';
import useScrollZoom from './hooks/useScrollZoom';
const CroppingModal = ({ file, onClose, onSave, onChangeSlider = () => null, recommendedWidth, recommendedHeight, title, cancelLabel, saveLabel, sliderLabel, round = false, }) => {
    const theme = useTheme();
    const isSmallDevice = useMediaQuery(theme.breakpoints.down('md'));
    const isMobileDevice = useMediaQuery(theme.breakpoints.down('sm'));
    const dimensionIfSmall = isSmallDevice ? 3 : 1.5;
    const dimentionAdjustment = isMobileDevice ? 5 : dimensionIfSmall;
    const adjustedWidth = recommendedWidth / dimentionAdjustment;
    const adjustedHeight = recommendedHeight / dimentionAdjustment;
    const editor = useRef(null);
    const [loading, setLoading] = useState(false);
    const contentRef = useRef(null);
    const { zoom, setZoom } = useScrollZoom(contentRef);
    const handleChangeSlider = (event, newValue) => {
        onChangeSlider(event, newValue);
        setZoom(newValue);
    };
    const handleSave = async (event) => {
        setLoading(true);
        if (!editor?.current)
            return;
        const dataUrl = editor.current.getImageScaledToCanvas().toDataURL();
        const result = await fetch(dataUrl);
        const blob = await result.blob();
        const newFile = new File([blob], file.name, { type: file.type });
        await onSave(newFile, event);
        onClose();
    };
    return (_jsxs(_Fragment, { children: [_jsx(DialogTitle, { sx: { py: 2, px: 3 }, variant: "globalS", fontWeight: "fontWeightSemiBold", children: title }), _jsx(DialogContent, { ref: contentRef, sx: {
                    px: 3,
                    '&.MuiDialogContent-root': {
                        py: 2,
                    },
                }, children: _jsxs(Stack, { sx: { gap: 3 }, children: [_jsx(AvatarEditor, { ref: editor, image: file, width: recommendedWidth, height: recommendedHeight, border: 30, scale: 1 + zoom / 100, style: {
                                display: 'block',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                width: adjustedWidth,
                                height: adjustedHeight,
                            }, borderRadius: round ? Infinity : 0, color: [0, 0, 0, 0.7] }), _jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: 2,
                            }, children: [_jsx(IconZoomOut, {}), _jsx(Slider, { "aria-label": sliderLabel, value: zoom, onChange: handleChangeSlider }), _jsx(IconZoomIn, {})] })] }) }), _jsxs(DialogActions, { sx: {
                    padding: 3,
                    borderTop: `1px solid ${theme.palette.border?.neutralBorder}`,
                }, children: [_jsx(Button, { onClick: onClose, children: cancelLabel }), _jsx(Button, { variant: "contained", onClick: handleSave, loading: loading, children: saveLabel })] })] }));
};
export default CroppingModal;
