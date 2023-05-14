import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button';

interface BugButtonProps {
    className?: string
}

const BugButton = ({ className }: BugButtonProps) => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();
    const throwError = () => {
        setError((prev) => !prev);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button
            onClick={throwError}
            className={classNames('', {}, [className])}
        >
            {t('Вызвать ошибку')}
        </Button>
    );
};

export default BugButton;
