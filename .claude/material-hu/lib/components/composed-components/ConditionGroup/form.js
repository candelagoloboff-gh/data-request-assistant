import { jsx as _jsx } from "react/jsx-runtime";
import { useFieldArray, useFormContext } from 'react-hook-form';
import ConditionGroup from './index';
const FormConditionGroup = ({ name, inputProps, }) => {
    const { control } = useFormContext();
    const { fields, replace } = useFieldArray({ name, control });
    const value = fields;
    const handleChange = (newValues) => {
        replace(newValues);
    };
    return (_jsx(ConditionGroup, { ...inputProps, value: value, onChange: handleChange }));
};
export default FormConditionGroup;
