import { type TaskFocusHeaderProps } from '../../design-system/Header/TaskFocus';
import { type StackProps } from '@mui/material';
type TaskFocusLayout = {
    children: React.ReactNode;
    slotProps: {
        root?: StackProps<'div'>;
        header: TaskFocusHeaderProps;
    };
};
declare const TaskFocusLayout: ({ children, slotProps }: TaskFocusLayout) => import("react/jsx-runtime").JSX.Element;
export default TaskFocusLayout;
