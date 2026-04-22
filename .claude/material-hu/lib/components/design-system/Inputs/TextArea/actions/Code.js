import { jsx as _jsx } from "react/jsx-runtime";
import { IconCode } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const Code = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconCode, {}), onClick: () => editor.chain().focus().toggleCode().run(), isActive: editor.isActive('code'), disabled: editor.isActive('link') }));
};
export default Code;
