export {
    getUserAuthData,
    useUserAuthData,
} from './model/selectors/getUserAuthData/getUserAuthData';
export {
    useJsonSettings,
    getJsonSettings,
} from './model/selectors/getJsonSettings/getJsonSettings';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';

export {
    isUserAdmin,
    isUserManager,
    getUserRoles,
} from './model/selectors/roleSelectors/roleSelectors';

export {
    userActions,
    userReducer,
    useUserActions,
} from './model/slice/userSlice';

export { saveJsonSettings } from './model/services/saveJsonSettings';
export { initAuthData } from './model/services/initAuthData';

export type { User, UserSchema } from './model/types/user';
