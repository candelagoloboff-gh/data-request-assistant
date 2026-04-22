import { type InsertImageModalProps } from './modal';
export type InsertImageProps = {
    title: string;
    uploaderProps?: InsertImageModalProps['uploaderProps'];
};
declare const InsertImage: ({ title, uploaderProps }: InsertImageProps) => import("react/jsx-runtime").JSX.Element | null;
export default InsertImage;
