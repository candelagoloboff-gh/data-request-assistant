import { type Theme } from '@mui/material';
declare const customShadow: {
    outlinedFocusedVisible: string;
    containedFocusedVisible: string;
};
declare const commonButtonRootStyle: () => {
    fontFamily: string;
    fontSize: number;
    lineHeight: string;
    fontWeight: number;
    letterSpacing: number;
    boxShadow: string;
    borderRadius: string;
    borderColor: string;
    '&:hover': {
        boxShadow: string;
    };
};
declare const primaryVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string;
        backgroundColor?: undefined;
        color?: undefined;
        svg?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        boxShadow: string;
        color: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
    };
    color: string;
    backgroundColor: string;
    svg: {
        stroke: string;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
        svg: {
            stroke: string;
        };
    };
};
declare const secondaryVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string;
        backgroundColor?: undefined;
        color?: undefined;
        borderColor?: undefined;
        svg?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        borderColor: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
        boxShadow?: undefined;
    } | {
        boxShadow: string;
        backgroundColor: string;
        color: string;
        borderColor: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
    };
    border: string;
    color: string;
    borderColor: string;
    backgroundColor: string;
    svg: {
        stroke: string;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
        borderColor: string;
        svg: {
            stroke: string;
        };
    };
};
declare const tertiaryVariantStyle: (theme: Theme, isIconButton?: boolean) => {
    [x: string]: string | {
        stroke: string;
        backgroundColor?: undefined;
        color?: undefined;
        border?: undefined;
        svg?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
        boxShadow?: undefined;
    } | {
        boxShadow: string;
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
    };
    color: string;
    backgroundColor: string;
    border: string;
    svg: {
        stroke: string;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
    };
};
declare const successVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string;
        backgroundColor?: undefined;
        color?: undefined;
        border?: undefined;
        svg?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        boxShadow: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
    };
    color: string;
    backgroundColor: string;
    border: string;
    svg: {
        stroke: string;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
    };
};
declare const errorVariantStyle: (theme: Theme) => {
    [x: string]: string | {
        stroke: string;
        backgroundColor?: undefined;
        color?: undefined;
        border?: undefined;
        svg?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
        boxShadow?: undefined;
    } | {
        backgroundColor: string;
        boxShadow: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
        stroke?: undefined;
    };
    color: string;
    backgroundColor: string;
    border: string;
    svg: {
        stroke: string;
    };
    '&:hover': {
        backgroundColor: string;
        color: string;
        border: string;
        svg: {
            stroke: string;
        };
    };
};
declare const buttonVariants: (theme: Theme, isIconButton?: boolean) => {
    props: {
        variant: string;
    };
    style: {
        [x: string]: string | {
            stroke: string;
            backgroundColor?: undefined;
            color?: undefined;
            svg?: undefined;
            boxShadow?: undefined;
        } | {
            backgroundColor: string;
            color: string;
            svg: {
                stroke: string;
            };
            stroke?: undefined;
            boxShadow?: undefined;
        } | {
            backgroundColor: string;
            boxShadow: string;
            color: string;
            svg: {
                stroke: string;
            };
            stroke?: undefined;
        };
        color: string;
        backgroundColor: string;
        svg: {
            stroke: string;
        };
        '&:hover': {
            backgroundColor: string;
            color: string;
            svg: {
                stroke: string;
            };
        };
    };
}[];
export { buttonVariants, commonButtonRootStyle, customShadow, primaryVariantStyle, secondaryVariantStyle, tertiaryVariantStyle, successVariantStyle, errorVariantStyle, };
