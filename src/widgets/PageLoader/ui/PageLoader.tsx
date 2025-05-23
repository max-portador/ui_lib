import { classNames } from '@/shared/lib/classNames/classNames';
import { Loader } from '@/shared/ui/depricated/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
