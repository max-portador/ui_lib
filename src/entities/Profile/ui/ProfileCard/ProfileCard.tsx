import React, { FC } from 'react';
import { ToggleFeatures } from '@/shared/lib/features';
import { ProfileCardDeprecated } from '../ProfileCardDeprecated/ProfileCardDeprecated';
import { ProfileCardRedesigned } from '../ProfileCardRedesigned/ProfileCardRedesigned';
import type { ProfileCardProps } from '../../model/types/types';

const ProfileCard: FC<ProfileCardProps> = (props) => {
    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={<ProfileCardRedesigned {...props} />}
            off={<ProfileCardDeprecated {...props} />}
        />
    );
};

export { ProfileCard };
