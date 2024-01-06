import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import { ListBox } from '@/shared/ui/redesigned/Popups';
import { getFeatureFlag, updateFeatureFlags } from '@/shared/lib/features';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useUserAuthData } from '@/entities/User';
import { HStack } from '@/shared/ui/redesigned/Stack';
import { Text } from '@/shared/ui/redesigned/Text';
import { Skeleton } from '@/shared/ui/redesigned/Skeleton';

interface UiDesignSwitcherProps {
    className?: string;
}

type Mode = 'new' | 'old';
type Item = { content: string; value: Mode };

export const UiDesignSwitcher = memo((props: UiDesignSwitcherProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const isAppRedesigned = getFeatureFlag('isAppRedesigned');
    const dispatch = useAppDispatch();
    const authData = useUserAuthData();
    const [isLoading, setIsLoading] = useState(false);

    const items: Item[] = [
        {
            content: t('Новый'),
            value: 'new',
        },
        {
            content: t('Старый'),
            value: 'old',
        },
    ];

    const onChange = async (value: Mode) => {
        if (authData?.id) {
            setIsLoading(true);
            await dispatch(
                updateFeatureFlags({
                    userId: authData?.id,
                    features: {
                        isAppRedesigned: value === 'new',
                    },
                }),
            ).unwrap();
            setIsLoading(false);
        }
    };

    return (
        <HStack>
            <Text text={t('Вариант интерфейса')} />
            {isLoading ? (
                <Skeleton width={150} height={45} />
            ) : (
                <ListBox<Mode>
                    className={className}
                    value={isAppRedesigned ? 'new' : 'old'}
                    items={items}
                    onChange={onChange}
                />
            )}
        </HStack>
    );
});
