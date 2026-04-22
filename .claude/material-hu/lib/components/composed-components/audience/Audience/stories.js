import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { QueryClient, QueryClientProvider } from 'react-query';
import { emptyCondition } from '../../ConditionGroup/constants';
import { fieldItems, valueItems, } from '../../ConditionGroup/mocks';
import { mockDataParser, useMockUsersQuery } from '../mocks';
import { getIndividualDescription, getSegmentationDescription, mockService, useMockCount, useMockService, } from './mocks';
import { CriteriaType, } from './types';
import Audience from './index';
const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
});
const AudienceStory = ({ defaultCriterias = [], title, description, onBeforeDelete, slotProps, }) => {
    const form = useForm({
        defaultValues: {
            criterias: defaultCriterias,
        },
    });
    useEffect(() => {
        const subscription = form.watch(values => {
            console.debug('[Audience] form values:', values);
        });
        return () => subscription.unsubscribe();
    }, [form]);
    return (_jsx(FormProvider, { ...form, children: _jsx(Audience, { title: title, description: description, segmentationDrawerProps: {
                collaboratorsReach: {
                    useCount: useMockCount,
                    useService: useMockService,
                    queryKey: 'audience-segmentation',
                },
                inputProps: {
                    slotProps: {
                        conditionLine: {
                            fieldSelectorItems: fieldItems,
                            valueSelectorItems: valueItems,
                        },
                    },
                },
            }, individualDrawerProps: {
                inputProps: {
                    useUsersQuery: useMockUsersQuery,
                    usersQueryDataParser: mockDataParser,
                },
                collaboratorsReach: {
                    useCount: useMockCount,
                    useService: useMockService,
                    queryKey: 'audience-individual',
                },
            }, selectedCollaboratorsDrawerProps: {
                service: mockService,
                queryKey: 'audience-selected',
            }, getSegmentationDescription: getSegmentationDescription, getIndividualDescription: getIndividualDescription, useCount: useMockCount, onBeforeDelete: onBeforeDelete, slotProps: slotProps }) }));
};
const meta = {
    component: Audience,
    title: 'Composed Components/Audience/Audience',
    tags: ['autodocs'],
    decorators: [
        Story => (_jsx(QueryClientProvider, { client: queryClient, children: _jsx("div", { style: { maxWidth: 700, width: '100%', margin: '2em auto' }, children: _jsx(Story, {}) }) })),
    ],
    parameters: {
        docs: {
            description: {
                component: 'High-level audience assignment component that orchestrates criteria selection, ' +
                    'summary display, and drawer interactions. Uses `useFormContext` from react-hook-form ' +
                    'to persist selected criteria in a parent form. Supports segmentation, individual, ' +
                    'and all-community criteria types. When no criteria are selected, shows the three ' +
                    'criteria cards. When criteria are selected, shows summary cards, a total collaborators ' +
                    'button, and an autocomplete to add more criteria.',
            },
        },
    },
    argTypes: {
        title: {
            description: 'Custom title displayed at the top. Falls back to a translated default.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        description: {
            description: 'Custom description text. Falls back to a translated default.',
            control: { type: 'text' },
            table: { type: { summary: 'string' } },
        },
        segmentationDrawerProps: {
            description: 'Props forwarded to `useSegmentationCriteriaDrawer` (excluding `defaultValues`).',
            control: false,
            table: {
                type: {
                    summary: 'Omit<UseSegmentationCriteriaDrawerProps, "defaultValues">',
                },
            },
        },
        individualDrawerProps: {
            description: 'Props forwarded to `useIndividualCriteriaDrawer` (excluding `defaultValues`).',
            control: false,
            table: {
                type: {
                    summary: 'Omit<UseIndividualCriteriaDrawerProps, "defaultValues">',
                },
            },
        },
        selectedCollaboratorsDrawerProps: {
            description: 'Props for the selected collaborators drawer.',
            control: false,
            table: {
                type: {
                    summary: 'Pick<SelectedCollaboratorsDrawerProps, "service" | "queryKey">',
                },
            },
        },
        getSegmentationDescription: {
            description: 'Callback that returns a human-readable description for a segmentation criteria entry.',
            control: false,
            table: {
                type: { summary: '(entry: SegmentationCriteriaEntry) => string' },
            },
        },
        getIndividualDescription: {
            description: 'Callback that returns a human-readable description for an individual criteria entry.',
            control: false,
            table: {
                type: { summary: '(entry: IndividualCriteriaEntry) => string' },
            },
        },
        onBeforeDelete: {
            description: 'Intercepts the delete action. Receives `(index, entry, confirmDelete)`. ' +
                'Call `confirmDelete()` to proceed with removal.',
            control: false,
            table: {
                type: {
                    summary: '(index: number, entry: CriteriaEntry, confirmDelete: () => void) => void',
                },
            },
        },
        slotProps: {
            description: 'Props forwarded to inner slot components. Supports `title` to customize the Title component ' +
                'and `alert` to render a HuAlert between the title and the criteria content.',
            control: false,
            table: {
                type: {
                    summary: '{ title?: Partial<TitleProps>; alert?: AlertProps }',
                },
            },
        },
        sx: {
            description: 'MUI `sx` style overrides applied to the root `Stack`.',
            control: false,
            table: { type: { summary: 'SxProps' } },
        },
    },
};
export default meta;
export const Empty = {
    name: 'No criteria selected',
    render: () => _jsx(AudienceStory, {}),
    parameters: {
        docs: {
            description: {
                story: 'Initial state with no criteria selected. Shows the three criteria cards ' +
                    '(Segmentation, Individual, All) for the user to pick from.',
            },
        },
    },
};
export const WithSegmentation = {
    name: 'With segmentation criteria',
    render: () => (_jsx(AudienceStory, { defaultCriterias: [
            {
                type: CriteriaType.SEGMENTATION,
                conditions: [emptyCondition],
            },
        ] })),
    parameters: {
        docs: {
            description: {
                story: 'One segmentation criteria is pre-selected. Shows the summary card with edit/delete ' +
                    'actions and the autocomplete to add an individual criteria.',
            },
        },
    },
};
export const WithIndividual = {
    name: 'With individual criteria',
    render: () => (_jsx(AudienceStory, { defaultCriterias: [
            {
                type: CriteriaType.INDIVIDUAL,
                userIds: new Set(['1', '2', '3']),
            },
        ] })),
    parameters: {
        docs: {
            description: {
                story: 'One individual criteria is pre-selected with 3 collaborators. Shows the summary card ' +
                    'and the autocomplete to add a segmentation criteria.',
            },
        },
    },
};
export const WithAll = {
    name: 'With all community criteria',
    render: () => (_jsx(AudienceStory, { defaultCriterias: [{ type: CriteriaType.ALL }] })),
    parameters: {
        docs: {
            description: {
                story: 'The "entire community" criteria is selected. The all summary card has no edit action, only delete.',
            },
        },
    },
};
export const WithMultipleCriteria = {
    name: 'With multiple criteria',
    render: () => (_jsx(AudienceStory, { defaultCriterias: [
            {
                type: CriteriaType.SEGMENTATION,
                conditions: [emptyCondition],
            },
            {
                type: CriteriaType.INDIVIDUAL,
                userIds: new Set(['1', '2', '3', '4', '5']),
            },
        ] })),
    parameters: {
        docs: {
            description: {
                story: 'Both segmentation and individual criteria are selected. The autocomplete is hidden ' +
                    'because all non-ALL types are in use.',
            },
        },
    },
};
export const CustomTitle = {
    name: 'Custom title and description',
    render: () => (_jsx(AudienceStory, { title: "Custom title", description: "Custom audience description" })),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates custom title and description props.',
            },
        },
    },
};
const OnBeforeDeleteExample = () => {
    const [pendingDelete, setPendingDelete] = useState(null);
    return (_jsxs(_Fragment, { children: [_jsx(AudienceStory, { defaultCriterias: [
                    { type: CriteriaType.SEGMENTATION, conditions: [emptyCondition] },
                    { type: CriteriaType.INDIVIDUAL, userIds: new Set(['1', '2']) },
                ], onBeforeDelete: (_index, _entry, confirmDelete) => {
                    setPendingDelete(() => confirmDelete);
                } }), pendingDelete && (_jsx("div", { style: {
                    position: 'fixed',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    zIndex: 9999,
                }, children: _jsxs("div", { style: {
                        background: '#fff',
                        borderRadius: 12,
                        padding: 24,
                        maxWidth: 400,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                    }, children: [_jsx("strong", { children: "\u00BFQuieres eliminar el criterio?" }), _jsx("span", { children: "Al eliminarlo, se perder\u00E1 toda la configuraci\u00F3n asociada." }), _jsxs("div", { style: { display: 'flex', gap: 8, justifyContent: 'flex-end' }, children: [_jsx("button", { type: "button", onClick: () => setPendingDelete(null), children: "Cancelar" }), _jsx("button", { type: "button", onClick: () => {
                                        pendingDelete();
                                        setPendingDelete(null);
                                    }, children: "Eliminar" })] })] }) }))] }));
};
export const WithOnBeforeDelete = {
    name: 'With onBeforeDelete (confirmation)',
    render: () => _jsx(OnBeforeDeleteExample, {}),
    parameters: {
        docs: {
            description: {
                story: 'Demonstrates the `onBeforeDelete` prop. Clicking the trash icon opens a confirmation ' +
                    'dialog managed by the consumer. The entry is only removed when "Eliminar" is clicked.',
            },
        },
    },
};
export const WithTitleSlotProps = {
    name: 'With slotProps.title (variant L)',
    render: () => (_jsx(AudienceStory, { title: "Colaboradores", description: "Selecciona los colaboradores que podr\u00E1n iniciar este servicio.", slotProps: { title: { variant: 'L' } } })),
    parameters: {
        docs: {
            description: {
                story: 'Uses `slotProps.title` to override the Title variant to `"L"`. ' +
                    'Any Title prop (variant, fontWeight, sx, etc.) can be customized this way.',
            },
        },
    },
};
export const WithAlertError = {
    name: 'With slotProps.alert (error)',
    render: () => (_jsx(AudienceStory, { slotProps: {
            alert: {
                severity: 'error',
                title: 'No se seleccionaron colaboradores',
                description: 'Debes seleccionar al menos un criterio de audiencia para continuar.',
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Uses `slotProps.alert` to render an error Alert between the title and the criteria cards. ' +
                    'Typical use case: validation feedback when the form is submitted without criteria.',
            },
        },
    },
};
export const WithAlertWarning = {
    name: 'With slotProps.alert (warning)',
    render: () => (_jsx(AudienceStory, { defaultCriterias: [
            {
                type: CriteriaType.SEGMENTATION,
                conditions: [emptyCondition],
            },
        ], slotProps: {
            alert: {
                severity: 'warning',
                title: 'Criterio incompleto',
                description: 'Algunos campos de segmentación están vacíos. Completalos antes de guardar.',
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Warning alert shown alongside existing criteria. Demonstrates the alert ' +
                    'rendering between the title and the summary cards.',
            },
        },
    },
};
export const WithAlertInfo = {
    name: 'With slotProps.alert (info)',
    render: () => (_jsx(AudienceStory, { slotProps: {
            alert: {
                severity: 'info',
                title: 'Información',
                description: 'Los criterios de audiencia determinan qué colaboradores podrán acceder a este servicio.',
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Informational alert used as a contextual hint for the user.',
            },
        },
    },
};
export const WithAlertAndTitleSlotProps = {
    name: 'With slotProps.alert + slotProps.title',
    render: () => (_jsx(AudienceStory, { title: "Colaboradores", description: "Selecciona los colaboradores que podr\u00E1n iniciar este servicio.", slotProps: {
            title: { variant: 'L' },
            alert: {
                severity: 'error',
                title: 'No se seleccionaron colaboradores',
                description: 'Debes seleccionar al menos un criterio de audiencia para continuar.',
            },
        } })),
    parameters: {
        docs: {
            description: {
                story: 'Combines both `slotProps.title` and `slotProps.alert` to show how ' +
                    'multiple slot overrides compose together.',
            },
        },
    },
};
