import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/RatingCard';
import { Counter } from '@/entities/Counter';

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="MainPage">
            {t('Главная страница')}
            <RatingCard
                title="Как вам статья?"
                hasFeedback
                feedbackTitle="Оставьте отзыв о статье"
            />
            <Counter />
        </Page>
    );
};

export default MainPage;
