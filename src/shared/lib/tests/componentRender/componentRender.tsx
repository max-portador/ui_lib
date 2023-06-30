import { ReactNode } from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ReducersMapObject } from '@reduxjs/toolkit';
import i18nForTest from '@/shared/config/i18n/i18nForTest';
import { StateSchema, StoreProvider } from '@/app/providers/StoreProvider';
import { Theme } from '@/shared/const/theme';
import { ThemeProvider } from '../../../../app/providers/ThemeProvider';
import '../../../../app/styles/index.scss';

export interface componentRenderProps {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
    theme?: Theme;
}

interface TestProviderProps {
    children: ReactNode;
    options?: componentRenderProps;
}

export function TestProvider(props: TestProviderProps) {
    const { children, options = {} } = props;

    const {
        route = '/',
        initialState,
        asyncReducers,
        theme = Theme.DARK,
    } = options;

    return (
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider
                asyncReducers={asyncReducers}
                initialState={initialState as StateSchema}
            >
                <ThemeProvider initialTheme={theme}>
                    <I18nextProvider i18n={i18nForTest}>
                        <div className={`app ${theme}`}>{children}</div>
                    </I18nextProvider>
                </ThemeProvider>
            </StoreProvider>
        </MemoryRouter>
    );
}

export function componentRender(
    component: ReactNode,
    options: componentRenderProps = {},
) {
    return render(<TestProvider options={options}>{component}</TestProvider>);
}
