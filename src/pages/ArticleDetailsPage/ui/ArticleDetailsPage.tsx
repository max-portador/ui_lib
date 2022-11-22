import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { t } = useTranslation('article');

    const {
        className,
        children,
    } = props;
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            ARTICLE DETAIL PAGE
        </div>
    );
};

export default memo(ArticleDetailsPage);
