import { type Meta, type StoryObj } from '@storybook/react-vite';
import ProfileListUsersRow from '.';
declare const meta: Meta<typeof ProfileListUsersRow>;
export default meta;
type Story = StoryObj<typeof ProfileListUsersRow>;
export declare const Default: Story;
export declare const SingleUser: Story;
export declare const ManyUsers: Story;
