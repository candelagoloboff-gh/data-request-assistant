/** Creates a HuGo MUI theme and returns a ThemeProvider component for it. */
declare function useHuGoTheme(options?: {
    mode?: 'light' | 'dark';
    baseColor?: string;
}): {
    HuGoThemeProvider: {
        ({ children }: {
            children: React.ReactNode;
        }): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
export { useHuGoTheme };
