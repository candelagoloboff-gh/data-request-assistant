import { type Meta, type StoryObj } from '@storybook/react-vite';
import UserAvatar from '.';
declare const meta: Meta<typeof UserAvatar>;
export default meta;
type Story = StoryObj<typeof UserAvatar>;
export declare const Default: Story;
export declare const WithInternalId: Story;
export declare const WithEmail: Story;
export declare const WithInternalIdAndEmail: Story;
