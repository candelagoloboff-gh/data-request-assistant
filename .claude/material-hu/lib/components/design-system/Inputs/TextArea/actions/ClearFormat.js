import { jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import { IconClearFormatting } from '@tabler/icons-react';
import ActionButton from '../components/ActionButton';
import { useTextArea } from '../context';
const ClearFormat = ({ title }) => {
    const anchorRef = useRef(null);
    const { editor } = useTextArea();
    if (!editor) {
        return null;
    }
    return (_jsx(ActionButton, { title: title, icon: _jsx(IconClearFormatting, {}), onClick: () => editor.chain().focus().clearNodes().unsetAllMarks().run(), isActive: false, ref: anchorRef }));
};
export default ClearFormat;
