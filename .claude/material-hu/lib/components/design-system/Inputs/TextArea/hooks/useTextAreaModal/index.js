import { useCallback } from 'react';
import { useTextArea } from '../../context';
/**
 * Provides the editor instance and a close function that restores
 * focus to the editor after the modal unmounts.
 */
const useTextAreaModal = ({ onClose }) => {
    const { editor } = useTextArea();
    const close = useCallback(() => {
        onClose();
        setTimeout(() => editor?.commands.focus(), 0);
    }, [onClose, editor]);
    return { editor, close };
};
export default useTextAreaModal;
