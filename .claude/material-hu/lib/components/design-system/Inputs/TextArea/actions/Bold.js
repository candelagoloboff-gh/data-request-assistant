import { jsx as _jsx } from "react/jsx-runtime";
import { IconBold } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Bold = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconBold, {}), onClick: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold'), disabled: !editor.can().chain().focus().toggleBold().run() }));
};
export default Bold;
