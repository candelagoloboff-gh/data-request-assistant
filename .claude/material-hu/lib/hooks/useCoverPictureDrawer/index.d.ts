import { type CoverPictureDrawerProps, type UseCoverPictureDrawerProps } from './types';
/** Provides a drawer for uploading and cropping a cover picture. */
export declare const useCoverPictureDrawer: ({ defaultSrc: src, loading, }?: UseCoverPictureDrawerProps) => {
    coverPictureDrawer: import("react/jsx-runtime").JSX.Element;
    showCoverPictureDrawer: (props: Partial<CoverPictureDrawerProps>) => void;
    closeCoverPictureDrawer: () => void;
};
export default useCoverPictureDrawer;
