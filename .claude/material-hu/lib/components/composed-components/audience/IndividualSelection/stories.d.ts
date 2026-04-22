import { type Meta, type StoryObj } from '@storybook/react-vite';
import { type IndividualSelectionProps } from './types';
type StoryComponentArgs = Omit<IndividualSelectionProps, 'usersQuery' | 'usersQueryDataParser'> & {
    empty?: boolean;
};
declare const IndividualSelectionWithMockQuery: ({ empty, ...props }: StoryComponentArgs) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof IndividualSelectionWithMockQuery>;
export default meta;
type Story = StoryObj<typeof IndividualSelectionWithMockQuery>;
export declare const Default: Story;
export declare const WithForm: Story;
