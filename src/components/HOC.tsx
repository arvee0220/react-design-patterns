import { useEffect, useState, type ComponentType, type JSX, type ReactNode } from "react";

type WithDataProps<T> = {
    fetchData: () => Promise<T>;
};

// Higher Order Components
export function withData<T, P extends { data: T }>(WrappedComponent: ComponentType<P>) {
    return function EnhanceComponent(props: Omit<P, "data"> & WithDataProps<T>) {
        const [data, setData] = useState<NonNullable<T> | null>(null);
        const [loading, setLoading] = useState<boolean>(false);

        useEffect(() => {
            const fetch = async () => {
                try {
                    setLoading(true);
                    const result = await props.fetchData();
                    setData(result as NonNullable<T>);
                } catch (error) {
                    console.error("Error fetching data:", error);
                } finally {
                    setLoading(false);
                }
            };

            fetch();
        }, [props]);

        if (loading) return <p>Loading...</p>;
        if (!data) return <p>No data available</p>;

        const { fetchData, ...restProps } = props;

        return (
            <WrappedComponent
                {...({
                    ...restProps,
                    data
                } as unknown as P)}
            />
        );
    };
}
