import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Text } from '@/shared/ui/redesigned/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { useHover } from '@/shared/lib/hooks/useHover';
import { Avatar } from '@/shared/ui/redesigned/Avatar';
import { Button } from '@/shared/ui/redesigned/Button';
import { ArticleBlockType } from '../../../model/consts/consts';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleTextBlock } from '../../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import type { ArticleListItemProps } from '../ArticleListItem';
import cls from './ArticleListItem.module.scss';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';

const ArticleListItemRedesigned = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const [bindHover] = useHover();
    const { className, article, view, target } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <HStack gap={8}>
            <Icon SVG={EyeIcon} />
            <Text
                data-testid="ArticleViewsCount"
                text={String(article.views)}
                className={cls.views}
            />
        </HStack>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <Card
                padding="24"
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testId="ArticleListItem"
            >
                <HStack max gap={8}>
                    <Avatar size={32} src={article.user.avatar} />
                    <Text text={article.user.username} bold />
                    <Text text={article.createdAt} />
                </HStack>
                <Text title={article.title} bold />
                <Text title={article.subtitle} size="s" />
                {types}
                <AppImage
                    fallback={<Skeleton width="100%" height={420} />}
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent
                        block={textBlock}
                        className={cls.textBlock}
                    />
                )}
                <HStack max justify="between" className={cls.footer}>
                    <AppLink
                        target={target}
                        to={getRouteArticleDetails(article.id)}
                    >
                        <Button variant="outline">
                            {`${t('Читать далее')}...`}
                        </Button>
                    </AppLink>

                    {views}
                </HStack>
            </Card>
        );
    }

    return (
        <AppLink
            target={target}
            to={getRouteArticleDetails(article.id)}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            // @ts-ignore
            {...bindHover}
            data-testId="ArticleListItem"
        >
            <Card className={cls.card} border="round">
                <AppImage
                    fallback={<Skeleton width={200} height={200} />}
                    src={article.img}
                    alt={article.title}
                    className={cls.img}
                />
                <VStack gap={4} className={cls.info} max>
                    <Text title={article.title} className={cls.title} />
                    <VStack gap={4} className={cls.footer} max>
                        <HStack justify="between" max>
                            <Text text={article.createdAt} />
                            {views}
                        </HStack>
                        <HStack gap={4}>
                            <Avatar size={32} src={article.user.avatar} />
                            <Text text={article.user.username} bold />
                        </HStack>
                    </VStack>
                </VStack>
            </Card>
        </AppLink>
    );
});

export { ArticleListItemRedesigned };
