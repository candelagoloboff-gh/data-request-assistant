import { type DynamicFormComponent } from '../../../dynamic-forms/types';
import { type CardContainerProps } from '../../../../design-system/CardContainer';
import { type StackProps } from '@mui/material';
import { type FormInputSlotProps } from '../FormInputs/FormInput';
export type Section = {
    nameId: string;
    content: {
        title?: string | null;
        description?: string | null;
        components?: DynamicFormComponent[];
    };
};
export type FormInputsCatalogProps = {
    isFrozen?: boolean;
    section?: Section | undefined | null;
    error?: string;
    slotProps?: {
        fields?: FormInputSlotProps['fields'];
        root?: CardContainerProps;
    };
    sx?: StackProps['sx'];
};
