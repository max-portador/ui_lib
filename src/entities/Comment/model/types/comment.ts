// eslint-disable-next-line portador/layer-imports
import { User } from '@/entities/User';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
