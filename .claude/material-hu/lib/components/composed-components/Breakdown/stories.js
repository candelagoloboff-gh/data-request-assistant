import { colorPalette } from '../../../theme/hugo/colors';
import Breakdown from '.';
const meta = {
    component: Breakdown,
    title: 'Composed Components/Charts/Breakdown',
    tags: ['autodocs'],
    args: {
        items: [
            {
                value: 25,
                label: 'item 1',
            },
            {
                value: 0,
                label: 'item 2',
            },
            {
                value: 30,
                label: 'item 3',
            },
        ],
    },
    argTypes: {
        items: {
            control: { type: 'object' },
            table: {
                type: {
                    summary: 'BreakdownItem[] | BreakdownItemWithColor[]',
                    detail: `
type BreakdownItem = {
  value: number;
  label: string;
}

type BreakdownItemWithColor = BreakdownItem & {
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
export const Colors = {
    args: {
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
export const LongText = {
    args: {
        items: [
            {
                value: 2587,
                label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
                color: colorPalette.graphics?.primaryGraphic,
            },
            {
                value: 12123,
                label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
                color: colorPalette.graphics?.successText,
            },
            {
                value: 30000,
                label: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus.',
                color: colorPalette.graphics?.errorText,
            },
        ],
    },
};
