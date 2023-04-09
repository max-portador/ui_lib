import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { RatingCard } from '@/entities/RatingCard';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Главная страница')}
            <RatingCard
                title="Как вам статья?"
                hasFeedback
                feedbackTitle="Оставьте отзыв о статье"
            />
        </Page>
    );
};

export default MainPage;
