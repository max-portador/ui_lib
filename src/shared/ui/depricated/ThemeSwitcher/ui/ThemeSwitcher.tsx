import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIcon from '@/shared/assets/icons/theme-light.svg';
import { Button } from '@/shared/ui/depricated/Button';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { Icon } from '@/shared/ui/depricated/Icon';

interface ThemeSwitcherProps {
    className?: string;
}

/**
 * Устарел, используем новый
 * @deprecated
 */
const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={onToggleHandler}
        >
            <Icon SVG={ThemeIcon} width={40} height={40} inverted />
        </Button>
    );
});

export { ThemeSwitcher };
