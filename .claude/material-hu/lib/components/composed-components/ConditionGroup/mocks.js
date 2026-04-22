import { JoinOperator, } from '../ConditionLine/types';
import { segmentations } from '../../../mock/data/segmentations';
export const fieldItems = segmentations.map(seg => ({
    id: seg.id,
    name: seg.name,
}));
export const valueItems = segmentations[0].items;
export const conditionLineSlotProps = {
    joinOperatorSelector: {
        options: [
            { label: 'Y', value: JoinOperator.AND },
            { label: 'O', value: JoinOperator.OR },
        ],
    },
    conditionOperatorSelector: {
        children: 'está en',
    },
    fieldSelector: {
        title: 'Seleccionar campo',
        getTriggerTitle: (_value) => _value[0]?.name || 'Selecciona un campo',
    },
    valueSelector: {
        title: 'Seleccionar valores',
        maxSelection: 10,
        getTriggerTitle: (_value) => _value.map(item => item.name).join(', ') || 'Selecciona un valor',
    },
};
