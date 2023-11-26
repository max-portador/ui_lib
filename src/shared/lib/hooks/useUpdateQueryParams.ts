import { useSearchParams } from 'react-router-dom';

export const useUpdateQueryParams = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const updateQueryParam = (newValues: Record<string, string>) => {
        const newSearchParams = new URLSearchParams(searchParams);
        Object.entries(newValues).forEach(([paramKey, newValue]) => {
            newSearchParams.set(paramKey, newValue);
        });
        setSearchParams(newSearchParams, { replace: true });
    };

    return { updateQueryParam };
};
