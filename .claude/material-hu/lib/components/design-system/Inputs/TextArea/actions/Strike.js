import { jsx as _jsx } from "react/jsx-runtime";
import { IconStrikethrough } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Strike = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconStrikethrough, {}), onClick: () => editor.chain().focus().toggleStrike().run(), isActive: editor.isActive('strike'), disabled: !editor.can().chain().focus().toggleStrike().run() }));
};
export default Strike;
