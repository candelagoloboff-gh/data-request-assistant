import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import CroppingModal from '../CroppingModal';
import { useModal } from '../../../hooks/useModal';
import { DEFAULT_CROP_HEIGHT, DEFAULT_CROP_WIDTH, DEFAULT_MENU_WIDTH, DEFAULT_TABS, } from './constants';
import IconPickerButton from './IconPickerButton';
import IconPickerMenu from './IconPickerMenu';
const IconPicker = ({ value, onChange, imageOptions = [], onUpload, text, tabs = DEFAULT_TABS, disabled = false, renderIcon, sx, slotProps, }) => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const handleToggle = () => {
        if (!disabled)
            setOpen(prev => !prev);
    };
    const handleClose = () => setOpen(false);
    const handleSelect = (icon) => {
        onChange(icon);
        handleClose();
    };
    const handleCropSave = (file, _event) => {
        onUpload?.(file);
    };
    const { modal: croppingModal, showModal: showCroppingModal, closeModal, } = useModal(CroppingModal, { fullWidth: true, maxWidth: 'md', sx: { zIndex: 1600 } }, {
        onSave: handleCropSave,
        onClose: () => closeModal(),
        recommendedWidth: DEFAULT_CROP_WIDTH,
        recommendedHeight: DEFAULT_CROP_HEIGHT,
        title: text.cropTitle,
        saveLabel: text.cropSave,
        cancelLabel: text.cropCancel,
    });
    const handleFileUpload = (file) => {
        showCroppingModal({ file });
    };
    return (_jsxs(_Fragment, { children: [croppingModal, _jsx(IconPickerButton, { value: value, open: open, onClick: handleToggle, buttonRef: anchorRef, disabled: disabled, sx: sx, renderIcon: renderIcon }), _jsx(IconPickerMenu, { open: open, anchorEl: anchorRef.current, onClose: handleClose, onSelect: handleSelect, imageOptions: imageOptions, selectedValue: value, onUpload: onUpload ? handleFileUpload : undefined, width: slotProps?.menu?.width ?? DEFAULT_MENU_WIDTH, text: text, tabs: tabs })] }));
};
export default IconPicker;
