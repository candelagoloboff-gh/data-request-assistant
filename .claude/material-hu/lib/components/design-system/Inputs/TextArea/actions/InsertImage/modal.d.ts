import { type UploaderProps } from '../../../../Uploader/types';
export type InsertImageModalProps = {
    open: boolean;
    onClose: () => void;
    uploaderProps: Omit<UploaderProps, 'onChange' | 'value'>;
};
declare const InsertImageModal: (props: InsertImageModalProps) => import("react").ReactNode;
export default InsertImageModal;
