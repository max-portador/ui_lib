import React, { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Text, TextAlign, TextSize } from '@/shared/ui/depricated/Text';
import { Skeleton } from '@/shared/ui/depricated/Skeleton';
import { Avatar } from '@/shared/ui/depricated/Avatar';
import EyeIcon from '@/shared/assets/icons/eye-20-20.svg';
import CalendarIcon from '@/shared/assets/icons/calendar-20-20.svg';
import { Icon } from '@/shared/ui/depricated/Icon';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Article } from '@/entities/Article';
import { renderBlock } from '../renderBlock';
import cls from './ArticleDetailsDeprecated.module.scss';

interface ArticleDetailsDeprecatedProps {
    isLoading?: boolean;
    article?: Article;
    error?: string;
}

const ArticleDetailsDeprecated: FC<ArticleDetailsDeprecatedProps> = memo(
    (props: ArticleDetailsDeprecatedProps) => {
        const { t } = useTranslation();
        const { isLoading, article, error } = props;

        if (isLoading) {
            return (
                <div>
                    <Skeleton
                        className={cls.avatar}
                        width={200}
                        height={200}
                        border="50%"
                    />
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
                </div>
            );
        }
        if (error) {
            return (
                <Text
                    align={TextAlign.CENTER}
                    title={t('Произошла ошибка при загрузке страницы')}
                />
            );
        }
        // eslint-disable-next-line i18next/no-literal-string
        return (
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
    },
);

export { ArticleDetailsDeprecated };
