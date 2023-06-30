import { RouteProps } from 'react-router-dom';
import { UserRole } from '@/shared/const/router';

export type AppRoutesProps = RouteProps & {
    authOnly?: boolean;
    roles?: UserRole[];
};
