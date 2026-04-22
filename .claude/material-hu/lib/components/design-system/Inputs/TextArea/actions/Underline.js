import { jsx as _jsx } from "react/jsx-runtime";
import { IconUnderline } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Underline = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconUnderline, {}), onClick: () => editor.chain().focus().toggleUnderline().run(), isActive: editor.isActive('underline'), disabled: !editor.can().chain().focus().toggleUnderline().run() }));
};
export default Underline;
