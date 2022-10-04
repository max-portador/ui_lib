import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}

function Navbar({ className }: NavbarProps) {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div className={classNames(cls.links, {}, [])}>
                {t('Links')}
            </div>
        </div>
    );
}

export { Navbar };
