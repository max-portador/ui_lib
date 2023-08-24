import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { RatingCard } from '@/entities/RatingCard';
import { Counter } from '@/entities/Counter';
import { useUserAuthData } from '@/entities/User';
import { getFeatureFlag } from '@/shared/lib/features';

const MainPage = () => {
    const { t } = useTranslation();

    const authData = useUserAuthData();
    const isArticleRatingEnabled = getFeatureFlag('isArticleRatingEnabled');
    const isCounterEnabled = getFeatureFlag('isCounterEnabled');
    return (
        <Page data-testid="MainPage">
            {t('Главная страница')}
            {isArticleRatingEnabled && (
                <RatingCard
                    title="Как вам статья?"
                    hasFeedback
                    feedbackTitle="Оставьте отзыв о статье"
                />
            )}
            {isCounterEnabled && <Counter />}
        </Page>
    );
};

export default MainPage;
