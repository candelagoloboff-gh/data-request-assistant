import 'react-perfect-scrollbar/dist/css/styles.css';
import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type UserAutoCompleteProps } from './types';
type StoryComponentArgs = Omit<UserAutoCompleteProps, 'usersQuery' | 'usersQueryDataParser'> & {
    empty?: boolean;
};
declare const UserAutoCompleteWithMockQuery: ({ empty, ...rest }: StoryComponentArgs) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof UserAutoCompleteWithMockQuery>;
export default meta;
type Story = StoryObj<typeof UserAutoCompleteWithMockQuery>;
export declare const Default: Story;
export declare const Empty: Story;
