import { useEffect, useState } from "react";

interface DataProviderProps<T extends unknown[]> {
    render: (data: T) => React.ReactNode;
}

// Render props pattern
export default function DataProvider<T extends unknown[]>({ render }: DataProviderProps<T>) {
    const [data, setData] = useState<T | null>(null);

    useEffect(() => {
        setTimeout(() => setData([1, 2, 3, 4, 5] as T), 1000);
    }, []);

    if (data === null) {
        return null;
    }

    return render(data);
}
