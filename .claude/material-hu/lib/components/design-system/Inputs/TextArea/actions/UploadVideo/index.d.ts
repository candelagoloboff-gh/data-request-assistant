import { type UploadVideoModalProps } from './modal';
export type UploadVideoProps = {
    title: string;
    uploaderProps?: UploadVideoModalProps['uploaderProps'];
};
declare const UploadVideo: ({ title, uploaderProps }: UploadVideoProps) => import("react/jsx-runtime").JSX.Element | null;
export default UploadVideo;
