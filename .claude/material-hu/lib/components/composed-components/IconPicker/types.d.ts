import { type ReactNode } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type SxProps, type Theme } from '@mui/material';
import { type IconInterface } from '../../../types/icons';
/** A selectable image option displayed in the image grid. */
export type ImageIconOption = {
    /** Unique identifier. */
    id: number | string;
    /** Display name (used for selection matching). */
    name: string;
    /** Image URL. */
    source: string;
};
/** Tab identifiers for the picker menu. */
export declare enum IconPickerTab {
    ICONS = "icons",
    EMOJIS = "emojis"
}
/** Translated strings for IconPicker. Provided by the host app. */
export type IconPickerText = {
    /** Tab label for the icons grid. */
    iconsTab: string;
    /** Tab label for the emoji picker. */
    emojisTab: string;
    /** Title shown in the cropping modal. */
    cropTitle: string;
    /** Save button in the cropping modal. */
    cropSave: string;
    /** Cancel button in the cropping modal. */
    cropCancel: string;
};
/** Props for the trigger button subcomponent. */
export type IconPickerButtonProps = {
    /** Currently selected icon. */
    value: IconInterface | null;
    /** Whether the menu is open. */
    open: boolean;
    /** Toggle handler. */
    onClick: () => void;
    /** Ref forwarded to the button element (used as Popper anchor). */
    buttonRef: React.Ref<HTMLButtonElement>;
    /** Whether the button is disabled. */
    disabled?: boolean;
    /** Override the button styles. */
    sx?: SxProps<Theme>;
    /** Custom render for the icon display. */
    renderIcon?: (icon: IconInterface) => ReactNode;
};
/** Props for the image grid subcomponent. */
export type ImageGridProps = {
    /** Available image icons. */
    options: ImageIconOption[];
    /** Currently selected image source URL (for highlighting). */
    selectedSource?: string;
    /** Called when an image icon is selected. */
    onSelect: (icon: IconInterface) => void;
    /** Called with the raw File when the user picks an image to upload. Opens cropping if provided. */
    onUpload?: (file: File) => void;
    /** Grid container width in px. */
    width?: number;
};
/** Props for the picker menu (Popper with tabs). */
export type IconPickerMenuProps = {
    /** Whether the menu is open. */
    open: boolean;
    /** Anchor element for the Popper. */
    anchorEl: HTMLElement | null;
    /** Close handler. */
    onClose: () => void;
    /** Called when an icon is selected (image or emoji). */
    onSelect: (icon: IconInterface) => void;
    /** Image options for the icons tab. */
    imageOptions: ImageIconOption[];
    /** Currently selected icon value. */
    selectedValue: IconInterface | null;
    /** Called with raw File for upload. */
    onUpload?: (file: File) => void;
    /** Menu width in px. */
    width?: number;
    /** Translated strings (required, provided by host app). */
    text: IconPickerText;
    /** Visible tabs. Defaults to both. */
    tabs?: IconPickerTab[];
};
/**
 * Props for the main IconPicker component (controlled).
 *
 * Renders a trigger button showing the current icon and a dropdown menu
 * with tabs for image icons and emojis. Optionally supports uploading
 * custom icons with a built-in cropping step.
 */
export type IconPickerProps = {
    /** Currently selected icon. */
    value: IconInterface | null;
    /** Called when the selection changes. */
    onChange: (icon: IconInterface) => void;
    /** Available image icon options for the images tab. */
    imageOptions?: ImageIconOption[];
    /**
     * Called with a cropped File when the user uploads a custom icon.
     * The file has already been cropped to a 1:1 ratio by the built-in CroppingModal.
     * The consumer is responsible for the actual upload (API call, etc.).
     */
    onUpload?: (file: File) => void;
    /** Translated strings (required, provided by host app). */
    text: IconPickerText;
    /** Which tabs to show. Defaults to `['icons', 'emojis']`. */
    tabs?: IconPickerTab[];
    /** Whether the picker is disabled. */
    disabled?: boolean;
    /** Custom render for the icon in the trigger button. */
    renderIcon?: (icon: IconInterface) => ReactNode;
    /** Styles applied to the trigger button (the component's visible root element). */
    sx?: SxProps<Theme>;
    /** Props forwarded to internal subcomponents. */
    slotProps?: {
        /** Override props for the dropdown menu. */
        menu?: {
            /** Menu width in px. Default `400`. */
            width?: number;
        };
    };
};
/**
 * Props for the form-integrated IconPicker.
 * Wraps IconPicker with a react-hook-form Controller.
 */
export type FormIconPickerProps = {
    /** Form field name. */
    name: string;
    /** Props passed to the underlying IconPicker (value/onChange managed by the form). */
    inputProps: Omit<IconPickerProps, 'value' | 'onChange'>;
    /** Validation rules for the Controller. */
    rules?: ControllerProps['rules'];
};
