import React, { memo } from 'react';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface ArticleAdditionalInfoProps {
    className?: string;
}

const ArticleAdditionalSkeletons = memo((props: ArticleAdditionalInfoProps) => {
    const { className } = props;
    return (
        <VStack gap={32} className={className}>
            <HStack gap={8}>
                <Skeleton width="100%" height={32} />
                <Skeleton width="100%" height={32} />
                <Skeleton width="100%" height={32} />
            </HStack>
            <Skeleton width="100%" height={32} />
            <Skeleton width="100%" height={32} />
        </VStack>
    );
});

export { ArticleAdditionalSkeletons };
