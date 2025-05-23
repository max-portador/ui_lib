import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/depricated/AppLink';
import { Text } from '@/shared/ui/depricated/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/depricated/Icon';
import { Card } from '@/shared/ui/depricated/Card';
import { useHover } from '@/shared/lib/hooks/useHover';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/depricated/Button';
import { ArticleBlockType } from '../../../model/consts/consts';
import { ArticleTextBlockComponent } from '../../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleTextBlock } from '../../../model/types/article';
import { getRouteArticleDetails } from '@/shared/const/router';
import { AppImage } from '@/shared/ui/redesigned/AppImage';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import cls from './ArticleListItem.module.scss';
import type { ArticleListItemProps } from '../ArticleListItem';

/**
 * Устарел, используем новый
 * @deprecated
 */
const ArticleListItemDeprecated = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const [bindHover] = useHover();
    const { className, article, view, target } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text
                data-testid="ArticleViewsCount"
                text={String(article.views)}
                className={cls.views}
            />
            <Icon SVG={EyeIcon} />
        </>
    );

    if (view === 'BIG') {
        const textBlock = article.blocks.find(
            (block) => block.type === ArticleBlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div
                className={classNames(cls.ArticleListItem, {}, [
                    className,
                    cls[view],
                ])}
                data-testId="ArticleListItem"
            >
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text
                            text={article.user.username}
                            className={cls.username}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <AppImage
                        fallback={<Skeleton width="100%" height={350} />}
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
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={getRouteArticleDetails(article.id)}
                        >
                            <Button theme={ButtonTheme.OUTLINE}>
                                {`${t('Читать далее')}...`}
                            </Button>
                        </AppLink>

                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div
            // @ts-ignore
            {...bindHover}
            className={classNames(cls.ArticleListItem, {}, [
                className,
                cls[view],
            ])}
            data-testId="ArticleListItem"
        >
            <AppLink target={target} to={getRouteArticleDetails(article.id)}>
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <AppImage
                            fallback={<Skeleton width={200} height={200} />}
                            src={article.img}
                            alt={article.title}
                            className={cls.img}
                        />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <div className={cls.infoWrapper}>
                        {types}
                        {views}
                    </div>
                    <Text text={article.title} className={cls.title} />
                </Card>
            </AppLink>
        </div>
    );
});

export { ArticleListItemDeprecated };
