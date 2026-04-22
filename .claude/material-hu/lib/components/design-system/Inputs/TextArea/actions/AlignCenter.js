import { jsx as _jsx } from "react/jsx-runtime";
import { IconAlignCenter } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const AlignCenter = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconAlignCenter, {}), onClick: () => editor.chain().focus().toggleTextAlign('center').run(), isActive: editor.isActive({ textAlign: 'center' }) }));
};
export default AlignCenter;
