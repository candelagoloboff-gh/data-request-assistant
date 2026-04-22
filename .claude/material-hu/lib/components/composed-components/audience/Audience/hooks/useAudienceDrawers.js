import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import useIndividualCriteriaDrawer from '../../../audience/hooks/useIndividualCriteriaDrawer';
import useSegmentationCriteriaDrawer from '../../../audience/hooks/useSegmentationCriteriaDrawer';
import { emptyCondition } from '../../../ConditionGroup/constants';
const useAudienceDrawers = ({ segmentationDrawerProps, individualDrawerProps, }) => {
    const [search, setSearch] = useState('');
    const { watch, setValue, getValues } = useFormContext();
    const criterias = watch('criterias') ?? [];
    const { inputProps: segmentationInputProps, ...segmentationHookProps } = segmentationDrawerProps;
    const typedEmptyCondition = emptyCondition;
    const { segmentationCriteriaDrawer, showSegmentationCriteriaDrawer, segmentationCriteriaForm, } = useSegmentationCriteriaDrawer({
        defaultValues: { conditions: [typedEmptyCondition] },
        ...segmentationHookProps,
    });
    const { inputProps: { useUsersQuery, ...restIndividualInputProps }, ...restIndividualDrawerProps } = individualDrawerProps;
    const usersQuery = useUsersQuery(search);
    const { individualCriteriaDrawer, showIndividualCriteriaDrawer, individualCriteriaForm, } = useIndividualCriteriaDrawer({
        defaultValues: { userIds: new Set(), search: '' },
        inputProps: { ...restIndividualInputProps, usersQuery },
        ...restIndividualDrawerProps,
    });
    useEffect(() => {
        const subscription = individualCriteriaForm.watch(formValues => {
            setSearch(formValues.search ?? '');
        });
        return () => subscription.unsubscribe();
    }, [individualCriteriaForm]);
    return {
        criterias,
        setValue,
        getValues,
        typedEmptyCondition,
        segmentationInputProps,
        segmentationCriteriaDrawer,
        showSegmentationCriteriaDrawer,
        segmentationCriteriaForm,
        individualCriteriaDrawer,
        showIndividualCriteriaDrawer,
        individualCriteriaForm,
    };
};
export default useAudienceDrawers;
