import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import IndividualSelection from '.';
const FormIndividualSelection = ({ name, searchName, inputProps, valueRules, searchRules, }) => {
    const { control } = useFormContext();
    return (_jsx(Controller, { name: name, control: control, rules: valueRules, render: ({ field: { value, onChange } }) => (_jsx(Controller, { name: searchName, control: control, rules: searchRules, render: ({ field: { value: searchValue, onChange: onSearch } }) => (_jsx(IndividualSelection, { ...inputProps, value: value, onChange: onChange, searchValue: searchValue, onSearch: onSearch })) })) }));
};
export default FormIndividualSelection;
