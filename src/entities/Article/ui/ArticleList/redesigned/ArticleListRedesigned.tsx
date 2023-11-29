import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import { ArticleListItemSkeleton } from '../../ArticleListItem/ArticleListItemSkeleton/ArticleListItemSkeleton';
import { ArticleListProps } from '../../../model/types/article';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleListItem } from '../../ArticleListItem/ArticleListItem';
import { HStack } from '@/shared/ui/redesigned/Stack';
import cls from './ArticleListRedesigned.module.scss';

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

const ArticleListRedesigned = memo((props: ArticleListProps) => {
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
                <Text size="l" title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        // @ts-ignore
        <HStack
            wrap="wrap"
            gap={16}
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
        </HStack>
    );
});

export { ArticleListRedesigned };
