import { type UploaderProps } from '../../../../design-system/Uploader';
import { type FileType } from '../../../../design-system/Uploader/types';
import { type FileAsset, type FormFile } from '../../../../../types/attachments';
export type InputFileProps = {
    name: string;
    disabled?: boolean;
    readOnly?: boolean;
    initialFiles: FileAsset[];
    uploadFn?: (files: FormFile[]) => Promise<FileAsset[]>;
    acceptedTypes?: FileType[];
    fileSizeLimit?: number;
    maxFiles?: number;
    slotProps?: {
        uploader?: Partial<UploaderProps>;
    };
};
declare const InputFile: ({ name, disabled, initialFiles, readOnly, uploadFn, acceptedTypes, fileSizeLimit, maxFiles, slotProps, }: InputFileProps) => import("react/jsx-runtime").JSX.Element | null;
export default InputFile;
