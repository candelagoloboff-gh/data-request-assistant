import { jsx as _jsx } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import SignComponent from 'react-signature-canvas';
import HuCardContainer from '../../../../design-system/CardContainer';
import HuDialog from '../../../../design-system/Dialog';
const SignDialog = ({ onClose, onSave, title, loading, disabled = false, minStrokes = 1, }) => {
    const { t } = useTranslation('material_hu_only');
    const signRef = useRef(null);
    const [hasMinimumStrokes, setHasMinimumStrokes] = useState(false);
    const handleSave = () => {
        const signature = signRef.current?.toDataURL();
        onSave?.(signature);
    };
    const handleClose = () => {
        onClose?.();
        signRef.current?.clear();
        setHasMinimumStrokes(false);
    };
    const onHandleEnd = () => {
        if (signRef.current) {
            const data = signRef.current.toData();
            const totalPoints = data.reduce((acc, stroke) => acc + stroke.length, 0);
            setHasMinimumStrokes(totalPoints >= minStrokes);
        }
    };
    const disabledToSign = !hasMinimumStrokes;
    return (_jsx(HuDialog, { onClose: handleClose, title: title || t('sign_dialog.title'), primaryButtonProps: {
            children: t('sign_dialog.sign'),
            variant: 'primary',
            onClick: handleSave,
            disabled: disabledToSign,
            loading,
        }, secondaryButtonProps: {
            children: t('sign_dialog.cancel'),
            variant: 'secondary',
            onClick: handleClose,
        }, body: _jsx(HuCardContainer, { padding: 0, sx: {
                width: '99%',
                backgroundColor: ({ palette }) => palette.new.background.layout.default,
                opacity: disabled ? 0.5 : 1,
                pointerEvents: disabled ? 'none' : 'auto',
            }, children: _jsx(SignComponent, { ref: signRef, onEnd: onHandleEnd, canvasProps: {
                    style: {
                        minHeight: 215,
                        width: '100%',
                        height: '100%',
                    },
                } }) }) }));
};
export default SignDialog;
