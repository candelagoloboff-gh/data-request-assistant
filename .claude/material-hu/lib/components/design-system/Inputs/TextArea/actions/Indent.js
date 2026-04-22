import { jsx as _jsx } from "react/jsx-runtime";
import { IconIndentIncrease } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Indent = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconIndentIncrease, {}), onClick: () => editor.chain().focus().indent().run(), isActive: editor.isActive('indent') }));
};
export default Indent;
