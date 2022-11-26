import React, { FC, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage: FC<ArticleDetailsPageProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation('article-details');
    const { id } = useParams<{id: string}>();

    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            { id ? <ArticleDetails id={id} /> : t('Статья не найдена')}
        </div>
    );
};

export default memo(ArticleDetailsPage);
