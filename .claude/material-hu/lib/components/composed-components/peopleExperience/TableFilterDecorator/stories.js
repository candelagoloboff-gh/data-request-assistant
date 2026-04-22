import { jsx as _jsx } from "react/jsx-runtime";
import { useTheme } from '@mui/material';
import { IconMoodEmpty, IconMoodSad, IconMoodSmile } from '@tabler/icons-react';
import TableFilterDecorator from '.';
const meta = {
    title: 'Composed Components/peopleExperience/TableFilterDecorator',
    component: TableFilterDecorator,
    parameters: {
        layout: 'padded',
    },
};
export default meta;
export const Success = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.success, textColor: theme.palette.new.text.feedback.success, title: "Promoters" }));
    },
};
export const Error = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.error, textColor: theme.palette.new.text.feedback.error, title: "Detractors" }));
    },
};
export const Warning = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.warning, textColor: theme.palette.new.text.feedback.warning, title: "Neutrals" }));
    },
};
export const WithDescription = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.success, textColor: theme.palette.new.text.feedback.success, title: "Promoters", description: "Showing feedback from promoters (scores 9-10)" }));
    },
};
export const SuccessWithIcon = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.success, textColor: theme.palette.new.text.feedback.success, title: "Promoters", icon: _jsx(IconMoodSmile, { size: 20 }) }));
    },
};
export const ErrorWithIcon = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.error, textColor: theme.palette.new.text.feedback.error, title: "Detractors", icon: _jsx(IconMoodSad, { size: 20 }) }));
    },
};
export const WarningWithIcon = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.warning, textColor: theme.palette.new.text.feedback.warning, title: "Neutrals", icon: _jsx(IconMoodEmpty, { size: 20 }) }));
    },
};
export const WithIconAndDescription = {
    render: () => {
        const theme = useTheme();
        return (_jsx(TableFilterDecorator, { backgroundColor: theme.palette.new.background.feedback.success, textColor: theme.palette.new.text.feedback.success, title: "Promoters", description: "Showing feedback from promoters (scores 9-10)", icon: _jsx(IconMoodSmile, { size: 20 }) }));
    },
};
