import { type Meta, type StoryObj } from '@storybook/react-vite';
type StoryComponentArgs = {
    selectedSegmentationIds: Record<number, Set<number>>;
    setSelectedSegmentationIds: (data: {
        selectedSegmentationIds: Record<number, Set<number>>;
    }) => void;
    allowSelectAll?: boolean;
    excludedGroupsIds?: Set<number>;
    error?: {
        message: string;
    };
    empty?: boolean;
};
declare const SegmentationGroupSelectionWithMockQuery: ({ empty, ...props }: StoryComponentArgs) => import("react/jsx-runtime").JSX.Element;
declare const meta: Meta<typeof SegmentationGroupSelectionWithMockQuery>;
export default meta;
type Story = StoryObj<typeof SegmentationGroupSelectionWithMockQuery>;
export declare const Default: Story;
