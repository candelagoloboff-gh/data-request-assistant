const getTableCellStyles = (theme) => ({
    ...theme.typography.globalS,
    padding: theme.spacing(2, 3),
    textAlign: 'left',
    minWidth: '120px',
    borderBottom: `1px solid ${theme.palette.divider}`,
    borderRight: `1px solid ${theme.palette.divider}`,
    '&:last-child': {
        borderRight: 'none',
    },
    position: 'relative',
    '&.selectedCell': {
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-1px',
            left: '-1px',
            right: '-1px',
            top: '-1px',
            mixBlendMode: 'multiply',
            backgroundColor: `${theme.palette.new.background.elements.brand} !important`,
            border: `1px solid ${theme.palette.new.border.neutral.brand}`,
        },
    },
});
export const getEditorStyles = (theme) => ({
    '& .tiptap': {
        ...theme.typography.body1,
        borderRadius: 1,
        color: theme.palette.new.text.neutral.default,
        fontFamily: theme.typography.fontFamily,
        caretColor: theme.palette.new.action.button.background.primary.default,
        backgroundColor: theme.palette.new.background.elements.default,
        paddingX: 2,
        '::selection': {
            backgroundColor: theme.palette.new.action.background.brand.default,
        },
        '&[contenteditable="true"]': {
            paddingBottom: 1,
        },
        '&:focus': {
            outline: 'none',
        },
        // Placeholder
        '& p.is-editor-empty::before': {
            color: theme.palette.text.disabled,
            content: 'attr(data-placeholder)',
            height: 0,
            float: 'left',
            pointerEvents: 'none',
        },
        '& h1': {
            ...theme.typography.h5,
            fontWeight: 600,
        },
        '& h2': {
            ...theme.typography.h6,
            fontWeight: 600,
        },
        '& h3': {
            ...theme.typography.body1,
            fontWeight: 600,
        },
        '& h4': {
            ...theme.typography.body2,
            fontWeight: 600,
        },
        '& p': {
            margin: '1em 0',
        },
        '& ul, ol': {
            padding: '0 1rem',
            margin: '1rem 1rem 1rem .4rem',
            'li p': {
                marginTop: '0.25em',
                marginBottom: '0.25em',
            },
        },
        '& code': {
            backgroundColor: theme.palette.new.background.elements.default,
            borderRadius: '.25rem',
            fontFamily: 'JetBrainsMono, monospace',
            margin: '1.5rem 0',
            padding: '0.25em 0.3em',
            letterSpacing: '0.02em',
            fontSize: '0.9em',
        },
        '& blockquote': {
            position: 'relative',
            padding: '0 1rem',
            margin: '.75rem 0',
            marginLeft: '1rem',
            '&:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '-0.5rem',
                bottom: '-0.5rem',
                width: '0.25rem',
                backgroundColor: theme.palette.action.disabled,
                borderRadius: '8px',
            },
        },
        '& .mention': {
            color: '#1976D2',
            backgroundColor: '#E6F3FA',
            textDecoration: 'underline',
        },
        '.resizer': {
            opacity: 0,
            display: 'block',
            width: '16px',
            height: '16px',
            background: '#496BE3',
            position: 'absolute',
            border: '1px solid white',
            right: '-8px',
            bottom: '-8px',
            cursor: 'se-resize',
            zIndex: '100',
            transform: 'scale(0.5)',
            transition: 'opacity 150ms ease-in-out, transform 150ms ease-in-out',
            pointerEvents: 'auto',
        },
        '.react-renderer.node-resizable-media, .react-renderer.node-raw-html': {
            WebkitUserDrag: 'none',
            position: 'relative',
            'span[data-type="resizable-media"], a[data-type="resizable-media"], [data-type="raw-html"]': {
                position: 'relative',
                outline: '1px solid transparent',
                transition: 'outline 150ms ease-in-out',
            },
            '&:hover': {
                'span[data-type="resizable-media"], a[data-type="resizable-media"], [data-type="raw-html"]': {
                    outline: `3px solid ${theme.palette.new.action.button.background.primary.default}`,
                    outlineOffset: '-3px',
                },
                '.resizer': {
                    opacity: 1,
                    transform: 'scale(1)',
                },
            },
        },
        '.ProseMirror-focused .react-renderer.ProseMirror-selectednode': {
            'span[data-type="resizable-media"], a[data-type="resizable-media"], [data-type="raw-html"]': {
                outline: `3px solid ${theme.palette.new.action.button.background.primary.default}`,
                outlineOffset: '-3px',
            },
            '.resizer': {
                opacity: 1,
                transform: 'scale(1)',
            },
        },
        '& span[data-type="resizable-media"]:has(img), & a[data-type="resizable-media"]:has(img), & [data-type="raw-html"]:has(img)': {
            width: 'auto',
            borderRadius: 1,
            transition: 'outline 150ms ease-in-out',
            outline: `1px solid transparent`,
            maxWidth: '100%',
            '& img': {
                height: 'auto',
                borderRadius: 1,
                transition: 'outline 150ms ease-in-out',
                outline: `1px solid transparent`,
                userDrag: 'none',
                WebkitUserDrag: 'none',
                width: 'auto',
            },
        },
        '& span[data-type="resizable-media"]:has(video), & a[data-type="resizable-media"]:has(video), & [data-type="raw-html"]:has(video)': {
            width: 'auto',
            borderRadius: 1,
            transition: 'outline 150ms ease-in-out',
            outline: `1px solid transparent`,
            maxWidth: '100%',
            '& video': {
                height: 'auto',
                borderRadius: 1,
                transition: 'outline 150ms ease-in-out',
                outline: `1px solid transparent`,
                userDrag: 'none',
                WebkitUserDrag: 'none',
            },
        },
        '& span[data-type="resizable-media"]:has(iframe), & a[data-type="resizable-media"]:has(iframe), & [data-type="raw-html"]:has(iframe)': {
            width: 'auto',
            borderRadius: 1,
            transition: 'outline 150ms ease-in-out',
            outline: `1px solid transparent`,
            maxWidth: '100%',
            '& iframe': {
                width: '100%',
                maxHeight: '100%',
                display: 'block',
                borderRadius: 1,
                userDrag: 'none',
                WebkitUserDrag: 'none',
            },
        },
        // Table styles
        '& .tableWrapper': {
            overflowX: 'auto',
            margin: '1rem 0',
            maxWidth: `calc(100cqw - ${theme.spacing(4)})`,
        },
        '& table': {
            borderCollapse: 'collapse',
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
        },
        '& tbody': {
            backgroundColor: theme.palette.new.background.elements.default,
            '& p': {
                margin: 0,
            },
        },
        '& tr': {
            borderBottom: `1px solid ${theme.palette.divider}`,
            '&:last-child': {
                borderBottom: 'none',
            },
        },
        '& th': {
            fontWeight: theme.typography.fontWeightSemiBold,
            backgroundColor: theme.palette.new.action.background.neutral.hover,
            overflowWrap: 'break-word',
            ...getTableCellStyles(theme),
        },
        '& td': {
            overflowWrap: 'break-word',
            ...getTableCellStyles(theme),
        },
    },
});
