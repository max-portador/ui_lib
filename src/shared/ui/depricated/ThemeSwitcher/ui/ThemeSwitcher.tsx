import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import ThemeIconDeprecated from '@/shared/assets/icons/theme-light.svg';
import ThemeIcon from '@/shared/assets/icons/theme.svg';
import { Button as ButtonDeprecated } from '@/shared/ui/depricated/Button';
import { Icon as IconDeprecated } from '@/shared/ui/depricated/Icon';
import { Button } from '@/shared/ui/redesigned/Button';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { ToggleFeatures } from '@/shared/lib/features';

interface ThemeSwitcherProps {
    className?: string;
}
const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();
    const dispatch = useAppDispatch();

    const onToggleHandler = useCallback(() => {
        toggleTheme((newTheme) => {
            dispatch(saveJsonSettings({ theme: newTheme }));
        });
    }, [toggleTheme, dispatch]);

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Icon
                    SVG={ThemeIcon}
                    clickable
                    onClick={onToggleHandler}
                    width={40}
                />
            }
            off={
                <ButtonDeprecated
                    className={classNames('', {}, [className])}
                    onClick={onToggleHandler}
                >
                    <IconDeprecated
                        SVG={ThemeIconDeprecated}
                        width={40}
                        height={40}
                        inverted
                    />
                </ButtonDeprecated>
            }
        />
    );
});

export { ThemeSwitcher };
