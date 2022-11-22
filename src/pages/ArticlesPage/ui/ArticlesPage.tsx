import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { t } = useTranslation('article');

    const {
        className,
        children,
    } = props;
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            ARTICLES PAGE
        </div>
    );
};

export default memo(ArticlesPage);
