import { type Meta, type StoryObj } from '@storybook/react-vite';
import CollapsibleGroupSelector from '.';
declare const meta: Meta<typeof CollapsibleGroupSelector>;
export default meta;
type Story = StoryObj<typeof CollapsibleGroupSelector>;
export declare const Default: Story;
export declare const Loading: Story;
export declare const ManyItems: Story;
export declare const WithSearch: Story;
