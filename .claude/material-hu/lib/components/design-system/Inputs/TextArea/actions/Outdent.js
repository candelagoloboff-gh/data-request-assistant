import { jsx as _jsx } from "react/jsx-runtime";
import { IconIndentDecrease } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Outdent = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconIndentDecrease, {}), onClick: () => editor.chain().focus().outdent().run(), isActive: editor.isActive('outdent') }));
};
export default Outdent;
