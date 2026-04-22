import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useState } from 'react';
import ListItem from '../../../design-system/List/components/ListItem';
import { IconChevronRight } from '@tabler/icons-react';
import { throttle } from 'lodash';
import useProfileDataDrawer from '../useProfileDataDrawer';
import { PROFILE_SINGLE_FIELD_ROW_LONG_TEXT_CHAR_THRESHOLD, PROFILE_SINGLE_FIELD_ROW_RESIZE_THROTTLE_MS, } from './constants';
const ProfileSingleFieldRow = ({ field, texts, }) => {
    const { openDrawer } = useProfileDataDrawer(field, texts);
    const [titleOverflows, setTitleOverflows] = useState(false);
    const exceedsCharLimit = field.value.length > PROFILE_SINGLE_FIELD_ROW_LONG_TEXT_CHAR_THRESHOLD;
    const showExpandAction = exceedsCharLimit || titleOverflows;
    useEffect(() => {
        // I set the overflow state to false when the window is resized to run onOverflowChange again
        const clearLayoutOverflow = () => {
            setTitleOverflows(false);
        };
        const throttledClear = throttle(clearLayoutOverflow, PROFILE_SINGLE_FIELD_ROW_RESIZE_THROTTLE_MS);
        window.addEventListener('resize', throttledClear);
        return () => {
            window.removeEventListener('resize', throttledClear);
            throttledClear.cancel();
        };
    }, []);
    const onOverflowChange = useCallback((overflowed) => {
        // onOverflowChange is called with false when the window is resized, so I only trust it when it's true
        if (overflowed) {
            setTitleOverflows(true);
        }
    }, []);
    return (_jsx(_Fragment, { children: _jsx(ListItem, { onClick: showExpandAction ? () => openDrawer() : undefined, text: { title: field.value, copetin: field.name }, ...(showExpandAction && {
                action: {
                    Icon: IconChevronRight,
                },
            }), slotProps: {
                container: {
                    sx: showExpandAction
                        ? {
                            p: 1,
                            m: -1,
                            borderRadius: 2,
                            '& .MuiIconButton-root:hover': { background: 'transparent' },
                        }
                        : undefined,
                },
                title: {
                    slotProps: {
                        title: {
                            onOverflowChange,
                            sx: {
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                                overflow: 'hidden',
                            },
                        },
                    },
                },
            } }) }));
};
export default ProfileSingleFieldRow;
