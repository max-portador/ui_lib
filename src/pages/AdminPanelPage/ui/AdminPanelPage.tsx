import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPAge = () => {
    const { t } = useTranslation();

    return (
        <Page>
            {t('Админ панель')}
        </Page>
    );
};

export default AdminPanelPAge;
