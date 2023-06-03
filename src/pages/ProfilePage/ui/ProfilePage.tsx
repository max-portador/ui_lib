import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { EditableProfileCard, fetchProfileData, profileReducer } from '@/features/EditableProfileCard';
import { useInitialEffect } from '@/shared/lib/hooks/useInitialEffect';
import { Page } from '@/widgets/Page';

const reducers: ReducersList = {
    profile: profileReducer,
};

interface ProfilePageProps {
    className?: string;
}

const ProfilePage: FC<ProfilePageProps> = (props) => {
    const dispatch = useAppDispatch();
    const { id } = useParams<{ id: string }>();

    const {
        className,
    } = props;

    useInitialEffect(() => {
        if (id) {
            dispatch(fetchProfileData(id));
        }
    });

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page data-testid="ProfilePage" className={classNames('', {}, [className])}>
                <EditableProfileCard />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
