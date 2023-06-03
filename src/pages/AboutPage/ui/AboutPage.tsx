import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';
import { Counter } from '@/entities/Counter';

const AboutPage = () => {
    const { t } = useTranslation();

    return (
        <Page data-testid="AboutPage">
            {t('О сайте')}
            <Counter />
        </Page>
    );
};

export default AboutPage;
