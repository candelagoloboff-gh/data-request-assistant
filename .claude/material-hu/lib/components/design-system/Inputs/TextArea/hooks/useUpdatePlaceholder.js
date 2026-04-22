import { useEffect } from 'react';
import { useTextArea } from '../context';
const useUpdatePlaceholder = (placeholder) => {
    const { editor } = useTextArea();
    useEffect(() => {
        if (editor) {
            editor.extensionManager.extensions.filter(extension => extension.name === 'placeholder')[0].options.placeholder = placeholder;
        }
    }, [editor, placeholder]);
};
export default useUpdatePlaceholder;
