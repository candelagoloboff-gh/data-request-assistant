export const calculateFillPercentage = (value) => {
    const clampedValue = Math.max(-100, Math.min(100, value));
    return (clampedValue + 100) / 2;
};
