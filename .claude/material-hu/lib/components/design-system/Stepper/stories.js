import Stepper from '.';
const meta = {
    component: Stepper,
    title: 'Design System/Stepper',
    tags: ['autodocs'],
    argTypes: {
        completeBeforeCurrent: {
            description: 'Whether or not previous steps are marked as completed.',
            control: {
                type: 'boolean',
            },
        },
        completedSteps: {
            description: 'An array of step indexes that are marked as completed.',
        },
        errorSteps: {
            description: 'An array of step indexes that are marked as errored.',
        },
        steps: {
            description: 'An array of Step config to render.',
        },
        currentStep: {
            description: 'The index of the current step.',
            control: {
                min: 0,
                type: 'number',
            },
        },
    },
};
const mockSteps = [
    {
        id: '1',
        number: 1,
        showNumber: true,
        title: 'Step 1',
        subtitle: 'Subtitle 1',
    },
    {
        id: '2',
        number: 2,
        showNumber: true,
        title: 'Step 2',
        subtitle: 'Subtitle 2',
    },
    {
        id: '3',
        number: 3,
        showNumber: true,
        title: 'Step 3',
        subtitle: 'Subtitle 3',
    },
    {
        id: '4',
        number: 4,
        showNumber: true,
        title: 'Step 4',
        subtitle: 'Subtitle 4',
    },
    {
        id: '5',
        number: 5,
        showNumber: true,
        title: 'Step 5',
        subtitle: 'Subtitle 5',
    },
];
export const Default = {
    args: {
        currentStep: 1,
        steps: mockSteps,
    },
};
export const StepWithError = {
    args: {
        currentStep: 0,
        errorSteps: [0],
        steps: mockSteps,
    },
};
export const CompletedSteps = {
    args: {
        currentStep: 5,
        completedSteps: [],
        steps: mockSteps,
    },
};
export default meta;
