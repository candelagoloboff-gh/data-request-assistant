import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import Alert from '../../../../design-system/Alert';
import { useDebouncedFormValues } from '../../../../../hooks/useDebouncedFormValues';
import useSelectedCollaboratorsDrawer from '../useSelectedCollaboratorsDrawer';
const CriteriaCollaboratorsReachFooter = ({ collaboratorsReach, }) => {
    const { t } = useTranslation('material_hu_only');
    const formValues = useDebouncedFormValues();
    const { selectedCollaboratorsDrawer, showSelectedCollaboratorsDrawer } = useSelectedCollaboratorsDrawer();
    const { isFormEmpty, onViewCollaborators, queryKey, useCount, useService } = collaboratorsReach;
    const { count, loading } = useCount(formValues);
    const service = useService(formValues);
    const isEmpty = isFormEmpty(formValues);
    const handleViewCollaborators = () => {
        onViewCollaborators?.();
        showSelectedCollaboratorsDrawer({
            service,
            queryKey,
            totalCount: count,
        });
    };
    const renderAlert = () => {
        if (isEmpty) {
            return (_jsx(Alert, { severity: "info", title: t('audience.no_collaborators_selected') }));
        }
        if (loading) {
            return (_jsx(Alert, { severity: "info", title: "", loading: true }));
        }
        return (_jsx(Alert, { severity: "info", title: t('audience.total_collaborators', { count }), action: {
                text: t('audience.view_collaborators'),
                onClick: handleViewCollaborators,
            } }));
    };
    return (_jsxs(_Fragment, { children: [renderAlert(), selectedCollaboratorsDrawer] }));
};
export default CriteriaCollaboratorsReachFooter;
