import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Dropdown from '../../Dropdown';
import List from '../../List';
import ListItem from '../../List/components/ListItem';
import Skeleton from '../../Skeleton';
const HeaderExtraActions = ({ actions = [], loading, closeDropdownOnClick, }) => {
    const { t } = useTranslation('material_hu_only');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    if (loading) {
        return (_jsx(Skeleton, { width: 105, height: 40 }));
    }
    if (actions.length === 0)
        return null;
    return (_jsx(Dropdown, { label: t('hu_header.more_actions'), position: "right", buttonProps: { size: 'small' }, onOpen: () => setIsDropdownOpen(true), onClose: () => setIsDropdownOpen(false), open: isDropdownOpen, children: _jsx(List, { children: actions.map(item => (_jsx(ListItem, { onClick: closeDropdownOnClick
                    ? () => {
                        setIsDropdownOpen(false);
                        item.onClick?.();
                    }
                    : item.onClick, text: {
                    title: item.title,
                    description: item.description,
                }, sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 1,
                    cursor: 'pointer',
                }, avatar: item.avatar }, item.key))) }) }));
};
export default HeaderExtraActions;
