import { jsx as _jsx } from "react/jsx-runtime";
import { IconListNumbers } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const OrderedList = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconListNumbers, {}), onClick: () => editor.chain().focus().toggleOrderedList().run(), isActive: editor.isActive('orderedList') }));
};
export default OrderedList;
