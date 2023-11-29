import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text as TextDeprecated } from '@/shared/ui/depricated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ArticleTextBlock } from '../../model/types/article';
import { ToggleFeatures } from '@/shared/lib/features';
import cls from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

const ArticleTextBlockComponent = memo(
    (props: ArticleTextBlockComponentProps) => {
        const { className, block } = props;

        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        className={classNames(
                            cls.ArticleTextBlockComponent,
                            {},
                            [className],
                        )}
                    >
                        {block.title && (
                            <Text title={block.title} className={cls.title} />
                        )}
                        {block.paragraphs.map((paragraph) => (
                            <Text
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        ))}
                    </div>
                }
                off={
                    <div
                        className={classNames(
                            cls.ArticleTextBlockComponent,
                            {},
                            [className],
                        )}
                    >
                        {block.title && (
                            <TextDeprecated
                                title={block.title}
                                className={cls.title}
                            />
                        )}
                        {block.paragraphs.map((paragraph) => (
                            <TextDeprecated
                                text={paragraph}
                                key={paragraph}
                                className={cls.paragraph}
                            />
                        ))}
                    </div>
                }
            />
        );
    },
);

export { ArticleTextBlockComponent };
