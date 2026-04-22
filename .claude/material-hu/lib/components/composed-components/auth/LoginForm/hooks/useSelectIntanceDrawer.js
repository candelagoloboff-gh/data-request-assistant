import { jsx as _jsx } from "react/jsx-runtime";
import { useTranslation } from 'react-i18next';
import { useDrawerV2, } from '../../../../../hooks/useDrawerV2';
import SelectInstanceContent from '../components/SelectInstanceDrawerContent';
const getSelectInstanceDrawerContent = ({ closeDrawer, onClose, ...selectInstanceDrawerProps }) => {
    const { t } = useTranslation('material_hu_only');
    const handleCloseDrawer = () => {
        closeDrawer();
        onClose?.();
    };
    return {
        children: _jsx(SelectInstanceContent, { ...selectInstanceDrawerProps }),
        title: t('login.select_a_community'),
        onClose: handleCloseDrawer,
        secondaryButtonProps: {
            fullWidth: true,
            onClick: handleCloseDrawer,
            children: t('login.cancel'),
        },
    };
};
const useSelectIntanceDrawer = (props) => {
    const { drawer: selectInstanceDrawer, showDrawer: showSelectInstanceDrawer, closeDrawer: closeSelectInstanceDrawer, } = useDrawerV2(args => getSelectInstanceDrawerContent({
        ...args,
        ...props,
    }));
    return {
        drawer: selectInstanceDrawer,
        showDrawer: showSelectInstanceDrawer,
        closeDrawer: closeSelectInstanceDrawer,
    };
};
export default useSelectIntanceDrawer;
