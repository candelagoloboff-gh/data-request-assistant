import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { Divider, Stack, useTheme } from '@mui/material';
import AlignCenter from '../actions/AlignCenter';
import AlignJustify from '../actions/AlignJustify';
import AlignLeft from '../actions/AlignLeft';
import AlignRight from '../actions/AlignRight';
import BlockQuote from '../actions/BlockQuote';
import Bold from '../actions/Bold';
import ClearFormat from '../actions/ClearFormat';
import Code from '../actions/Code';
import EmbedHTML from '../actions/EmbedHTML';
import EmbedVideo from '../actions/EmbedVideo';
import HighlightColor from '../actions/HighlightColor';
import Indent from '../actions/Indent';
import InsertEmoji from '../actions/InsertEmoji';
import InsertImage from '../actions/InsertImage';
import InsertLink from '../actions/InsertLink';
import Italics from '../actions/Italics';
import OrderedList from '../actions/OrderedList';
import Outdent from '../actions/Outdent';
import ParagraphStyle from '../actions/ParagraphStyle';
import SetFontFamily from '../actions/SetFontFamily';
import SetFontSize from '../actions/SetFontSize';
import Strike from '../actions/Strike';
import Table from '../actions/Table';
import TextColor from '../actions/TextColor';
import Underline from '../actions/Underline';
import UnorderedList from '../actions/UnorderedList';
import UploadVideo from '../actions/UploadVideo';
import { useTextArea } from '../context';
import ActionDivider from './ActionDivider';
const ActionsBar = ({ simplifyEditor, actions = {}, visibleActions, }) => {
    const { editor, slotProps } = useTextArea();
    const theme = useTheme();
    const { t } = useTranslation('material_hu_only');
    if (!editor || !editor.isEditable) {
        return null;
    }
    const { table, embedHTML, insertEmoji } = actions;
    if (visibleActions) {
        const actionComponentMap = {
            bold: _jsx(Bold, { title: t('top_bar_rich_text_editor.bold') }),
            italic: _jsx(Italics, { title: t('top_bar_rich_text_editor.italic') }),
            underline: _jsx(Underline, { title: t('top_bar_rich_text_editor.underline') }),
            strike: _jsx(Strike, { title: t('top_bar_rich_text_editor.strike') }),
            code: _jsx(Code, { title: t('top_bar_rich_text_editor.code') }),
            blockquote: (_jsx(BlockQuote, { title: t('top_bar_rich_text_editor.blockquote') })),
            textColor: _jsx(TextColor, { title: t('top_bar_rich_text_editor.text_color') }),
            highlightColor: (_jsx(HighlightColor, { title: t('top_bar_rich_text_editor.highlight_color') })),
            clearFormat: (_jsx(ClearFormat, { title: t('top_bar_rich_text_editor.clear_format') })),
            fontFamily: _jsx(SetFontFamily, {}),
            fontSize: _jsx(SetFontSize, {}),
            paragraphStyle: _jsx(ParagraphStyle, {}),
            alignLeft: _jsx(AlignLeft, { title: t('top_bar_rich_text_editor.align_left') }),
            alignCenter: (_jsx(AlignCenter, { title: t('top_bar_rich_text_editor.align_center') })),
            alignRight: (_jsx(AlignRight, { title: t('top_bar_rich_text_editor.align_right') })),
            alignJustify: (_jsx(AlignJustify, { title: t('top_bar_rich_text_editor.align_justify') })),
            orderedList: (_jsx(OrderedList, { title: t('top_bar_rich_text_editor.ordered_list') })),
            unorderedList: (_jsx(UnorderedList, { title: t('top_bar_rich_text_editor.bullet_list') })),
            indent: _jsx(Indent, { title: t('top_bar_rich_text_editor.indent') }),
            outdent: _jsx(Outdent, { title: t('top_bar_rich_text_editor.outdent') }),
            insertEmoji: (_jsx(InsertEmoji, { title: t('top_bar_rich_text_editor.insert_emoji') })),
            insertLink: _jsx(InsertLink, { title: t('top_bar_rich_text_editor.link') }),
            insertImage: (_jsx(InsertImage, { title: t('top_bar_rich_text_editor.insert_image'), ...slotProps?.insertImage })),
            embedVideo: (_jsx(EmbedVideo, { title: t('top_bar_rich_text_editor.embed_video'), ...slotProps?.embedVideo })),
            embedHTML: (_jsx(EmbedHTML, { title: t('top_bar_rich_text_editor.embed_html'), ...slotProps?.embedHTML })),
            uploadVideo: (_jsx(UploadVideo, { title: t('top_bar_rich_text_editor.upload_video'), ...slotProps?.uploadVideo })),
            table: _jsx(Table, { title: t('top_bar_rich_text_editor.table') }),
        };
        return (_jsx(Stack, { className: "text-area-actions-bar", sx: {
                p: 1,
                pb: 0,
                backgroundColor: 'inherit',
                position: 'sticky',
                top: 0,
                zIndex: 1,
                borderTopLeftRadius: 'inherit',
                borderTopRightRadius: 'inherit',
            }, children: _jsx(Stack, { sx: {
                    backgroundColor: theme.palette.new.background.layout.default,
                    borderRadius: 1,
                    color: theme.palette.new.text.neutral.default,
                    p: 1,
                }, children: _jsx(Stack, { sx: { flexDirection: 'row', gap: 1, flexWrap: 'wrap' }, children: visibleActions.map(actionId => (_jsx("span", { children: actionComponentMap[actionId] }, actionId))) }) }) }));
    }
    return (_jsx(Stack, { className: "text-area-actions-bar", sx: {
            p: 1,
            pb: 0,
            backgroundColor: 'inherit',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            borderTopLeftRadius: 'inherit',
            borderTopRightRadius: 'inherit',
        }, children: _jsxs(Stack, { sx: {
                gap: 1,
                backgroundColor: theme.palette.new.background.layout.default,
                borderRadius: 1,
                color: theme.palette.new.text.neutral.default,
                p: 1,
            }, children: [_jsxs(Stack, { sx: {
                        flexDirection: 'row',
                        gap: 1,
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                    }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, flexWrap: 'wrap' }, children: [_jsx(Bold, { title: t('top_bar_rich_text_editor.bold') }), _jsx(Italics, { title: t('top_bar_rich_text_editor.italic') }), _jsx(Underline, { title: t('top_bar_rich_text_editor.underline') }), _jsx(Strike, { title: t('top_bar_rich_text_editor.strike') }), _jsx(ActionDivider, {}), _jsx(Code, { title: t('top_bar_rich_text_editor.code') }), table && _jsx(Table, { title: t('top_bar_rich_text_editor.table') }), _jsx(BlockQuote, { title: t('top_bar_rich_text_editor.blockquote') }), _jsx(ActionDivider, {}), _jsx(TextColor, { title: t('top_bar_rich_text_editor.text_color') }), _jsx(HighlightColor, { title: t('top_bar_rich_text_editor.highlight_color') }), _jsx(ClearFormat, { title: t('top_bar_rich_text_editor.clear_format') })] }), !simplifyEditor && (_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, flexWrap: 'wrap' }, children: [_jsx(SetFontFamily, {}), _jsx(SetFontSize, {}), _jsx(ParagraphStyle, {})] }))] }), !simplifyEditor && (_jsxs(_Fragment, { children: [_jsx(Divider, {}), _jsxs(Stack, { sx: {
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 1,
                                justifyContent: 'space-between',
                            }, children: [_jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, flexWrap: 'wrap' }, children: [_jsx(AlignLeft, { title: t('top_bar_rich_text_editor.align_left') }), _jsx(AlignCenter, { title: t('top_bar_rich_text_editor.align_center') }), _jsx(AlignRight, { title: t('top_bar_rich_text_editor.align_right') }), _jsx(AlignJustify, { title: t('top_bar_rich_text_editor.align_justify') }), _jsx(ActionDivider, {}), _jsx(OrderedList, { title: t('top_bar_rich_text_editor.ordered_list') }), _jsx(UnorderedList, { title: t('top_bar_rich_text_editor.bullet_list') }), _jsx(Indent, { title: t('top_bar_rich_text_editor.indent') }), _jsx(Outdent, { title: t('top_bar_rich_text_editor.outdent') }), _jsx(ActionDivider, {}), insertEmoji && (_jsx(InsertEmoji, { title: t('top_bar_rich_text_editor.insert_emoji') }))] }), _jsxs(Stack, { sx: { flexDirection: 'row', gap: 1, flexWrap: 'wrap' }, children: [_jsx(InsertLink, { title: t('top_bar_rich_text_editor.link') }), embedHTML && (_jsx(EmbedHTML, { title: t('top_bar_rich_text_editor.embed_html'), ...slotProps?.embedHTML })), _jsx(EmbedVideo, { title: t('top_bar_rich_text_editor.embed_video'), ...slotProps?.embedVideo }), _jsx(InsertImage, { title: t('top_bar_rich_text_editor.insert_image'), ...slotProps?.insertImage }), _jsx(UploadVideo, { title: t('top_bar_rich_text_editor.upload_video'), ...slotProps?.uploadVideo })] })] })] }))] }) }));
};
export default ActionsBar;
