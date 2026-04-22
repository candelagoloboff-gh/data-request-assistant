import { type StackProps } from '@mui/material/Stack';
import { type CollapsibleNavSidebarProps } from './components/CollapsibleNavSidebar/types';
export type SidebarContentLayoutProps = {
    children: React.ReactNode;
    loading?: boolean;
    slotProps: {
        root?: StackProps<'div'>;
        sidebar: CollapsibleNavSidebarProps;
    };
};
