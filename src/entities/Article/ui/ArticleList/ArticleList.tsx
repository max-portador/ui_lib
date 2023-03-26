import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextSize } from '@/shared/ui/Text';
import { ArticleView } from '@/entities/Article/model/consts/consts';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
}

const getSkeletones = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    // eslint-disable-next-line react/no-array-index-key
    .fill(0).map((_, ind) => <ArticleListItemSkeleton className={cls.card} view={view} key={ind} />);

const ArticleList = memo((props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.SMALL,
        target,
    } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    // eslint-disable-next-line i18next/no-literal-string
    return (
        // @ts-ignore
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
        >
            {articles.map((item) => (
                <ArticleListItem
                    article={item}
                    view={view}
                    className={cls.card}
                    target={target}
                    key={item.id}
                />
            ))}

            {isLoading && getSkeletones(view)}
        </div>

    );
});

export { ArticleList };
