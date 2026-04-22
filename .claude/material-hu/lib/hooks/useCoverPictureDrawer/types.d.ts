import { type CoverPictureUploaderProps, type CoverPictureUploaderValue } from '../../components/composed-components/CoverPictureUploader/types';
/** Represents the data submitted from the cover picture drawer. */
export type CoverPictureData = {
    /** The selected cover picture value containing cropped and original variants. */
    coverPicture: CoverPictureUploaderValue;
};
/** Props for the internal CoverPictureDrawer component rendered inside the drawer. */
export type CoverPictureDrawerProps = {
    /** Callback fired when the user cancels the drawer. */
    onCancel?: () => void;
    /** Callback fired when the user confirms the selection, receiving the cover picture data. */
    onConfirm?: (values: CoverPictureData) => void;
    /** Default image source URL used as the initial preview. */
    defaultSrc: string;
    /** Props forwarded to inner sub-components. */
    slotProps?: {
        /** Partial props forwarded to the CoverPictureUploader component. */
        uploader?: Partial<CoverPictureUploaderProps>;
    };
};
/** Props for the `useCoverPictureDrawer` hook. */
export type UseCoverPictureDrawerProps = {
    /** Default image source URL. When `null` or `undefined`, no initial preview is shown. */
    defaultSrc?: string | null;
    /** Whether the drawer should display a loading state. */
    loading?: boolean;
};
