import { useContext } from 'react';

import { ThemeContext } from '../../context/ThemeContext';
import { Theme } from '../../../const/theme';

interface UseThemeResult {
    toggleTheme: (saveAction?: (theme: Theme) => void) => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = (saveAction?: (theme: Theme) => void) => {
        let newTheme: Theme;
        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.PURPLE;
                break;
            case Theme.PURPLE:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
        }
        setTheme?.(newTheme);
        saveAction?.(newTheme);
        // document.body.className = newTheme;
        // localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        toggleTheme,
        theme: theme || Theme.LIGHT,
    };
}
