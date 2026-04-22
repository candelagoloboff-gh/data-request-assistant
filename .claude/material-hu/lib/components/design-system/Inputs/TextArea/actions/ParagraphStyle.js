import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import MenuActionButton from '../components/MenuActionButton';
import { useTextArea } from '../context';
const getHeadingStyle = (theme, level) => {
    switch (level) {
        case '1':
            return theme.typography.h5;
        case '2':
            return theme.typography.subtitle1;
        case '3':
            return theme.typography.body1;
        case '4':
            return theme.typography.body2;
        default:
            return theme.typography.body1;
    }
};
const options = [
    { label: 'h1', value: '1' },
    { label: 'h2', value: '2' },
    { label: 'h3', value: '3' },
    { label: 'h4', value: '4' },
    { label: 'paragraph', value: '0' },
];
const ParagraphStyle = () => {
    const { editor } = useTextArea();
    const selectedLevel = editor?.getAttributes('heading')?.level || null;
    const { t } = useTranslation('material_hu_only');
    const theme = useTheme();
    if (!editor) {
        return null;
    }
    const selectHeading = (selectedValue) => {
        if (selectedValue === '0' || !selectedValue) {
            editor.chain().focus().setParagraph().run();
        }
        else {
            editor
                .chain()
                .focus()
                .toggleHeading({ level: parseInt(selectedValue) })
                .run();
        }
    };
    return (_jsx(MenuActionButton, { options: options.map(option => ({
            label: t(`top_bar_rich_text_editor.${option.label}`).split(' ')[0],
            value: option.value,
        })), onOptionSelect: selectHeading, selectedOption: selectedLevel ? selectedLevel.toString() : '0', optionRenderer: ({ label, value }) => {
            const style = getHeadingStyle(theme, value);
            return _jsx(Typography, { sx: { ...style }, children: label });
        }, ariaLabel: t('top_bar_rich_text_editor.headings'), ariaControls: "paragraph-styles-menu" }));
};
export default ParagraphStyle;
