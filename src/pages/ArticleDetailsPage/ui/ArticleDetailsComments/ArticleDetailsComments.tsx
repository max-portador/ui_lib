import React, { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated, TextSize } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { AddCommentForm } from '@/features/AddCommentForm';
import { CommentList } from '@/entities/Comment';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { fetchCommentsByArticleId } from '../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { VStack } from '@/shared/ui/redesigned/Stack';
import { getArticleComments } from '../../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../../model/selectors/comments';
import { addCommentForArticle } from '../../model/services/addCommentForArticle/addCommentForArticle';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleDetalisCommentsProps {
    className?: string;
    id: string;
}

const ArticleDetailsComments = memo((props: ArticleDetalisCommentsProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();

    const { className, id } = props;

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleDetailsCommentsIsLoading);

    const onSendComment = useCallback(
        (text: string) => {
            dispatch(addCommentForArticle(text));
        },
        [dispatch],
    );

    return (
        <VStack gap={16} max className={classNames('', {}, [className])}>
            <ToggleFeatures
                feature="isAppRedesigned"
                on={<Text size="l" title={t('Комментарии')} />}
                off={
                    <TextDeprecated
                        size={TextSize.L}
                        title={t('Комментарии')}
                    />
                }
            />

            <AddCommentForm onSendComment={onSendComment} />
            <CommentList isLoading={commentsIsLoading} comments={comments} />
        </VStack>
    );
});

export { ArticleDetailsComments };
