import { jsx as _jsx } from "react/jsx-runtime";
import { IconList } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const UnorderedList = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconList, {}), onClick: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList') }));
};
export default UnorderedList;
