import { useEffect } from 'react';
import { useTextArea } from '../context';
const useUpdatePlaceholder = (disabled) => {
    const { editor } = useTextArea();
    // Update the editable state when disabled changes
    useEffect(() => {
        if (editor) {
            editor.setEditable(!disabled);
        }
    }, [disabled, editor]);
};
export default useUpdatePlaceholder;
