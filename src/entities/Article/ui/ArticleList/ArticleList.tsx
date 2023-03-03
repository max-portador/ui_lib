import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text';
import { useTranslation } from 'react-i18next';
import { List, ListRowProps, WindowScroller } from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import cls from './ArticleList.module.scss';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading: boolean,
    view?: ArticleView,
    target?: HTMLAttributeAnchorTarget,
    virtualized?: boolean,
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
        virtualized = true,
    } = props;

    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemsPerRow = isBig ? 1 : 4;
    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemsPerRow);

    const rowRenderer = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];
        const fromIndex = index * itemsPerRow;
        const toIndex = Math.min(fromIndex + itemsPerRow, articles.length);

        for (let i = fromIndex; i < toIndex; i += 1) {
            items.push(<ArticleListItem
                article={articles[i]}
                view={view}
                className={cls.card}
                target={target}
                key={articles[i].id}
            />);
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>

        );
    };

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
        <WindowScroller
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                width, height, registerChild, scrollTop, onChildScroll,
            }) => {
                return (
                    <div
                        className={classNames(cls.ArticleList, {}, [className, cls[view]])}
                        // @ts-ignore
                        ref={registerChild}
                    >
                        {virtualized
                            ? (
                                // @ts-ignore
                                <List
                                    height={height}
                                    rowCount={rowCount}
                                    rowHeight={isBig ? 780 : 330}
                                    rowRenderer={rowRenderer}
                                    width={width ? width - 80 : 700}
                                    autoHeight
                                    onScroll={onChildScroll}
                                    scrollTop={scrollTop}
                                />
                            )
                            : (
                                <>
                                    {articles.map((item) => (
                                        <ArticleListItem
                                            article={item}
                                            view={view}
                                            className={cls.card}
                                            target={target}
                                            key={item.id}
                                        />
                                    ))}
                                </>
                            )}

                        {isLoading && getSkeletones(view)}
                    </div>
                );
            }}
        </WindowScroller>

    );
});

export { ArticleList };
