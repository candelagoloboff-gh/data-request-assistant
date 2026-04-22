import { jsx as _jsx } from "react/jsx-runtime";
import { IconAlignLeft } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const AlignLeft = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconAlignLeft, {}), onClick: () => editor.chain().focus().toggleTextAlign('left').run(), isActive: editor.isActive({ textAlign: 'left' }) }));
};
export default AlignLeft;
