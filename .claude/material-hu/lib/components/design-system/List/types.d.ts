import { type ListProps as MuiListProps } from '@mui/material';
export type ListProps = {
    /** HTML id attribute for the list element */
    id?: MuiListProps['id'];
    /** Custom styles applied to the list */
    sx?: MuiListProps['sx'];
    /** List items rendered inside the list */
    children?: MuiListProps['children'];
    /** CSS class applied to the root element */
    className?: MuiListProps['className'];
};
