import { type UseTextAreaModalProps } from './types';
/**
 * Provides the editor instance and a close function that restores
 * focus to the editor after the modal unmounts.
 */
declare const useTextAreaModal: ({ onClose }: UseTextAreaModalProps) => {
    editor: import("@tiptap/core").Editor | null | undefined;
    close: () => void;
};
export default useTextAreaModal;
