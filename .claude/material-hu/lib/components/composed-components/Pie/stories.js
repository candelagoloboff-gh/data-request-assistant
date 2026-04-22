import { colorPalette } from '../../../theme/hugo/colors';
import Pie from '.';
const meta = {
    component: Pie,
    title: 'Composed Components/Charts/Pie',
    tags: ['autodocs'],
    args: {
        items: [
            {
                value: 25,
                label: 'item 1',
            },
            {
                value: 12,
                label: 'item 2',
            },
            {
                value: 30,
                label: 'item 3',
            },
        ],
        copetin: 'Copetin',
        title: 'Title here',
        description: 'Some description',
    },
    argTypes: {
        legend: {
            options: ['none', 'top', 'bottom', 'left', 'right'],
            control: { type: 'select' },
            table: {
                type: {
                    summary: '"none" | "top" | "bottom" | "left" | "right"',
                },
            },
            description: 'Controls the visibility and placement of the chart legend. Use `"none"` to hide the legend completely, or choose a position relative to the chart area.',
        },
        items: {
            control: { type: 'object' },
            table: {
                type: {
                    summary: 'PieItem[] | PieItemWithColor[]',
                    detail: `
type PieItem = {
  value: number;
  label: string;
}

type PieItemWithColor = PieItem & {
  color: string;
}
          `,
                },
            },
            description: 'An array of data items for the chart. Each item must define a numeric value and a label. Optionally, a color can be provided per item to override the chart palette.',
        },
    },
};
export default meta;
export const Default = {
    args: {},
};
export const WithLongLegend = {
    args: {
        legend: 'right',
        items: [
            {
                value: 2587,
                label: 'Item 1: Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
            },
            {
                value: 12123,
                label: 'Item 2: Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
            },
            {
                value: 30000,
                label: 'Item 3: Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
            },
        ],
    },
};
export const WithLegend = {
    args: {
        legend: 'right',
    },
};
export const NoText = {
    args: {
        copetin: undefined,
        title: undefined,
        description: undefined,
    },
};
export const Colors = {
    args: {
        legend: 'right',
        items: [
            {
                value: 25,
                label: 'item 1',
                color: colorPalette.graphics?.primaryGraphic,
            },
            {
                value: 12,
                label: 'item 2',
                color: colorPalette.graphics?.successText,
            },
            {
                value: 30,
                label: 'item 3',
                color: colorPalette.graphics?.errorText,
            },
        ],
    },
};
export const Loading = {
    args: {
        loading: true,
    },
};
export const NoTextLoading = {
    args: {
        copetin: undefined,
        title: undefined,
        description: undefined,
        loading: true,
    },
};
export const WithLegendLoading = {
    args: {
        copetin: undefined,
        title: undefined,
        description: undefined,
        legend: 'right',
        loading: true,
    },
};
