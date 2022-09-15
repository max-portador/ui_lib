import {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AboutPage} from "pages/AboutPage";
import {MainPage} from "pages/MainPage";
import './styles/index.scss'


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>
                {`${theme === Theme.DARK ? 'Светлая' : 'Тёмная'} тема`}
            </button>

            <div/>

            <Link to={'/'}>Главная страница</Link>

            <span> </span>

            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'/'} element={<MainPage/>}/>
                </Routes>
            </Suspense>
        </div>
    );
};

export default App;