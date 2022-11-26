export enum ArcticleBlockType {
    CODE = 'CODE',
    IMAGE = 'IMAGE',
    TEXT = 'TEXT'
}

export interface ArcticleBlockBase {
    id: string,
    type: ArcticleBlockType
}

export interface ArticleCodeBlock extends ArcticleBlockBase{
    type: ArcticleBlockType.CODE
    code: string
}

export interface ArticleImageBlock extends ArcticleBlockBase{
    type: ArcticleBlockType.IMAGE
    src: string,
    title: string
}

export interface ArticleTextBlock extends ArcticleBlockBase{
    type: ArcticleBlockType.TEXT,
    title?: string,
    paragraphs: string[]
}

export type ArticleBlock = ArticleCodeBlock | ArticleImageBlock | ArticleTextBlock

export enum ArticleType {
    IT = 'IT',
    SCIENSE = 'SCIENCE',
    ECONIMICS = 'ECONOMICS'
}

export interface Article {
    id: string,
    title: string,
    subtitle: string,
    img: string,
    views: number,
    createdAt: string,
    type: ArticleType[],
    blocks: ArticleBlock[];
}
