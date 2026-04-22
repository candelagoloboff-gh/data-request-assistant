import { jsx as _jsx } from "react/jsx-runtime";
import { IconAlignRight } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const AlignRight = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconAlignRight, {}), onClick: () => editor.chain().focus().toggleTextAlign('right').run(), isActive: editor.isActive({ textAlign: 'right' }) }));
};
export default AlignRight;
