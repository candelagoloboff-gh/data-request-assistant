import { type TitleVariantTypes } from '../../design-system/Title/types';
export interface TutorialStep {
    /** Unique identifier for the tutorial step */
    id: number;
    /** Title/heading for the tutorial step */
    title: string;
    /** Detailed description or instructions for the step */
    description: string;
    /** URL or path to the image to display for this step */
    image: string;
}
export interface TutorialModalCallbacks {
    /**
     * Called when the tutorial modal is opened/shown
     */
    onShow?: () => void;
    /**
     * Called when user clicks "Next" button to advance to the next step
     * @param currentStep - The current step number before advancing
     */
    onNext?: (currentStep: number) => void;
    /**
     * Called when user clicks "Previous" button to go back to the previous step
     * @param currentStep - The current step number before going back
     */
    onPrevious?: (currentStep: number) => void;
    /**
     * Called when the tutorial modal is closed (either by clicking close button or ESC)
     * @param currentStep - The step number where the tutorial was closed
     */
    onClose?: (currentStep: number) => void;
    /**
     * Called when user completes the entire tutorial (clicks the final button)
     */
    onComplete?: () => void;
}
export interface UseTutorialModalProps {
    /**
     * Array of tutorial steps to display
     */
    steps: TutorialStep[];
    /**
     * Text configuration for the tutorial modal
     */
    texts: {
        /** Title displayed in the modal header */
        title: string;
        /** Text for the "Next" button */
        nextButtonText: string;
        /** Text for the "Previous" button */
        previousButtonText: string;
        /** Text for the final completion button */
        completeButtonText: string;
    };
    /**
     * Optional callbacks for custom functionality during tutorial interactions
     */
    callbacks?: TutorialModalCallbacks;
    /**
     * Whether to display carousel dots for step navigation
     * @default false
     */
    isCarousel?: boolean;
    /**
     * Variant of the title
     * @default 'L'
     */
    bodyVariant?: TitleVariantTypes;
    /**
     * Minimum height of the title
     * @default 135
     */
    minTitleHeight?: number;
}
export interface UseTutorialModalReturn {
    /** The modal component to render in your JSX */
    modal: React.ReactNode;
    /** Function to open/show the tutorial modal */
    showModal: () => void;
}
