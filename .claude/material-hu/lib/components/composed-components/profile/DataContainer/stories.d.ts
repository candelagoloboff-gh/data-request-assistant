import { type Meta, type StoryObj } from '@storybook/react-vite';
import DataContainer from '.';
declare const meta: Meta<typeof DataContainer>;
export default meta;
type Story = StoryObj<typeof DataContainer>;
export declare const Default: Story;
export declare const SingleSection: Story;
export declare const ManySections: Story;
export declare const WithEdit: Story;
