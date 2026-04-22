import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { IconTable } from '@tabler/icons-react';
import ActionButton from '../../components/ActionButton';
import { useTextArea } from '../../context';
import TableMenu from './menu';
import { getCanMergeCells, getCanSplitCell } from './utils';
const Table = ({ title }) => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef(null);
    const { editor } = useTextArea();
    const { t } = useTranslation('material_hu_only');
    if (!editor) {
        return null;
    }
    const isInTable = editor.isActive('table');
    const canMergeCells = getCanMergeCells(editor);
    const canSplitCell = getCanSplitCell(editor);
    const options = [
        {
            label: t('top_bar_rich_text_editor.insert_table'),
            divider: true,
            onClick: () => {
                editor
                    .chain()
                    .focus()
                    .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
                    .run();
            },
        },
        {
            label: t('top_bar_rich_text_editor.table_cell'),
            options: [
                {
                    label: t('top_bar_rich_text_editor.merge_cells'),
                    disabled: !canMergeCells,
                    onClick: () => {
                        editor.chain().focus().mergeCells().run();
                    },
                },
                {
                    label: t('top_bar_rich_text_editor.split_cells'),
                    disabled: !canSplitCell,
                    onClick: () => {
                        editor.chain().focus().splitCell().run();
                    },
                },
            ],
        },
        {
            label: t('top_bar_rich_text_editor.table_row'),
            options: [
                {
                    label: t('top_bar_rich_text_editor.insert_row_before'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().addRowBefore().run();
                    },
                },
                {
                    label: t('top_bar_rich_text_editor.insert_row_after'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().addRowAfter().run();
                    },
                },
                {
                    label: t('top_bar_rich_text_editor.delete_row'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().deleteRow().run();
                    },
                },
            ],
        },
        {
            label: t('top_bar_rich_text_editor.table_column'),
            options: [
                {
                    label: t('top_bar_rich_text_editor.insert_column_before'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().addColumnBefore().run();
                    },
                },
                {
                    label: t('top_bar_rich_text_editor.insert_column_after'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().addColumnAfter().run();
                    },
                },
                {
                    label: t('top_bar_rich_text_editor.delete_column'),
                    disabled: !isInTable,
                    onClick: () => {
                        editor.chain().focus().deleteColumn().run();
                    },
                },
            ],
            divider: true,
        },
        {
            label: t('top_bar_rich_text_editor.delete_table'),
            disabled: !isInTable,
            onClick: () => {
                editor.chain().focus().deleteTable().run();
            },
        },
    ];
    return (_jsxs(_Fragment, { children: [_jsx(ActionButton, { title: title, icon: _jsx(IconTable, {}), onClick: () => setOpen(true), isActive: isInTable, disabled: editor.isActive('code'), ref: anchorRef }), _jsx(TableMenu, { anchorRef: anchorRef, open: open, onClose: () => setOpen(false), options: options })] }));
};
export default Table;
