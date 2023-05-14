import React, { HTMLAttributeAnchorTarget, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink';
import { Text } from '@/shared/ui/Text';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import { Icon } from '@/shared/ui/Icon';
import { Card } from '@/shared/ui/Card';
import { useHover } from '@/shared/lib/hooks/useHover';
import { Avatar } from '@/shared/ui/Avatar';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { ArcticleBlockType, ArticleView } from '../../model/consts/consts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/article';
import cls from './ArticleListItem.module.scss';
import { RoutePath } from '@/shared/const/router';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget
}

const ArticleListItem = memo((props: ArticleListItemProps) => {
    const { t } = useTranslation();
    const [bindHover] = useHover();
    const {
        className,
        article,
        view,
        target,
    } = props;

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon SVG={EyeIcon} />
        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find((block) => block.type === ArcticleBlockType.TEXT) as ArticleTextBlock;
        return (
            <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent block={textBlock} className={cls.textBlock} />
                    )}
                    <div className={cls.footer}>
                        <AppLink
                            target={target}
                            to={RoutePath.article_details + article.id}
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
        <div {...bindHover} className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <AppLink
                target={target}
                to={RoutePath.article_details + article.id}
            >
                <Card className={cls.card}>
                    <div className={cls.imageWrapper}>
                        <img src={article.img} alt={article.title} className={cls.img} />
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

export { ArticleListItem };
