import { type DropEvent, type DropzoneProps } from 'react-dropzone';
export type UseHandleDropzoneProps = {
    onDropAccepted: (file: File, event: DropEvent) => void;
    maxSize?: number;
    disabled?: boolean;
} & Pick<DropzoneProps, 'onDropRejected'>;
declare const useHandleDropzone: ({ onDropAccepted, onDropRejected, maxSize, disabled, }: UseHandleDropzoneProps) => import("react-dropzone").DropzoneState;
export default useHandleDropzone;
