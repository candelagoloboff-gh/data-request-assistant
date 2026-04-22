import { type Meta, type StoryObj } from '@storybook/react-vite';
import Attachments from '.';
declare const meta: Meta<typeof Attachments>;
export default meta;
type Story = StoryObj<typeof Attachments>;
export declare const Default: Story;
export declare const FormAttachmentsEmpty: Story;
export declare const FormAttachmentsWithOne: Story;
