export {
    ArticleDetails,
} from './ui/ArticleDetails/ArticleDetails';
export {
    ArticleList,
} from './ui/ArticleList/ArticleList';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/articleDetails';

export type { Article } from './model/types/article';
export { ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
