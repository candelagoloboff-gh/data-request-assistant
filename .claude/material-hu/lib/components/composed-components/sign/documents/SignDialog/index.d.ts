import { type FileAsset, type FormFile } from '../../../../../types/attachments';
export type SignProps = {
    disabled?: boolean;
    onClose?: () => void;
    onSave?: (signature: string | undefined) => void;
    title?: string;
    loading?: boolean;
    uploadFn?: (files: FormFile[]) => Promise<FileAsset[]>;
    minStrokes?: number;
};
declare const SignDialog: ({ onClose, onSave, title, loading, disabled, minStrokes, }: SignProps) => import("react/jsx-runtime").JSX.Element;
export default SignDialog;
