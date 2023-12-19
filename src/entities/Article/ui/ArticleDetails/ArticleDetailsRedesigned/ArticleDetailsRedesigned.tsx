import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Article } from '@/entities/Article';
import { renderBlock } from '../renderBlock';
import cls from './ArticleDetailsRedesigned.module.scss';
import { AppImage } from '@/shared/ui/redesigned/AppImage';

interface ArticleDetailsRedesignedProps {
    isLoading?: boolean;
    article?: Article;
    error?: string;
}

const ArticleDetailsRedesigned: FC<ArticleDetailsRedesignedProps> = memo(
    (props: ArticleDetailsRedesignedProps) => {
        const { t } = useTranslation();
        const { isLoading, article, error } = props;

        if (isLoading) {
            return (
                <VStack max gap={8}>
                    <HStack max justify="center">
                        <Skeleton
                            className={cls.avatar}
                            width={200}
                            height={200}
                            border="50%"
                        />
                    </HStack>
                    <Skeleton className={cls.title} width={300} height={32} />
                    <Skeleton className={cls.title} width={600} height={24} />
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
                </VStack>
            );
        }
        if (error) {
            return (
                <Text
                    align="center"
                    title={t('Произошла ошибка при загрузке страницы')}
                />
            );
        }
        // eslint-disable-next-line i18next/no-literal-string
        return (
            <>
                <Text title={article?.title} size="l" bold />
                <Text title={article?.subtitle} />
                <HStack max justify="center">
                    <AppImage
                        src={article?.img}
                        fallback={
                            <Skeleton width="100%" height={420} border="16px" />
                        }
                        className={cls.img}
                    />
                </HStack>
                <VStack gap={4} max data-testid="ArticleDetails.Info">
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
    },
);

export { ArticleDetailsRedesigned };
