import { jsx as _jsx } from "react/jsx-runtime";
import { IconBlockquote } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const BlockQuote = ({ title }) => {
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    const handleClick = () => {
        if (editor.isActive('bulletList')) {
            editor.chain().focus().toggleBulletList().run();
            editor.chain().focus().toggleBlockquote().run();
            editor.chain().focus().toggleBulletList().run();
        }
        else if (editor.isActive('orderedList')) {
            editor.chain().focus().toggleOrderedList().run();
            editor.chain().focus().toggleBlockquote().run();
            editor.chain().focus().toggleOrderedList().run();
        }
        else {
            editor.chain().focus().toggleBlockquote().run();
        }
    };
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconBlockquote, {}), onClick: handleClick, isActive: editor.isActive('blockquote'), disabled: !editor.can().chain().focus().toggleBlockquote().run() }));
};
export default BlockQuote;
