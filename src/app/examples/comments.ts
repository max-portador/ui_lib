import { Comment } from '@/entities/Comment';
import { userExamples } from './users';

export const commentsExamples: Comment[] = [
    {
        user: userExamples[1],
        text: 'first comment',
        id: '1',
    },
    {
        user: userExamples[2],
        text: 'second comment',
        id: '2',
    },
];
