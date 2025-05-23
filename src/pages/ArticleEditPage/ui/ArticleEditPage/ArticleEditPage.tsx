import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { className } = props;
    const { id } = useParams<{ id: string }>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames('', {}, [className])}>
            {t(isEdit ? 'EDIT PAGE' : 'NEW PAGE')}
        </Page>
    );
});

export default ArticleEditPage;
