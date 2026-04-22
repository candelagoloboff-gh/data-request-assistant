import { type FieldValues } from 'react-hook-form';
import { type FileAsset } from '../../../types/attachments';
export type FileAssetReference = {
    id: number;
    name?: string;
};
export type DynamicFormComponentValue = string | number | number[] | Date | FileAsset | FileAsset[] | {
    value: number;
    label: string;
} | null;
export type DynamicFormValues = Record<string, DynamicFormComponentValue>;
/**
 * Base type for section content that contains the actual form data.
 * This is shared between NextSectionContent and DynamicFormAnswerSection content.
 */
export type SectionContentBase = {
    nameId: string;
    title?: string;
    description?: string | null;
    components?: DynamicFormComponent[];
    action?: DynamicFormAction;
};
/**
 * Base type for section references that track answers and variables.
 * This is shared between NextSection and DynamicFormAnswerSection.
 */
export type SectionReferencesBase = {
    answers: Record<string, any>;
    variables: Record<string, any>;
};
/**
 * Base type that represents the common structure of a form section.
 * This is shared between NextSection and DynamicFormAnswerSection.
 */
export type SectionBase = {
    id: number;
    nameId: string;
    formId: number;
    formTag: string;
    position: number;
    endpoint: string | null;
    createdAt: string;
    updatedAt: string;
};
export type DynamicFormAnswerSection = SectionBase & {
    references?: SectionReferencesBase;
    content: SectionContentBase;
};
export type DynamicFormAnswerFormData = {
    id: number;
    tag: string;
    title: string;
    description: string | null;
    type: string;
    endpoint: string | null;
    fileAsset: FileAsset | null;
    fileAssetId: number | null;
    published: boolean;
    sectionsCount: number;
    sections: DynamicFormSection[] | null;
    createdAt: string;
    updatedAt: string;
    initialAction: DynamicFormAction;
    variables: Record<string, any>;
};
export type DynamicFormAnswer = {
    id: number;
    formId: number;
    formTag: string;
    fillingTime: number;
    sectionsPath: string[];
    lastProgressionId: string;
    progressionIds: string[];
    editable: boolean;
    createdAt: string;
    updatedAt: string;
    pdfFileAsset: FileAsset | null;
    variables: Record<string, any>;
    form: DynamicFormAnswerFormData;
    sections: DynamicFormAnswerSection[];
};
type User = {
    firstName: string;
    lastName: string;
    fullName: string;
    email: string;
    internalId: string;
    department: string;
    position: string;
    hiringDate: string;
    birthDate: string;
};
type Deparment = {
    createdAt: string;
    deletedAt: string;
    description: string;
    id: number;
    instanceId: number;
    name: string;
    updatedAt: string;
    usersCount: number;
};
export type DynamicFormAction = {
    nameId: string;
    event: string;
    type: string;
    payload: object;
    nextSection: string;
};
export type DynamicFormSection = {
    nameId: string;
    formId: number;
    formTag: string;
    position: number;
    content: SectionContent;
    id: number;
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
};
export declare const DynamicFormInputs: {
    readonly Checkbox: "CHECKBOX";
    readonly Dropdown: "DROPDOWN";
    readonly MultipleChoice: "MULTIPLE_CHOICE";
    readonly Rating: "RATING";
    readonly Date: "DATE";
    readonly Time: "TIME";
    readonly Phone: "PHONE";
    readonly Integer: "INTEGER";
    readonly Float: "FLOAT";
    readonly StarRating: "STAR_RATING";
    readonly Info: "INFO";
    readonly Text: "TEXT";
    readonly Signature: "SIGNATURE";
    readonly File: "FILE";
    readonly Autocomplete: "AUTOCOMPLETE";
};
export type DynamicFormInputType = (typeof DynamicFormInputs)[keyof typeof DynamicFormInputs];
type ComponentContentBase = {
    title: string;
    description?: string;
    required?: boolean;
    visible?: boolean;
    disabled?: boolean;
};
export type ComponentBase<T = string | number> = {
    nameId: string;
    storage?: string;
    answer: T | null;
    attachments?: FileAsset[];
    attachmentReferences?: FileAssetReference[];
};
type ArrayComponentContent = ComponentContentBase & {
    choices: string[];
};
export type ArrayComponent = ComponentBase<number[]> & {
    type: typeof DynamicFormInputs.Checkbox;
    content: ArrayComponentContent;
    validations?: {
        minItems?: number;
        maxItems?: number;
    };
};
export type SelectComponent = ComponentBase<number> & {
    type: typeof DynamicFormInputs.Dropdown | typeof DynamicFormInputs.MultipleChoice | typeof DynamicFormInputs.Rating;
    content: ArrayComponentContent;
    validations?: {
        minimum?: number;
        maximum?: number;
    };
};
export type NumberComponent = ComponentBase<number> & {
    type: typeof DynamicFormInputs.Integer | typeof DynamicFormInputs.Float | typeof DynamicFormInputs.StarRating;
    content: ComponentContentBase;
    validations?: {
        minimum?: number;
        maximum?: number;
    };
};
export type InfoComponent = ComponentBase & {
    type: typeof DynamicFormInputs.Info;
    content: ComponentContentBase;
    validations?: undefined;
};
export type TextComponent = ComponentBase<string> & {
    type: typeof DynamicFormInputs.Text | typeof DynamicFormInputs.Date | typeof DynamicFormInputs.Time;
    content: ComponentContentBase;
    validations?: {
        maxLength?: number;
        pattern?: string;
    };
};
type PhoneComponent = ComponentBase<string> & {
    type: typeof DynamicFormInputs.Phone;
    content: ComponentContentBase;
    validations?: {
        pattern?: string;
    };
};
export type SignatureComponent = ComponentBase<FileAsset> & {
    type: typeof DynamicFormInputs.Signature;
    content: ComponentContentBase;
};
type AutoCompleteComponentBase = ComponentBase<string> & {
    type: typeof DynamicFormInputs.Autocomplete;
    content: ComponentContentBase;
    validations?: {
        maxLength?: number;
        pattern?: string;
    };
};
export type AutoCompleteComponent = AutoCompleteComponentBase & ({
    answer: {
        fieldName: string;
        fieldType: 'BIRTHDATE' | 'COMPLETE_NAME' | 'EMPLOYEE_INTERNAL_ID' | 'HIRING_DATE' | 'EMAIL' | 'STRING' | 'DATE' | 'OPTION';
        fieldValue: string;
    };
} | {
    answer: {
        fieldName: string;
        fieldType: 'STRING_LIST' | 'MULTIPLE_OPTION';
        fieldValue: string[];
    };
} | {
    answer: {
        fieldName: string;
        fieldType: 'NUMBER';
        fieldValue: number;
    };
} | {
    answer: {
        fieldName: string;
        fieldType: 'NUMBER_LIST';
        fieldValue: number[];
    };
} | {
    answer: {
        fieldName: string;
        fieldType: 'DIRECT_BOSS';
        fieldValue: User;
    };
} | {
    answer: {
        fieldName: string;
        fieldType: 'DEPARTMENT';
        fieldValue: Deparment;
    };
});
type FileComponent = ComponentBase<FileAsset[]> & {
    type: typeof DynamicFormInputs.File;
    content: ComponentContentBase;
    validations?: {
        minItems?: number;
        maxItems?: number;
        contentTypes?: string[];
    };
};
export type FormContainerRef = {
    initDynamicForm: ({ progressionToken, tag, }: {
        progressionToken: string;
        tag: string;
    }) => void;
    getDynamicFormProgress: ({ progressionId, tag, }: {
        progressionId: string;
        tag: string;
    }) => void;
    setIsFrozen: (isFrozen: boolean) => void;
};
export type DynamicFormComponent = ArrayComponent | SelectComponent | NumberComponent | TextComponent | InfoComponent | AutoCompleteComponent | SignatureComponent | PhoneComponent | FileComponent;
export type SectionContent = {
    data: object;
    title: string;
    description: string;
    action: DynamicFormAction;
    nameId: string;
    components: DynamicFormComponent[];
};
export type GetDynamicFormBodyProps = {
    sectionName: string;
    fieldValues?: FieldValues;
    sectionEvent?: SectionEvent;
    components: DynamicFormComponent[];
    fillingTime: number;
};
export type DynamicFormBody = {
    sectionNameId: string;
    sectionEvent: SectionEvent;
    fillingTime: number;
    answers?: {
        componentNameId: string;
        answer: (string | number | number[] | FileAssetReference | FileAssetReference[]) | null;
    }[];
    fileAssetIds?: number[];
};
export declare enum SectionEvent {
    Back = "BACK",
    Complete = "COMPLETE"
}
export type DynamicForm = {
    createdAt: string;
    description: null;
    endpoint: null;
    fileAsset: FileAsset | null;
    fileAssetId: number | null;
    id: number;
    initialAction: DynamicFormAction;
    published: boolean;
    sections: DynamicFormSection[] | null;
    sectionsCount: number;
    tag: string;
    title: string;
    type: 'REGULAR';
    updatedAt: string;
    form: {
        title: string;
    };
    variables?: Record<string, string>;
};
export type NextSection = SectionBase & {
    references?: SectionReferencesBase;
    content: SectionContentBase;
};
/**
 * Base type that defines the minimum required properties
 * for the useDynamicForm hook to function correctly.
 * This ensures type safety across different implementations.
 */
export type DynamicFormProgressionBase = {
    /** Unique identifier for the progression (progressionId) */
    id: string;
    /** Tag identifier for the form */
    formTag: string;
    /** The next section to be displayed */
    nextSection: NextSection;
    /** Current section identifier */
    currentSection: string;
    /** First section identifier */
    firstSection: string;
    /** Form metadata including title */
    form: {
        title: string;
    };
    /** Whether the form has been completed */
    finished: boolean;
    /** Optional form answer ID */
    formAnswerId?: number | null;
    /** Whether the form is editable */
    editable?: boolean;
};
export type DynamicFormResponse = DynamicFormProgressionBase & {
    createdAt: string;
    currentFileAssetIds?: number[] | null;
    form: DynamicForm;
    formAnswer: DynamicFormAnswer | null;
    formId: number;
    updatedAt: string;
    userId: number;
};
export type DynamicFormProgressionResponse = DynamicFormResponse;
export type ErrorTextsDefinition = {
    required: string;
};
export {};
