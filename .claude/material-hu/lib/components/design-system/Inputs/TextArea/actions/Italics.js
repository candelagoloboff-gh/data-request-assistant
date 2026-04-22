import { jsx as _jsx } from "react/jsx-runtime";
import { IconItalic } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Italics = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconItalic, {}), onClick: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic'), disabled: !editor.can().chain().focus().toggleItalic().run() }));
};
export default Italics;
