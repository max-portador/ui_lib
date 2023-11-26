export { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
export { ArticleList } from './ui/ArticleList/ArticleList';

export { articleDetailsReducer } from './model/slice/articleDetailsSlice';
export { getArticleDetailsData } from './model/selectors/articleDetails';

export {
    ArticleSortFields,
    ArticleType,
    ArticleBlockType,
} from './model/consts/consts';
export type { Article, ArticleView } from './model/types/article';
export type { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
