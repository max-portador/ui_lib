import { User } from 'entities/User';

export enum ArticleSortFields {
    VIEWS = 'views',
    TITLE = 'title',
    CREATED = 'createdAt'
}

export enum ArcticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

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

export enum ArticleType {
    ALL= 'ALL',
    IT = 'IT',
    SCIENCE = 'SCIENCE',
    ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
    BIG = 'BIG',
    SMALL = 'SMALL'
}

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
