import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { lazy } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDrawerV2 } from '../../../../../hooks/useDrawerV2';
import { useLazyModal } from '../../../../../hooks/useLazyModal';
import CriteriaCollaboratorsReachFooter from './CriteriaCollaboratorsReachFooter';
import CriteriaDrawerContent from './CriteriaDrawerContent';
const CancelCriteriaModal = lazy(() => import('./CancelCriteriaModal'));
const useCriteriaDrawer = ({ defaultValues, collaboratorsReach, }) => {
    const { t } = useTranslation('material_hu_only');
    const form = useForm({
        defaultValues,
    });
    const { handleSubmit, formState: { isDirty }, reset, } = form;
    const { modal: cancelModal, showModal: showCancelModal } = useLazyModal(CancelCriteriaModal);
    const { drawer: criteriaDrawer, showDrawer: showCriteriaDrawer, closeDrawer: closeCriteriaDrawer, } = useDrawerV2(({ onClose, onConfirm, title, description, cancelDescription, disabled = false, loading = false, children, ...args }) => {
        const closeDrawer = () => {
            onClose?.();
            closeCriteriaDrawer();
            reset();
        };
        const handleClose = () => {
            if (!isDirty)
                return closeDrawer();
            showCancelModal({ onConfirm: closeDrawer, body: cancelDescription });
        };
        const submit = handleSubmit(values => {
            onConfirm(values);
            closeCriteriaDrawer();
            reset();
        });
        return {
            ...args,
            component: 'form',
            onSubmit: submit,
            onClose: handleClose,
            title,
            primaryButtonProps: {
                children: t('audience.confirm'),
                type: 'submit',
                disabled,
                loading,
            },
            secondaryButtonProps: {
                children: t('audience.cancel'),
                onClick: handleClose,
                disabled,
            },
            footer: collaboratorsReach ? (_jsx(CriteriaCollaboratorsReachFooter, { collaboratorsReach: collaboratorsReach })) : undefined,
            children: (_jsx(CriteriaDrawerContent, { description: description, children: children })),
        };
    });
    return {
        criteriaDrawer: (_jsxs(FormProvider, { ...form, children: [criteriaDrawer, cancelModal] })),
        showCriteriaDrawer: showCriteriaDrawer,
        closeCriteriaDrawer: closeCriteriaDrawer,
        criteriaForm: form,
    };
};
export default useCriteriaDrawer;
