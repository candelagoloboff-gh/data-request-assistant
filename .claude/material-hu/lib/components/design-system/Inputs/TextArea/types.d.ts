import { type ReactNode } from 'react';
import { type ControllerProps } from 'react-hook-form';
import { type StackProps } from '@mui/material';
import { type Slice } from '@tiptap/pm/model';
import { type Editor, type EditorOptions } from '@tiptap/react';
import { type EmbedHTMLProps } from './actions/EmbedHTML/types';
import { type EmbedVideoProps } from './actions/EmbedVideo';
import { type InsertImageProps } from './actions/InsertImage';
import { type TableProps } from './actions/Table/types';
import { type UploadVideoProps } from './actions/UploadVideo';
export type TextAreaSlotProps = {
    /** Props forwarded to the InsertImage action */
    insertImage: Partial<InsertImageProps>;
    /** Props forwarded to the EmbedVideo action */
    embedVideo: Partial<EmbedVideoProps>;
    /** Props forwarded to the UploadVideo action */
    uploadVideo: Partial<UploadVideoProps>;
    /** Props forwarded to the EmbedHTML action */
    embedHTML: Partial<EmbedHTMLProps>;
    /** Props forwarded to the Table action */
    table: Partial<TableProps>;
};
export type TextAreaProps = Omit<TextAreaProviderProps, 'children'> & TextAreaWrapperProps;
export type ActionId = 'bold' | 'italic' | 'underline' | 'strike' | 'code' | 'blockquote' | 'textColor' | 'highlightColor' | 'clearFormat' | 'fontFamily' | 'fontSize' | 'paragraphStyle' | 'alignLeft' | 'alignCenter' | 'alignRight' | 'alignJustify' | 'orderedList' | 'unorderedList' | 'indent' | 'outdent' | 'insertEmoji' | 'insertLink' | 'insertImage' | 'embedVideo' | 'embedHTML' | 'uploadVideo' | 'table';
export type ActionsBarProps = {
    /** Reduces the toolbar to a minimal set of formatting options */
    simplifyEditor?: boolean;
    /** Toggles visibility of individual toolbar action buttons */
    actions?: {
        /** Shows or hides the table insertion button */
        table?: boolean;
        /** Shows or hides the embed HTML button */
        embedHTML?: boolean;
        /** Shows or hides the emoji picker button */
        insertEmoji?: boolean;
    };
    /** When provided, renders only the specified actions in a single flat row */
    visibleActions?: ActionId[];
};
export type TextAreaWrapperProps = ActionsBarProps & {
    /** Applies error styling to the editor wrapper */
    error?: boolean;
    /** Error message shown below the editor */
    errorText?: string;
    /** Helper text shown below the editor */
    helperText?: string;
    /** Label displayed above the editor */
    label?: string;
    /** Applies success styling to the editor wrapper */
    success?: boolean;
    /** Custom styles applied to the root element */
    sx?: StackProps['sx'];
};
export type TextAreaProviderProps = {
    /** Placeholder text shown when the editor is empty */
    placeholder?: string;
    /** Current HTML content of the editor */
    content: string;
    /** Callback fired when the editor content changes */
    onChange?: (content: string) => void;
    /** Callback fired when the editor loses focus */
    onBlur?: EditorOptions['onBlur'];
    /** Callback fired when the editor gains focus */
    onFocus?: EditorOptions['onFocus'];
    /** Content rendered inside the editor context */
    children: ReactNode;
    /** Prevents editing the content */
    disabled?: boolean;
    /** Custom handler for paste events in the editor */
    handlePaste?: (e: ClipboardEvent, slice: Slice) => void;
    /** Custom handler for file drop events in the editor */
    handleDrop?: (editor: Editor, files: File[], pos: number) => void;
    /** Props forwarded to toolbar action slot components */
    slotProps?: Partial<TextAreaSlotProps>;
    /** When true, renders the editor immediately without deferring */
    immediatelyRender?: boolean;
};
export type TextAreaContextType = {
    /** Tiptap editor instance provided to child components */
    editor?: Editor | null;
    /** Slot props passed through context to toolbar actions */
    slotProps?: Partial<TextAreaSlotProps>;
};
export type FormTextAreaProps = {
    /** Field name used by react-hook-form */
    name: string;
    /** Props forwarded to the TextArea component */
    textAreaProps?: Partial<TextAreaProps>;
    /** Validation rules for react-hook-form */
    rules?: ControllerProps['rules'];
};
export declare enum NodeTypes {
    TAG = "tag",
    TEXT = "text"
}
