import React, {
    FC, memo, useEffect, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Article, ArticleList, ArticleView } from 'entities/Article';
import { article, article2 } from 'shared/config/storybook/examples/article';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const prefix = '/articles';

const ArticlesPage: FC<ArticlesPageProps> = (props) => {
    const { t } = useTranslation('article');
    const [articles, setArticles] = useState<Article[]>(new Array(18).fill(0)
        .map((_, i) => (i % 2
            ? { ...article, id: i.toString() }
            : { ...article2, id: i.toString() })));
    const [isLoading, setIsLoading] = useState(false);

    const {
        className,
    } = props;

    useEffect(() => {
        if (__PROJECT__ !== 'storybook') {
        // setIsLoading(true);
        // $api.get(prefix).then((res) => {
        //     setArticles(res.data);
        //     setIsLoading(false);
        // });
        } else {
            setArticles([article]);
        }
    }, []);

    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            <ArticleList articles={articles} isLoading={isLoading} view={ArticleView.BIG} />
        </div>
    );
};
export default memo(ArticlesPage);
