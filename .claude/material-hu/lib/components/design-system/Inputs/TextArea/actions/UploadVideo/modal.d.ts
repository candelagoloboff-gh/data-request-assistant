import { type UploaderProps } from '../../../../Uploader/types';
export type UploadVideoModalProps = {
    open: boolean;
    onClose: () => void;
    uploaderProps: Omit<UploaderProps, 'onChange' | 'value'>;
};
declare const UploadVideoModal: (props: UploadVideoModalProps) => import("react").ReactNode;
export default UploadVideoModal;
