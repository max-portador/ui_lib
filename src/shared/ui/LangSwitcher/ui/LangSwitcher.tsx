import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/ui/Button';
import cls from './LangSwitcher.module.scss';

export enum LangSwitcherTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    RED = 'red'
}

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
    theme?: LangSwitcherTheme
}

const LangSwitcher = (props: LangSwitcherProps) => {
    const { className, short, theme = LangSwitcherTheme.SECONDARY } = props;
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className, cls[theme]])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            { short ? t('Короткий язык') : t('Язык')}
        </Button>
    );
};

export { LangSwitcher };
