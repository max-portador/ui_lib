import React, { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/depricated/Card';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import cls from '../deprecated/ArticleListItem.module.scss';

interface ArticleListItemSkeletonDeprecatedProps {
    className?: string;
    view: ArticleView;
}

/**
 * Устарел, используем новый
 * @deprecated
 */
const ArticleListItemSkeletonDeprecated = memo(
    (props: ArticleListItemSkeletonDeprecatedProps) => {
        const { className, view } = props;

        if (view === 'BIG') {
            return (
                <div
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                >
                    <Card className={cls.card}>
                        <div className={cls.header}>
                            <Skeleton width={30} height={30} border="50%" />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.username}
                            />
                            <Skeleton
                                width={150}
                                height={16}
                                className={cls.date}
                            />
                        </div>
                        <Skeleton
                            width={250}
                            height={24}
                            className={cls.title}
                        />
                        <Skeleton height={200} className={cls.img} />
                        <div className={cls.footer}>
                            <Skeleton width={200} height={36} />
                        </div>
                    </Card>
                </div>
            );
        }

        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <Skeleton
                            width={200}
                            height={200}
                            className={cls.img}
                        />
                    </div>
                    <div className={cls.infoWrapper}>
                        <Skeleton width={130} height={16} />
                    </div>
                    <Skeleton width={150} height={16} className={cls.title} />
                </Card>
            </div>
        );
    },
);

export { ArticleListItemSkeletonDeprecated };
