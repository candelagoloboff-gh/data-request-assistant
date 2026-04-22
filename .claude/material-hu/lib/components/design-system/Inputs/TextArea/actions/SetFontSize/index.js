import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import MenuActionButton from '../../components/MenuActionButton';
import { useTextArea } from '../../context';
import { fontSizeOptions } from './constants';
const SetFontSize = () => {
    const { editor } = useTextArea();
    const { t } = useTranslation('material_hu_only');
    if (!editor) {
        return null;
    }
    const currentFontSize = editor.getAttributes('textStyle').fontSize;
    return (_jsx(MenuActionButton, { options: fontSizeOptions.map(option => ({
            label: option.label,
            value: option.value,
        })), onOptionSelect: value => editor.chain().focus().setFontSize(value).run(), selectedOption: currentFontSize || '12pt', optionRenderer: ({ label, value }) => (_jsx(Typography, { sx: { fontSize: value }, children: label })), ariaLabel: t('top_bar_rich_text_editor.font_size'), ariaControls: "font-size-menu" }));
};
export default SetFontSize;
