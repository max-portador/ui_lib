import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleListProps, ArticleView } from '../../../model/types/article';
import { Text, TextSize } from '@/shared/ui/depricated/Text';
import { ArticleListItem } from '../../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';
import cls from './ArticleListDeprecated.module.scss';

const getSkeletones = (view: ArticleView) =>
    new Array(view === 'SMALL' ? 9 : 3)
        // eslint-disable-next-line react/no-array-index-key
        .fill(0)
        .map((_, ind) => (
            <ArticleListItemSkeleton
                className={cls.card}
                view={view}
                key={ind}
            />
        ));

/**
 * Устарел, используем новый
 * @deprecated
 */
const ArticleListDeprecated = memo((props: ArticleListProps) => {
    const { className, articles, isLoading, view = 'SMALL', target } = props;

    const { t } = useTranslation();

    if (!isLoading && !articles?.length) {
        return (
            <div
                className={classNames(cls.ArticleList, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <div
            className={classNames(cls.ArticleList, {}, [className, cls[view]])}
            data-testId="ArticleList"
        >
            {articles?.map((item) => (
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

export { ArticleListDeprecated };
