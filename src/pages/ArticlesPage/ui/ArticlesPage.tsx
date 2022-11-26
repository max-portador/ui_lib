import React, {
    FC, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { $api } from 'shared/api/api';
import { useSelector } from 'react-redux';
import { Article } from 'entities/Article';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const prefix = '/articles';
const dot = '.';

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { t } = useTranslation('article');
    const [articles, setArticles] = useState<Article[]>([]);

    const {
        className,
        children,
    } = props;

    useEffect(() => {
        $api.get(prefix).then((res) => {
            setArticles(res.data);
        });
    });

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {articles.map((article, id) => (
                <AppLink to={`${prefix}${article.id}`} key={article.id}>
                    {id + 1}
                    {dot}
                    {article.title}
                </AppLink>
            ))}
        </div>
    );
};

export default memo(ArticlesPage);
