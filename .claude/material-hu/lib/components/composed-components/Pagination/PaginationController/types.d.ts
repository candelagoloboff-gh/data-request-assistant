import { type Control, type FieldValues } from 'react-hook-form';
export type PaginationControllerProps<T extends FieldValues> = {
    control: Control<T>;
    total: number;
    setPage: (param: number) => void;
    setLimit: (param: number) => void;
    limitOptions: number[];
    labelRowsPerPage?: React.ReactNode;
};
