import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    Button as BtnDeprecated,
    ButtonTheme,
} from '@/shared/ui/depricated/Button';
import cls from './LangSwitcher.module.scss';
import { ToggleFeatures } from '@/shared/lib/features';
import { Button } from '@/shared/ui/redesigned/Button';

export enum LangSwitcherTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red',
}

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
    theme?: LangSwitcherTheme;
}

const LangSwitcher = memo((props: LangSwitcherProps) => {
    const { className, short, theme = LangSwitcherTheme.SECONDARY } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <Button variant="clear" onClick={toggle}>
                    {short ? t('Короткий язык') : t('Язык')}
                </Button>
            }
            off={
                <BtnDeprecated
                    className={classNames('', {}, [className, cls[theme]])}
                    theme={ButtonTheme.CLEAR}
                    onClick={toggle}
                >
                    {short ? t('Короткий язык') : t('Язык')}
                </BtnDeprecated>
            }
        />
    );
});

export { LangSwitcher };
