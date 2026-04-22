import Chip from '.';
const meta = {
    component: Chip,
    title: 'Design System/Chip',
    tags: ['autodocs'],
    args: {
        label: 'Default label',
        size: 'medium',
        disabled: false,
        onDelete: () => {
            alert('Delete button clicked');
        },
        onClick: () => {
            alert('Chip clicked');
        },
        isSelected: false,
    },
    argTypes: {
        size: {
            options: ['small', 'medium'],
            control: { type: 'radio' },
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const Medium = {
    args: {
        onDelete: undefined,
        size: 'medium',
    },
};
export const Small = {
    args: {
        onDelete: undefined,
        size: 'small',
    },
};
export const MediumDeletable = {
    args: {
        onDelete: () => {
            alert('Delete button clicked');
        },
        size: 'medium',
    },
};
export const SmallDeletable = {
    args: {
        onDelete: () => {
            alert('Delete button clicked');
        },
        size: 'small',
    },
};
export const MediumSelected = {
    args: {
        isSelected: true,
        size: 'medium',
    },
};
export const SmallSelected = {
    args: {
        isSelected: true,
        size: 'small',
    },
};
export const MediumDisabled = {
    args: {
        disabled: true,
        size: 'medium',
    },
};
export const SmallDisabled = {
    args: {
        disabled: true,
        size: 'small',
    },
};
export const WithHTMLTitle = {
    args: {
        slotProps: {
            label: { title: 'Design System/Chip' },
        },
    },
};
