import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from 'react';
import { Alert, Box, Button, Chip, Divider, Stack, Switch, TextField, Typography, } from '@mui/material';
import { useAutoSave } from '.';
const STATUS_COLORS = {
    idle: 'default',
    saving: 'warning',
    saved: 'success',
    error: 'error',
};
const formatTimeAgo = (date) => {
    if (!date)
        return '—';
    const seconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (seconds < 5)
        return 'just now';
    if (seconds < 60)
        return `${seconds}s ago`;
    return `${Math.floor(seconds / 60)}m ago`;
};
const useMockSave = (saveDelayMs, failNext) => {
    const [savedValue, setSavedValue] = useState('Hello world');
    const [saveLog, setSaveLog] = useState([]);
    const onSave = async (v) => {
        const timestamp = new Date().toLocaleTimeString();
        await new Promise((resolve, reject) => setTimeout(() => failNext ? reject(new Error('Simulated error')) : resolve(undefined), saveDelayMs));
        if (!failNext) {
            setSavedValue(v);
            setSaveLog(prev => [
                `[${timestamp}] Saved: "${v.length > 40 ? `${v.slice(0, 40)}…` : v}"`,
                ...prev.slice(0, 9),
            ]);
        }
    };
    return { savedValue, saveLog, onSave };
};
const AutoSaveDemo = ({ debounceMs = 2000, shouldFail = false, saveDelayMs = 800, }) => {
    const [failNext, setFailNext] = useState(shouldFail);
    const { savedValue, saveLog, onSave } = useMockSave(saveDelayMs, failNext);
    const [value, setValue] = useState(savedValue);
    const [now, setNow] = useState(Date.now());
    useEffect(() => {
        const interval = setInterval(() => setNow(Date.now()), 1000);
        return () => clearInterval(interval);
    }, []);
    const { status, lastSavedAt, retrySave } = useAutoSave({
        value,
        savedValue,
        onSave,
        debounceMs,
    });
    return (_jsxs(Stack, { sx: { gap: 3, p: 2, maxWidth: 600 }, children: [_jsxs(Stack, { sx: { gap: 1 }, children: [_jsxs(Stack, { sx: {
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }, children: [_jsx(Typography, { variant: "subtitle2", children: "Article Body" }), _jsxs(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 1.5 }, children: [_jsx(Chip, { label: status, color: STATUS_COLORS[status], size: "small", variant: "outlined" }), _jsx(Typography, { variant: "caption", sx: { color: 'text.secondary', minWidth: 60, textAlign: 'right' }, children: formatTimeAgo(lastSavedAt) }, now)] })] }), _jsx(TextField, { multiline: true, minRows: 4, maxRows: 10, value: value, onChange: e => setValue(e.target.value), placeholder: "Type something\u2026 changes auto-save after debounce", fullWidth: true })] }), _jsx(Divider, {}), _jsx(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: "Debug panel" }), _jsxs(Stack, { sx: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    p: 1.5,
                    borderRadius: 1,
                    bgcolor: 'action.hover',
                }, children: [_jsx(Switch, { checked: failNext, onChange: (_, checked) => setFailNext(checked), size: "small" }), _jsx(Typography, { variant: "body2", children: "Simulate save failure" }), status === 'error' && (_jsx(Button, { size: "small", variant: "outlined", color: "error", onClick: retrySave, children: "Retry" }))] }), _jsx(Stack, { sx: { flexDirection: 'row', alignItems: 'center', gap: 2 }, children: _jsxs(Typography, { variant: "caption", sx: { color: 'text.secondary' }, children: ["Debounce: ", debounceMs, "ms \u00B7 Save delay: ", saveDelayMs, "ms"] }) }), _jsx(Box, { sx: { display: 'flex', gap: 1 }, children: _jsx(Alert, { severity: value === savedValue ? 'success' : 'info', sx: { flex: 1, py: 0 }, children: value === savedValue ? 'In sync with server' : 'Pending changes' }) }), saveLog.length > 0 && (_jsxs(Stack, { sx: { gap: 0.5 }, children: [_jsx(Typography, { variant: "caption", sx: { fontWeight: 600 }, children: "Save log" }), saveLog.map((entry, i) => (_jsx(Typography, { variant: "caption", sx: { fontFamily: 'monospace', color: 'text.secondary' }, children: entry }, i)))] }))] }));
};
const meta = {
    title: 'Hooks/useAutoSave',
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'Generic auto-save hook. Debounces value changes, tracks save status (idle/saving/saved/error) and lastSavedAt timestamp. Protects against data loss with beforeunload and flush-on-unmount.',
            },
        },
    },
};
export default meta;
export const Default = {
    render: () => _jsx(AutoSaveDemo, {}),
    parameters: {
        docs: {
            description: {
                story: 'Type in the text area — changes auto-save after a 2s debounce. The status chip and relative timestamp update in real time.',
            },
        },
    },
};
export const FastDebounce = {
    render: () => (_jsx(AutoSaveDemo, { debounceMs: 500, saveDelayMs: 300 })),
    parameters: {
        docs: {
            description: {
                story: 'Same behavior with a 500ms debounce and 300ms save delay for a snappier feel.',
            },
        },
    },
};
export const WithError = {
    render: () => _jsx(AutoSaveDemo, { shouldFail: true }),
    parameters: {
        docs: {
            description: {
                story: 'Starts with simulated failures enabled. Toggle the switch off and use the Retry button to recover.',
            },
        },
    },
};
export const SlowNetwork = {
    render: () => _jsx(AutoSaveDemo, { saveDelayMs: 3000 }),
    parameters: {
        docs: {
            description: {
                story: 'Simulates a slow network with a 3s save delay. The "saving" status stays visible longer.',
            },
        },
    },
};
