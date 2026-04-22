import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IconArrowLeft, IconX } from '@tabler/icons-react';
import HeaderActions from '../components/HeaderActions';
import HeaderContainer from '../components/HeaderContainer';
import HeaderExtraActions from '../components/HeaderExtraActions';
import HeaderIconButton from '../components/HeaderIconButton';
import HeaderInfo from '../components/HeaderInfo';
import HeaderMainActions from '../components/HeaderMainActions';
import HeaderPill from '../components/HeaderPill';
import HeaderTitle from '../components/HeaderTitle';
import { TaskFocusSkeleton } from './TaskFocusSkeleton';
const TaskFocusHeader = ({ title, pillLabel, pillProps, mainActions = [], extraActions = [], onClose, onBack, slotProps, copyLinkButton, loading, }) => {
    if (loading)
        return _jsx(TaskFocusSkeleton, {});
    const resolvedPillLabel = pillProps?.label || pillLabel;
    return (_jsxs(HeaderContainer, { slotProps: slotProps, children: [_jsxs(HeaderInfo, { copyLinkButton: copyLinkButton, children: [_jsx(HeaderIconButton, { Icon: IconArrowLeft, onClick: onBack }), _jsx(HeaderTitle, { title: title, slotProps: slotProps?.title }), _jsx(HeaderPill, { label: resolvedPillLabel, pillProps: { ...pillProps, ...slotProps?.pill } })] }), _jsxs(HeaderActions, { children: [_jsx(HeaderMainActions, { actions: mainActions }), _jsx(HeaderExtraActions, { actions: extraActions, closeDropdownOnClick: slotProps?.extraActions?.closeDropdownOnClick }), _jsx(HeaderIconButton, { Icon: IconX, onClick: onClose })] })] }));
};
export default TaskFocusHeader;
