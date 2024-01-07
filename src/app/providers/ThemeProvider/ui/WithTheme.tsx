import { ComponentType } from 'react';
import { useJsonSettings } from '@/entities/User';
import { ThemeProvider } from './ThemeProvider';

export const withTheme = (Component: ComponentType) => {
    return () => {
        const { theme } = useJsonSettings();
        return (
            <ThemeProvider initialTheme={theme}>
                <Component />
            </ThemeProvider>
        );
    };
};
