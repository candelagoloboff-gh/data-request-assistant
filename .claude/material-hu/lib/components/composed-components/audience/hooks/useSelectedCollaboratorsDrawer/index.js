import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useDrawerV2 } from '../../../../../hooks/useDrawerV2';
import SelectedCollaboratorsDrawerContent from './content';
const useSelectedCollaboratorsDrawer = () => {
    const { t } = useTranslation('material_hu_only');
    const { drawer: selectedCollaboratorsDrawer, showDrawer: showSelectedCollaboratorsDrawer, closeDrawer: closeSelectedCollaboratorsDrawer, } = useDrawerV2(({ onClose, service, queryKey, totalCount, ...args }) => {
        const closeDrawer = () => {
            onClose?.();
            closeSelectedCollaboratorsDrawer();
        };
        const handleClose = () => {
            closeDrawer();
        };
        return {
            ...args,
            onClose: handleClose,
            hasBackButton: true,
            title: t('audience.selected_collaborators_drawer_title'),
            secondaryButtonProps: {
                children: t('audience.back'),
                onClick: handleClose,
            },
            children: (_jsx(SelectedCollaboratorsDrawerContent, { totalCount: totalCount, service: service, queryKey: queryKey })),
        };
    });
    return {
        selectedCollaboratorsDrawer,
        showSelectedCollaboratorsDrawer,
        closeSelectedCollaboratorsDrawer,
    };
};
export default useSelectedCollaboratorsDrawer;
