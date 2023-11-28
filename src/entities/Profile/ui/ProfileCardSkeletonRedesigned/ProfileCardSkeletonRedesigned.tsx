import React, { memo } from 'react';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack, VStack } from '@/shared/ui/redesigned/Stack';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

const ProfileCardSkeletonRedesigned = memo(() => {
    return (
        <Card max padding="24">
            <VStack gap={32}>
                <HStack justify="center" max>
                    <Skeleton border="100%" width={128} height={128} />
                </HStack>
                <HStack gap={32} max>
                    <VStack gap={16} max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                    <VStack gap={16} max>
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                        <Skeleton width="100%" height={38} />
                    </VStack>
                </HStack>
            </VStack>
        </Card>
    );
});

export { ProfileCardSkeletonRedesigned };
