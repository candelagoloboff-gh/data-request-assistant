import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import MenuActionButton from '../../components/MenuActionButton';
import { useTextArea } from '../../context';
import { fontFamilyOptions } from './constants';
const SetFontFamily = () => {
    const { editor } = useTextArea();
    const { t } = useTranslation('material_hu_only');
    if (!editor) {
        return null;
    }
    const currentFontFamily = editor.getAttributes('textStyle').fontFamily;
    return (_jsx(MenuActionButton, { options: fontFamilyOptions.map(option => ({
            label: option.label,
            value: option.value,
        })), onOptionSelect: value => editor.chain().focus().setFontFamily(value).run(), selectedOption: currentFontFamily || fontFamilyOptions[0].value, optionRenderer: ({ label, value }) => (_jsx(Typography, { sx: { fontFamily: value }, children: label })), ariaLabel: t('top_bar_rich_text_editor.font_family'), ariaControls: "font-family-menu" }));
};
export default SetFontFamily;
