import { memo, Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInited, initAuthData } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { ToggleFeatures } from '@/shared/lib/features';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from '@/app/providers/router';
import { MainLayout } from '@/shared/layouts/MainLayout/MainLayout';
import { PageLoader } from '@/widgets/PageLoader';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';
import { useAppToolbar } from '@/app/lib/useAppToolbar';
import { withTheme } from './providers/ThemeProvider';

const App = memo(() => {
    const { theme } = useTheme();
    const dispatch = useAppDispatch();
    const inited = useSelector(getUserInited);
    const toolbar = useAppToolbar();

    useEffect(() => {
        if (!inited) {
            dispatch(initAuthData());
        }
    }, [dispatch, inited]);

    if (!inited) {
        return (
            <ToggleFeatures
                feature="isAppRedesigned"
                on={
                    <div
                        id="app"
                        className={classNames('app_redesigned', {}, [theme])}
                    >
                        <AppLoaderLayout />
                    </div>
                }
                off={<PageLoader />}
            />
        );
    }

    return (
        <ToggleFeatures
            feature="isAppRedesigned"
            on={
                <div
                    id="app"
                    className={classNames('app_redesigned', {}, [theme])}
                >
                    <Suspense fallback="">
                        <MainLayout
                            header={<Navbar />}
                            content={<AppRouter />}
                            sidebar={<Sidebar />}
                            toolbar={toolbar}
                        />
                    </Suspense>
                </div>
            }
            off={
                <div id="app" className={classNames('app', {}, [theme])}>
                    <Suspense fallback="">
                        <Navbar />
                        <div className="content-page">
                            <Sidebar />
                            <AppRouter />
                        </div>
                    </Suspense>
                </div>
            }
        />
    );
});

export default withTheme(App);
