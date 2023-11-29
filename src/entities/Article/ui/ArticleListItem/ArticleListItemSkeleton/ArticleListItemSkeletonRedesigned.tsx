import React, { memo } from 'react';
import { ArticleView } from '@/entities/Article';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card } from '@/shared/ui/redesigned/Card';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import cls from '../redesigned/ArticleListItem.module.scss';
import { VStack } from '@/shared/ui/redesigned/Stack';

interface ArticleListItemSkeletonRedesignedProps {
    className?: string;
    view: ArticleView;
}

const ArticleListItemSkeletonRedesigned = memo(
    (props: ArticleListItemSkeletonRedesignedProps) => {
        const { className, view } = props;

        if (view === 'BIG') {
            return (
                <Card
                    className={classNames(cls.ArticleListItem, {}, [
                        className,
                        cls[view],
                    ])}
                    padding="24"
                    max
                >
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
                    <Skeleton width={250} height={24} className={cls.title} />
                    <Skeleton height={200} className={cls.img} />
                    <div className={cls.footer}>
                        <Skeleton width={200} height={36} />
                    </div>
                </Card>
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
                    <VStack className={cls.img}>
                        <Skeleton width="100%" height={200} />
                    </VStack>
                    <VStack gap={8} className={cls.info} max>
                        <Skeleton height={24} className={cls.title} />
                        <VStack gap={8} className={cls.footer} max>
                            <Skeleton height={24} />
                            <Skeleton height={24} />
                        </VStack>
                    </VStack>
                </Card>
            </div>
        );
    },
);

export { ArticleListItemSkeletonRedesigned };
