import { type FC, type MouseEvent } from 'react';
export declare enum DocumentItemTypes {
    PDF = "pdf",
    FILE = "file"
}
export type DocumentItemProps = {
    name?: string;
    size?: string;
    url?: string;
    openLabel?: string;
    deleteLabel?: string;
    onDelete?: (event: MouseEvent<HTMLButtonElement>) => void;
    type?: DocumentItemTypes;
};
/**
 * @deprecated Use HuFileCard instead
 */
export declare const DocumentItem: FC<DocumentItemProps>;
export default DocumentItem;
