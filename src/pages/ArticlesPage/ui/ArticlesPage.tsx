import React, {
    FC, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { $api } from 'shared/api/api';
import { Article } from 'entities/Article';
import { AppLink } from 'shared/ui/AppLink';
import { article } from 'shared/config/storybook/examples/article';
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
        if (__PROJECT__ !== 'storybook') {
            $api.get(prefix).then((res) => {
                setArticles(res.data);
            });
        } else {
            setArticles([article]);
        }
    }, []);

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {articles.map((article, id) => (
                <AppLink to={`${prefix}/${article.id}`} key={article.id}>
                    {id + 1}
                    {dot}
                    {article.title}
                </AppLink>
            ))}
        </div>
    );
};

export default memo(ArticlesPage);
