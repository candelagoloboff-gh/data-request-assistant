import { type Meta, type StoryObj } from '@storybook/react-vite';
import PdfVisualizer from '.';
declare const meta: Meta<typeof PdfVisualizer>;
export default meta;
type Story = StoryObj<typeof PdfVisualizer>;
export declare const Default: Story;
export declare const StartAtPage3: Story;
export declare const WithoutSidebar: Story;
export declare const SidebarExpandedByDefault: Story;
