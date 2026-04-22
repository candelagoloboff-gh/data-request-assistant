import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import TableHeaderDecorator from './components/TableHeaderDecorator';
import SatisfactionDrawerCommentList from '.';
const mockComments = [
    {
        id: 1,
        copetin: 'Copetin',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
        id: 2,
        copetin: 'Copetin',
        comment: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
        id: 3,
        copetin: 'Copetin',
        comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
        id: 4,
        copetin: 'Copetin',
        comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        id: 5,
        copetin: 'Copetin',
        comment: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    },
];
const meta = {
    title: 'Composed Components/People Experience/SatisfactionDrawerCommentList',
    component: SatisfactionDrawerCommentList,
    tags: ['autodocs'],
    args: {
        headerTitle: 'Comments',
        comments: mockComments,
        loading: false,
    },
    argTypes: {
        headerTitle: {
            description: 'Title displayed in the header',
            control: 'text',
        },
        tableHeaderDecorator: {
            description: 'Optional ReactNode to render between header and table',
            control: false,
        },
        comments: {
            description: 'Array of comment data',
            control: 'object',
        },
        loading: {
            description: 'Loading state',
            control: 'boolean',
        },
        loadingMore: {
            description: 'Loading more state (shows skeleton rows at bottom)',
            control: 'boolean',
        },
        emptyStateTitle: {
            description: 'Title for empty state',
            control: 'text',
        },
        emptyStateDescription: {
            description: 'Description for empty state',
            control: 'text',
        },
    },
};
export default meta;
export const Default = {
    args: {
        headerTitle: 'Comments',
        comments: mockComments,
        loading: false,
    },
};
export const Loading = {
    args: {
        headerTitle: 'Comments',
        comments: [],
        loading: true,
    },
};
export const EmptyComments = {
    args: {
        headerTitle: 'Comments',
        comments: [],
        loading: false,
    },
};
export const LoadingMore = {
    args: {
        headerTitle: 'Comments',
        comments: mockComments,
        loading: false,
        loadingMore: true,
    },
};
export const CustomTitle = {
    args: {
        headerTitle: 'User Feedback',
        comments: mockComments,
        loading: false,
    },
};
export const CustomEmptyState = {
    args: {
        headerTitle: 'Comments',
        comments: [],
        loading: false,
        emptyStateTitle: 'No feedback yet',
        emptyStateDescription: 'Check back later for user comments and feedback',
    },
};
export const WithTableHeaderDecorator = {
    render: () => {
        const theme = useTheme();
        return (_jsx(SatisfactionDrawerCommentList, { headerTitle: "Comments", comments: mockComments, tableHeaderDecorator: _jsx(TableHeaderDecorator, { backgroundColor: theme.palette.new.background.feedback.success, textColor: theme.palette.new.text.feedback.success, title: '"Positive"', description: "44.8% selected \u2022 3,457 comments" }) }));
    },
};
