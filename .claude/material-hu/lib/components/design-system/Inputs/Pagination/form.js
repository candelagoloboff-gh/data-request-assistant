import { jsx as _jsx } from "react/jsx-runtime";
import { Controller, useFormContext } from 'react-hook-form';
import Pagination from '.';
export const FormPagination = ({ name, inputProps: { onChangePage = () => null, onChangeLimit = () => null, ...inputProps } = {}, rules, }) => {
    const { setValue, watch } = useFormContext();
    const handleChangePage = (newPage) => {
        setValue(`${name}.page`, newPage);
        onChangePage(newPage);
    };
    const handleChangeLimit = (newLimit) => {
        setValue(`${name}.limit`, newLimit);
        onChangeLimit(newLimit);
    };
    const { page, limit } = watch(name);
    return (_jsx(Controller, { render: ({ field: { value, ref, ...field } }) => (_jsx(Pagination, { ...field, ...inputProps, page: page, limit: limit, onChangePage: handleChangePage, onChangeLimit: handleChangeLimit })), name: name, rules: rules }));
};
export default FormPagination;
