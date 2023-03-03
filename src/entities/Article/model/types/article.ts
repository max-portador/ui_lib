import { User } from 'entities/User';
import { ArcticleBlockType, ArticleType } from '../consts/consts';

export interface ArcticleBlockBase {
    id: string,
    type: ArcticleBlockType
}

export interface ArticleCodeBlock extends ArcticleBlockBase {
    type: ArcticleBlockType.CODE
    code: string
}

export interface ArticleImageBlock extends ArcticleBlockBase {
    type: ArcticleBlockType.IMAGE
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArcticleBlockBase {
    type: ArcticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    user: User,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[];
}
