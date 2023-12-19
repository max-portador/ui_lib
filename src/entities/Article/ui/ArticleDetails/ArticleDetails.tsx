import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { fetchArticleById } from '../../model/services/fetchArticleById/fetchArticleById';
import { articleDetailsReducer } from '../../model/slice/articleDetailsSlice';
import {
    getArticleDetailsData,
    getArticleDetailsError,
    getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticleDetails.module.scss';
import { ArticleDetailsDeprecated } from './ArticleDetailsDeprecated/ArticleDetailsDeprecated';
import { ArticleDetailsRedesigned } from './ArticleDetailsRedesigned/ArticleDetailsRedesigned';

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

        useInitialEffect(() => {
            dispatch(fetchArticleById(id));
        });

        return (
            <DynamicModuleLoader reducers={reducers}>
                <VStack
                    gap={16}
                    max
                    className={classNames(cls.ArticleDetails, {}, [className])}
                >
                    <ToggleFeatures
                        feature="isAppRedesigned"
                        on={
                            <ArticleDetailsRedesigned
                                isLoading={isLoading}
                                article={article}
                                error={error}
                            />
                        }
                        off={
                            <ArticleDetailsDeprecated
                                isLoading={isLoading}
                                article={article}
                                error={error}
                            />
                        }
                    />
                </VStack>
            </DynamicModuleLoader>
        );
    },
);

export { ArticleDetails };
