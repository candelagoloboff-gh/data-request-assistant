import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Dialog from '../../design-system/Dialog';
import Title from '../../design-system/Title';
import { useModal } from '../../../hooks/useModal';
import { Stack } from '@mui/material';
const useTutorialModal = ({ steps, texts, callbacks, isCarousel = false, bodyVariant = 'L', minTitleHeight = 135, }) => {
    const [currentStep, setCurrentStep] = useState(1);
    const handleNext = () => {
        callbacks?.onNext?.(currentStep);
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
        else {
            callbacks?.onComplete?.();
            handleCloseModal();
        }
    };
    const handleCloseModal = () => {
        callbacks?.onClose?.(currentStep);
        closeModal();
        setCurrentStep(1);
    };
    const goToStep = (stepNumber) => {
        if (stepNumber >= 1 && stepNumber <= steps.length) {
            if (stepNumber > currentStep) {
                callbacks?.onNext?.(currentStep);
            }
            else if (stepNumber < currentStep) {
                callbacks?.onPrevious?.(currentStep);
            }
            setCurrentStep(stepNumber);
        }
    };
    const { modal: tutorialModal, showModal: showModalComponent, closeModal, } = useModal(() => (_jsx(Dialog, { title: texts.title, body: _jsxs(Stack, { sx: { gap: 1.5 }, children: [_jsx("img", { src: steps[currentStep - 1].image, alt: "", style: {
                        width: '100%',
                        height: 230,
                        objectFit: 'cover',
                    } }), isCarousel && (_jsx(Stack, { sx: {
                        flexDirection: 'row',
                        gap: '10px',
                        justifyContent: 'center',
                        alignItems: 'center',
                        pt: 1.5,
                    }, children: steps.map((_, index) => {
                        const isSelected = currentStep === index + 1;
                        return (_jsx(Stack, { onClick: () => goToStep(index + 1), sx: {
                                width: 16,
                                height: 16,
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                            }, children: _jsx(Stack, { sx: {
                                    width: isSelected ? 12 : 8,
                                    height: isSelected ? 12 : 8,
                                    borderRadius: '50%',
                                    transition: 'all 150ms ease-in-out',
                                    backgroundColor: theme => isSelected
                                        ? theme.palette.newBase?.brand[500]
                                        : theme.palette.border?.neutralBorder,
                                    border: '1px solid',
                                    borderColor: theme => theme.palette.border?.neutralBorder,
                                } }) }, index));
                    }) })), _jsx(Title, { variant: bodyVariant, title: steps[currentStep - 1].title, description: steps[currentStep - 1].description, sx: {
                        minHeight: minTitleHeight,
                    } })] }), primaryButtonProps: {
            children: currentStep === steps.length
                ? texts.completeButtonText
                : texts.nextButtonText,
            onClick: handleNext,
            loading: false,
        }, secondaryButtonProps: currentStep > 1
            ? {
                children: texts.previousButtonText,
                onClick: () => {
                    callbacks?.onPrevious?.(currentStep);
                    setCurrentStep(currentStep - 1);
                },
            }
            : undefined, onClose: handleCloseModal })), {
        maxWidth: 'sm',
        fullWidth: true,
        onClose: handleCloseModal,
    });
    const showModal = () => {
        callbacks?.onShow?.();
        showModalComponent();
    };
    return {
        modal: tutorialModal,
        showModal,
    };
};
export { useTutorialModal };
