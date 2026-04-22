import { type Meta, type StoryObj } from '@storybook/react-vite';
import SummaryCard from './index';
declare const meta: Meta<typeof SummaryCard>;
export default meta;
type Story = StoryObj<typeof SummaryCard>;
export declare const Default: Story;
export declare const Disabled: Story;
export declare const Loading: Story;
