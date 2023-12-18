import React, { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { Text, TextAlign, TextSize } from '@/shared/ui/depricated/Text';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { Skeleton as SkeletonRe } from '@/shared/ui/redesigned/Skeleton';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/depricated/Icon';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { ArticleBlockType } from '../../model/consts/consts';
import { ArticleCodeBlockComponent } from '../ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { ArticleImageBlockComponent } from '../ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { ArticleBlock } from '../../model/types/article';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticleDetails.module.scss';

interface ArticleDetailsProps {
    id?: string;
    className?: string;
}

const reducers: ReducersList = {
    articleDetails: articleDetailsReducer,
};

const ArticleDetails: FC<ArticleDetailsProps> = memo(
    (props: ArticleDetailsProps) => {
        const { id, className } = props;
        const { t } = useTranslation();
        const dispatch = useAppDispatch();
        const isLoading = useSelector(getArticleDetailsIsLoading);
        const article = useSelector(getArticleDetailsData);
        const error = useSelector(getArticleDetailsError);

        const renderBlock = useCallback((block: ArticleBlock) => {
            switch (block.type) {
                case ArticleBlockType.CODE:
                    return (
                        <ArticleCodeBlockComponent
                            className={cls.block}
                            block={block}
                            key={block.id}
                        />
                    );

                case ArticleBlockType.IMAGE:
                    return (
                        <ArticleImageBlockComponent
                            className={cls.block}
                            block={block}
                            key={block.id}
                        />
                    );

                case ArticleBlockType.TEXT:
                    return (
                        <ArticleTextBlockComponent
                            className={cls.block}
                            block={block}
                            key={block.id}
                        />
                    );
                default:
                    return null;
            }
        }, []);

        useInitialEffect(() => {
            dispatch(fetchArticleById(id));
        });

        let content;

        if (isLoading) {
            content = (
                <ToggleFeatures
                    feature="isAppRedesigned"
                    on={
                        <VStack max gap={8}>
                            <HStack max justify="center">
                                <SkeletonRe
                                    className={cls.avatar}
                                    width={200}
                                    height={200}
                                    border="50%"
                                />
                            </HStack>
                            <SkeletonRe
                                className={cls.title}
                                width={300}
                                height={32}
                            />
                            <SkeletonRe
                                className={cls.title}
                                width={600}
                                height={24}
                            />
                            <SkeletonRe
                                className={cls.skeleton}
                                width="100%"
                                height={200}
                            />
                            <SkeletonRe
                                className={cls.skeleton}
                                width="100%"
                                height={200}
                            />
                        </VStack>
                    }
                    off={
                        <div>
                            <Skeleton
                                className={cls.avatar}
                                width={200}
                                height={200}
                                border="50%"
                            />
                            <Skeleton
                                className={cls.title}
                                width={300}
                                height={32}
                            />
                            <Skeleton
                                className={cls.title}
                                width={600}
                                height={24}
                            />
                            <Skeleton
                                className={cls.skeleton}
                                width="100%"
                                height={200}
                            />
                            <Skeleton
                                className={cls.skeleton}
                                width="100%"
                                height={200}
                            />
                        </div>
                    }
                />
            );
        } else if (error) {
            content = (
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке страницы')}
                />
            );
        } else {
            // eslint-disable-next-line i18next/no-literal-string
            content = (
                <>
                    <HStack max justify="center">
                        <Avatar
                            src={article?.img}
                            size={200}
                            className={cls.avatar}
                        />
                    </HStack>
                    <VStack gap={4} max data-testid="ArticleDetails.Info">
                        <Text
                            title={article?.title}
                            text={article?.subtitle}
                            size={TextSize.L}
                        />
                        <HStack gap={8}>
                            <Icon SVG={EyeIcon} />
                            <Text text={String(article?.views)} />
                        </HStack>
                        <HStack gap={8}>
                            <Icon SVG={CalendarIcon} />
                            <Text text={article?.createdAt} />
                        </HStack>
                    </VStack>
                    {article?.blocks.map((block) => renderBlock(block))}
                </>
            );
        }

        return (
            <DynamicModuleLoader reducers={reducers}>
                <VStack
                    gap={16}
                    max
                    className={classNames(cls.ArticleDetails, {}, [className])}
                >
                    {content}
                </VStack>
            </DynamicModuleLoader>
        );
    },
);

export { ArticleDetails };
