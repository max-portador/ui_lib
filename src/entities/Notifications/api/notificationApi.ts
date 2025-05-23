import type { Notification } from '../model/types/notifications';

import { rtkApi } from '@/shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getNotifications: build.query<Notification[], null>({
            query: () => ({
                url: '/notifications',
            }),
        }),
    }),
    overrideExisting: false,
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
