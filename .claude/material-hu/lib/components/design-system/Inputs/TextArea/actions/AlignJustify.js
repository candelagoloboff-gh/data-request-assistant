import { jsx as _jsx } from "react/jsx-runtime";
import { IconAlignJustified } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const AlignJustify = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconAlignJustified, {}), onClick: () => editor.chain().focus().toggleTextAlign('justify').run(), isActive: editor.isActive({ textAlign: 'justify' }) }));
};
export default AlignJustify;
